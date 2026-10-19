const form = document.querySelector("#record-form");
const summary = document.querySelector("#summary");
const traceList = document.querySelector("#trace-list");

function escapeHtml(value) {
  return String(value).replace(/[&<>"\']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "\'": "&#39;" })[character]);
}

function check(ruleId, name, passed, explanation) {
  return { ruleId, name, passed, explanation };
}

function evaluate(record) {
  const currencies = ["ZAR", "GBP", "USD"];
  const categories = ["Travel", "Equipment", "Training", "Meals", "Other"];
  const checks = [
    check("RT-001", "Positive amount", record.amount > 0, record.amount > 0 ? "The amount is greater than zero." : "Enter an amount greater than zero."),
    check("RT-002", "Sample amount limit", record.amount <= 10000, record.amount <= 10000 ? "The amount is within the demonstration limit of 10,000 units." : "The demonstration limit is 10,000 units."),
    check("RT-003", "Category is recognised", categories.includes(record.category), categories.includes(record.category) ? `The category '${record.category}' is recognised by the sample policy.` : "Choose a category from the sample policy."),
    check("RT-004", "Currency is supported", currencies.includes(record.currency), currencies.includes(record.currency) ? `The currency '${record.currency}' is supported by this example.` : "Use ZAR, GBP or USD."),
    check("RT-005", "Receipt for higher amounts", record.amount < 250 || record.receiptAttached, record.amount < 250 ? "A receipt is not required by this sample rule for amounts below 250." : record.receiptAttached ? "A receipt is attached for an amount of 250 or more." : "Attach a receipt for amounts of 250 or more under this sample policy."),
    check("RT-006", "Submission date is present", Boolean(record.submittedOn), record.submittedOn ? `A submission date is present: ${record.submittedOn}.` : "Provide a submission date.")
  ];
  const passed = checks.filter((item) => item.passed).length;
  return { recordId: record.recordId, checks, passed, failed: checks.length - passed };
}

function render() {
  const data = new FormData(form);
  const result = evaluate({
    recordId: String(data.get("recordId") || "NO-ID"),
    amount: Number(data.get("amount")),
    currency: String(data.get("currency")),
    category: String(data.get("category")),
    submittedOn: String(data.get("submittedOn")),
    receiptAttached: data.get("receiptAttached") === "on"
  });
  const passedAll = result.failed === 0;
  summary.innerHTML = `<span class="summary-status ${passedAll ? "pass" : "fail"}">${passedAll ? "All rules passed" : "Review required"} <span class="summary-count">/ ${escapeHtml(result.recordId)}</span></span><span class="summary-count">${result.passed} passed · ${result.failed} failed</span>`;
  traceList.innerHTML = result.checks.map((item) => `<article class="trace-item ${item.passed ? "pass" : "fail"}"><span class="trace-symbol" aria-hidden="true">${item.passed ? "✓" : "!"}</span><div><p class="trace-id">${item.ruleId}</p><h3>${item.name}</h3><p>${item.explanation}</p></div></article>`).join("");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
});
form.addEventListener("change", render);
render();
