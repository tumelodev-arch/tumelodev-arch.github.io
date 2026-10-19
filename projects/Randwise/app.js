"use strict";
(() => {
  const $ = (selector) => document.querySelector(selector);
  const form = $("#transaction-form");
  const storageKey = "randwise.transactions.v1";
  const monthInput = $("#report-month");
  const money = new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" });
  const categorySelect = $("#filter-category");
  const categories = ["Salary","Freelance","Housing","Groceries","Transport","Utilities","Health","Education","Subscriptions","Personal","Other"];
  let transactions = [];
  let editId = null;

  const now = new Date();
  const isoDate = (date) => {
    const d = new Date(date);
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  };
  const monthKey = (date) => String(date).slice(0,7);
  const offsetDate = (days) => {
    const d = new Date();
    d.setDate(d.getDate()+days);
    return isoDate(d);
  };
  const id = () => globalThis.crypto?.randomUUID?.() ?? "tx-"+Date.now()+"-"+Math.random().toString(16).slice(2);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const starter = () => [
    {type:"income",description:"Monthly salary",category:"Salary",amount:24500,date:offsetDate(-1),note:"Synthetic example"},
    {type:"income",description:"Design support",category:"Freelance",amount:1800,date:offsetDate(-4),note:"Synthetic example"},
    {type:"expense",description:"Rent",category:"Housing",amount:7800,date:offsetDate(-2),note:"Synthetic example"},
    {type:"expense",description:"Groceries",category:"Groceries",amount:1625.40,date:offsetDate(-3),note:"Synthetic example"},
    {type:"expense",description:"Electricity",category:"Utilities",amount:840,date:offsetDate(-5),note:"Synthetic example"},
    {type:"expense",description:"Transport",category:"Transport",amount:960,date:offsetDate(-6),note:"Synthetic example"},
    {type:"expense",description:"Internet",category:"Utilities",amount:699,date:offsetDate(-8),note:"Synthetic example"},
    {type:"expense",description:"Medical aid",category:"Health",amount:1250,date:offsetDate(-9),note:"Synthetic example"},
    {type:"expense",description:"Cloud storage",category:"Subscriptions",amount:129,date:offsetDate(-10),note:"Synthetic example"},
    {type:"expense",description:"Weekend meal",category:"Personal",amount:285,date:offsetDate(-11),note:"Synthetic example"},
    {type:"income",description:"Refund",category:"Other",amount:320,date:offsetDate(-13),note:"Synthetic example"}
  ].map(item=>({...item,id:id()}));
  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(transactions));
      $("#storage-status").textContent = "Saved in this browser";
    } catch {
      $("#storage-status").textContent = "Browser storage unavailable";
      $("#form-message").textContent = "Could not save locally. Check this browser's storage settings.";
    }
  }
  function validTransaction(item) {
    return item && typeof item.id==="string" && ["income","expense"].includes(item.type) && typeof item.description==="string" && item.description.trim() && categories.includes(item.category) && Number.isFinite(Number(item.amount)) && Number(item.amount)>0 && /^\d{4}-\d{2}-\d{2}$/.test(item.date);
  }
  function load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (Array.isArray(parsed) && parsed.every(validTransaction)) { transactions=parsed; return; }
    } catch {}
    transactions=starter();
    persist();
  }
  function visibleTransactions() {
    const month=monthInput.value, query=$("#search").value.trim().toLowerCase(), type=$("#filter-type").value, category=categorySelect.value;
    return transactions.filter(t=>(!month || monthKey(t.date)===month) && (!query || [t.description,t.category,t.note].join(" ").toLowerCase().includes(query)) && (type==="all"||t.type===type) && (category==="all"||t.category===category)).sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id));
  }
  function renderCategoryOptions() {
    const old=categorySelect.value;
    categorySelect.innerHTML='<option value="all">All categories</option>'+categories.map(c=>'<option>'+escapeHtml(c)+'</option>').join("");
    if ([...categorySelect.options].some(o=>o.value===old)) categorySelect.value=old;
  }
  function renderMetrics() {
    const month=monthInput.value;
    const monthRows=transactions.filter(t=>!month||monthKey(t.date)===month);
    const income=monthRows.filter(t=>t.type==="income").reduce((n,t)=>n+Number(t.amount),0);
    const expenses=monthRows.filter(t=>t.type==="expense").reduce((n,t)=>n+Number(t.amount),0);
    const net=income-expenses;
    $("#metric-income").textContent=money.format(income);
    $("#metric-expenses").textContent=money.format(expenses);
    $("#metric-net").textContent=money.format(net);
    $("#metric-net-caption").textContent=net<0?"Spending exceeds recorded income":"Income less expenses";
    $("#metric-rate").textContent=income>0?Math.round(net/income*100)+"%":"—";
  }
  function renderRows(rows) {
    $("#visible-count").textContent=rows.length+" entr"+(rows.length===1?"y":"ies");
    $("#empty-state").hidden=rows.length!==0;
    $("#transaction-rows").innerHTML=rows.map(t=>'<tr><td><div class="transaction-name" title="'+escapeHtml(t.description)+'">'+escapeHtml(t.description)+'</div><div class="transaction-category">'+escapeHtml(t.category)+(t.note?' · '+escapeHtml(t.note):'')+'</div></td><td>'+escapeHtml(t.date)+'</td><td><span class="type-chip '+t.type+'">'+t.type+'</span></td><td class="numeric '+(t.type==="income"?"money-income":"money-expense")+'">'+(t.type==="income"?"+":"−")+money.format(Number(t.amount))+'</td><td><div class="row-actions"><button type="button" data-edit="'+escapeHtml(t.id)+'">Edit</button><button type="button" data-delete="'+escapeHtml(t.id)+'" aria-label="Delete '+escapeHtml(t.description)+'">Delete</button></div></td></tr>').join("");
  }
  function renderBreakdown() {
    const monthRows=transactions.filter(t=>t.type==="expense" && (!monthInput.value||monthKey(t.date)===monthInput.value));
    const totals=new Map();
    monthRows.forEach(t=>totals.set(t.category,(totals.get(t.category)||0)+Number(t.amount)));
    const sorted=[...totals.entries()].sort((a,b)=>b[1]-a[1]);
    const max=sorted[0]?.[1]||1;
    $("#category-breakdown").innerHTML=sorted.length?sorted.map(([name,total])=>'<div class="breakdown-row"><span class="breakdown-label">'+escapeHtml(name)+'</span><div class="bar-track" role="img" aria-label="'+escapeHtml(name)+': '+money.format(total)+'"><div class="bar-fill" style="width:'+Math.round(total/max*100)+'%"></div></div><span class="breakdown-amount">'+money.format(total)+'</span></div>').join(""):'<p class="empty-state">No expense entries for this month yet.</p>';
  }
  function render() { const rows=visibleTransactions(); renderMetrics(); renderRows(rows); renderBreakdown(); }
  function resetForm() {
    editId=null; form.reset(); form.elements.id.value="";
    form.elements.date.value=isoDate(now); form.elements.type.value="expense";
    $("#form-title").textContent="Add a transaction"; $("#form-mode").textContent="NEW";
    $("#save-transaction").textContent="Save transaction"; $("#cancel-edit").hidden=true;
    $("#form-message").textContent="";
  }
  function editTransaction(transactionId) {
    const item=transactions.find(t=>t.id===transactionId); if(!item)return;
    editId=item.id;
    for (const key of ["id","type","date","description","category","amount","note"]) form.elements[key].value=item[key]??"";
    $("#form-title").textContent="Edit transaction"; $("#form-mode").textContent="EDIT";
    $("#save-transaction").textContent="Update transaction"; $("#cancel-edit").hidden=false;
    $("#form-message").textContent="Editing "+item.description;
    form.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
  }
  function csvCell(value) {
    let text=String(value??"");
    if (/^[=+@\t\r]/.test(text) || /^-/.test(text)) text="'"+text;
    return '"'+text.replace(/"/g,'""')+'"';
  }
  function exportCsv() {
    const rows=visibleTransactions(); const columns=["date","type","description","category","amount","note"];
    const csv=[columns.join(","),...rows.map(t=>columns.map(k=>csvCell(t[k])).join(","))].join("\r\n");
    const url=URL.createObjectURL(new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"}));
    const a=document.createElement("a"); a.href=url; a.download="randwise-transactions-"+(monthInput.value||"all")+".csv"; a.click(); URL.revokeObjectURL(url);
  }

  form.addEventListener("submit",event=>{
    event.preventDefault();
    const data=new FormData(form);
    const item={id:editId||id(),type:String(data.get("type")),date:String(data.get("date")),description:String(data.get("description")).trim(),category:String(data.get("category")),amount:Number(data.get("amount")),note:String(data.get("note")||"").trim()};
    if(!validTransaction(item)){ $("#form-message").textContent="Check the date, category, description and positive amount."; return; }
    const wasEditing=Boolean(editId);
    if(editId) transactions=transactions.map(t=>t.id===editId?item:t); else transactions.push(item);
    persist(); resetForm(); render();
    $("#form-message").textContent=wasEditing?"Transaction updated.":"Transaction saved.";
  });
  $("#transaction-rows").addEventListener("click",event=>{
    const button=event.target.closest("button"); if(!button)return;
    if(button.dataset.edit) editTransaction(button.dataset.edit);
    if(button.dataset.delete) {
      const item=transactions.find(t=>t.id===button.dataset.delete); if(!item)return;
      transactions=transactions.filter(t=>t.id!==item.id); persist();
      if(editId===item.id)resetForm(); render();
    }
  });
  $("#cancel-edit").addEventListener("click",resetForm);
  $("#report-month").addEventListener("change",render);
  $("#search").addEventListener("input",()=>renderRows(visibleTransactions()));
  $("#filter-type").addEventListener("change",()=>renderRows(visibleTransactions()));
  $("#filter-category").addEventListener("change",()=>renderRows(visibleTransactions()));
  $("#export-csv").addEventListener("click",exportCsv);
  $("#reset-demo").addEventListener("click",()=>{
    if(!confirm("Replace local entries with the synthetic Randwise starter dataset?"))return;
    transactions=starter(); persist(); resetForm(); render();
  });
  monthInput.value=String(now.getFullYear())+"-"+String(now.getMonth()+1).padStart(2,"0");
  form.elements.date.value=isoDate(now);
  renderCategoryOptions(); load(); render();
})();
