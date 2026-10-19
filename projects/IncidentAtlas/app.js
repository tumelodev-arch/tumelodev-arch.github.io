"use strict";
(() => {
  const $=s=>document.querySelector(s), form=$("#incident-form"), storageKey="incidentAtlas.records.v1";
  let records=[],editingId=null;
  const currentDate=new Date();
  const localInputValue=(date)=>{const d=new Date(date);d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,16);};
  const newId=()=>globalThis.crypto?.randomUUID?.()??"inc-"+Date.now()+"-"+Math.random().toString(16).slice(2);
  const escapeHtml=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const dateOffset=(hours)=>{const d=new Date();d.setHours(d.getHours()+hours);return d.toISOString();};
  const starter=()=>[
    {title:"Elevated authentication failures",service:"Authentication",severity:"P1",status:"open",startedAt:dateOffset(-1.6),resolvedAt:null,impact:"Synthetic scenario: sign-in error rate rose after a configuration change.",response:"Rollback candidate identified. Confirm error rate after mitigation.",},
    {title:"Slow report generation",service:"Data pipeline",severity:"P2",status:"open",startedAt:dateOffset(-4.2),resolvedAt:null,impact:"Synthetic scenario: report generation is slower than the expected window.",response:"Comparing queue depth against the last known healthy run.",},
    {title:"Notification retries increasing",service:"Notifications",severity:"P3",status:"resolved",startedAt:dateOffset(-32),resolvedAt:dateOffset(-29),impact:"Synthetic scenario: a downstream test endpoint returned intermittent errors.",response:"Retry settings returned to baseline; sample checks passed.",},
    {title:"Public API latency spike",service:"Public API",severity:"P2",status:"resolved",startedAt:dateOffset(-76),resolvedAt:dateOffset(-73),impact:"Synthetic scenario: p95 request latency increased during a load test.",response:"A test workload was stopped and latency returned to baseline.",},
    {title:"Checkout sandbox unresponsive",service:"Payments sandbox",severity:"P4",status:"resolved",startedAt:dateOffset(-120),resolvedAt:dateOffset(-119.5),impact:"Synthetic scenario: a sandbox endpoint was unavailable briefly.",response:"Endpoint recovered. No real payments or customers involved.",}
  ].map(r=>({...r,id:newId()}));
  const toMs=value=>new Date(value).getTime();
  function validRecord(r){return r&&typeof r.id==="string"&&typeof r.title==="string"&&r.title.trim()&&typeof r.service==="string"&&["P1","P2","P3","P4"].includes(r.severity)&&["open","resolved"].includes(r.status)&&Number.isFinite(toMs(r.startedAt))&&(r.status==="open"||Number.isFinite(toMs(r.resolvedAt)));}
  function save(){try{localStorage.setItem(storageKey,JSON.stringify(records));}catch{$("#form-message").textContent="Could not save locally. Check browser storage settings.";}}
  function load(){try{const data=JSON.parse(localStorage.getItem(storageKey)||"null");if(Array.isArray(data)&&data.every(validRecord)){records=data;return;}}catch{}records=starter();save();}
  function fmt(date){return new Intl.DateTimeFormat("en-ZA",{dateStyle:"medium",timeStyle:"short"}).format(new Date(date));}
  function duration(start,end){const mins=Math.max(0,Math.round((toMs(end)-toMs(start))/60000));if(mins<60)return mins+" min";const hours=Math.floor(mins/60),rem=mins%60;if(hours<48)return hours+"h "+rem+"m";return Math.floor(hours/24)+"d "+hours%24+"h";}
  function filtered(){const q=$("#search").value.trim().toLowerCase(),state=$("#filter-status").value,sev=$("#filter-severity").value;return records.filter(r=>(!q||[r.title,r.service,r.impact,r.response].join(" ").toLowerCase().includes(q))&&(state==="all"||r.status===state)&&(sev==="all"||r.severity===sev)).sort((a,b)=>(a.status===b.status?0:a.status==="open"?-1:1)||("P1234".indexOf(a.severity)-"P1234".indexOf(b.severity))||toMs(b.startedAt)-toMs(a.startedAt));}
  function median(values){if(!values.length)return "—";const s=values.sort((a,b)=>a-b),m=Math.floor(s.length/2);const value=s.length%2?s[m]:(s[m-1]+s[m])/2;return duration(0,value*60000);}
  function renderMetrics(){const open=records.filter(r=>r.status==="open"),critical=open.filter(r=>r.severity==="P1"),month=currentDate.getFullYear()+"-"+String(currentDate.getMonth()+1).padStart(2,"0"),resolved=records.filter(r=>r.status==="resolved"&&r.resolvedAt?.slice(0,7)===month),durations=records.filter(r=>r.status==="resolved").map(r=>(toMs(r.resolvedAt)-toMs(r.startedAt))/60000).filter(n=>Number.isFinite(n)&&n>=0);$("#metric-open").textContent=open.length;$("#metric-critical").textContent=critical.length;$("#metric-resolved").textContent=resolved.length;$("#metric-mttr").textContent=median(durations);}
  function renderList(){const rows=filtered();$("#visible-count").textContent=rows.length+" incident"+(rows.length===1?"":"s");$("#empty-state").hidden=rows.length>0;$("#incident-list").innerHTML=rows.map(r=>{
    const stateButton=r.status==="open"?'<button class="resolve-button" data-resolve="'+escapeHtml(r.id)+'">Mark resolved</button>':'<button data-reopen="'+escapeHtml(r.id)+'">Reopen</button>';
    return '<article class="incident-card sev-'+r.severity.toLowerCase()+'"><div class="incident-main"><div class="incident-top"><h3 class="incident-title">'+escapeHtml(r.title)+'</h3><div class="incident-meta"><span class="badge '+r.severity.toLowerCase()+'">'+escapeHtml(r.severity)+'</span><span class="badge '+r.status+'">'+escapeHtml(r.status)+'</span></div></div><p class="incident-time">'+escapeHtml(r.service)+' · Started '+escapeHtml(fmt(r.startedAt))+(r.status==="resolved"?' · Resolved '+escapeHtml(fmt(r.resolvedAt)):' · Open for '+escapeHtml(duration(r.startedAt,new Date().toISOString())))+'</p>'+(r.impact?'<p class="incident-impact">'+escapeHtml(r.impact)+'</p>':'')+(r.response?'<p class="incident-response"><strong>Response:</strong> '+escapeHtml(r.response)+'</p>':'')+'<div class="incident-actions">'+stateButton+'<button data-edit="'+escapeHtml(r.id)+'">Edit</button><button data-delete="'+escapeHtml(r.id)+'">Delete</button></div></div></article>';
  }).join("");}
  function render(){renderMetrics();renderList();}
  function resetForm(){editingId=null;form.reset();form.elements.id.value="";form.elements.startedAt.value=localInputValue(new Date());form.elements.severity.value="P2";$("#form-title").textContent="Log an incident";$("#form-mode").textContent="NEW";$("#save-incident").textContent="Save incident";$("#cancel-edit").hidden=true;$("#form-message").textContent="";}
  function edit(id){const r=records.find(x=>x.id===id);if(!r)return;editingId=id;for(const key of ["id","title","service","severity","impact","response"])form.elements[key].value=r[key]??"";form.elements.startedAt.value=localInputValue(r.startedAt);$("#form-title").textContent="Edit incident";$("#form-mode").textContent="EDIT";$("#save-incident").textContent="Update incident";$("#cancel-edit").hidden=false;form.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}
  form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const old=records.find(r=>r.id===editingId);const rec={id:editingId||newId(),title:String(d.get("title")).trim(),service:String(d.get("service")),severity:String(d.get("severity")),status:old?.status||"open",startedAt:new Date(String(d.get("startedAt"))).toISOString(),resolvedAt:old?.resolvedAt||null,impact:String(d.get("impact")||"").trim(),response:String(d.get("response")||"").trim()};if(!validRecord(rec)){$("#form-message").textContent="Check the title and incident start time.";return;}records=old?records.map(r=>r.id===old.id?rec:r):[rec,...records];save();resetForm();render();$("#form-message").textContent="Incident saved locally.";});
  $("#incident-list").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const id=b.dataset.edit||b.dataset.delete||b.dataset.resolve||b.dataset.reopen;if(!id)return;const rec=records.find(r=>r.id===id);if(!rec)return;
    if(b.dataset.edit){edit(id);return;}
    if(b.dataset.delete){if(!confirm("Delete this incident from the local workspace?"))return;records=records.filter(r=>r.id!==id);if(editingId===id)resetForm();}
    if(b.dataset.resolve){rec.status="resolved";rec.resolvedAt=new Date().toISOString();}
    if(b.dataset.reopen){rec.status="open";rec.resolvedAt=null;}
    save();render();
  });
  ["search","filter-status","filter-severity"].forEach(id=>$("#"+id).addEventListener(id==="search"?"input":"change",renderList));
  $("#cancel-edit").addEventListener("click",resetForm);
  $("#reset-demo").addEventListener("click",()=>{if(!confirm("Replace the current local incident log with the synthetic sample incidents?"))return;records=starter();save();resetForm();render();});
  $("#export-json").addEventListener("click",()=>{const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),schemaVersion:1,incidents:records},null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="incident-atlas-export.json";a.click();URL.revokeObjectURL(url);});
  form.elements.startedAt.value=localInputValue(new Date());load();render();
})();
