const STORAGE_KEY = "tracepad.entries.v1";
const form = document.querySelector("#entry-form");
const entryList = document.querySelector("#entry-list");
const entryCount = document.querySelector("#entry-count");
const editorTitle = document.querySelector("#editor-title");
const saveStatus = document.querySelector("#save-status");
const deleteButton = document.querySelector("#delete-entry");
let entries = readEntries();
let activeId = "";

function readEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((entry) => entry && typeof entry.id === "string") : [];
  } catch {
    return [];
  }
}

function persistEntries() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    saveStatus.textContent = "Saved in this browser.";
    return true;
  } catch {
    saveStatus.textContent = "Could not save. Browser storage may be disabled or full.";
    return false;
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function newEntry() {
  activeId = "";
  form.reset();
  form.elements.namedItem("id").value = "";
  editorTitle.textContent = "New investigation";
  deleteButton.disabled = true;
  saveStatus.textContent = "Notes are stored locally in this browser.";
  renderList();
}

function openEntry(entry) {
  activeId = entry.id;
  ["id", "title", "context", "steps", "hypothesis", "evidence", "outcome"].forEach((field) => {
    form.elements.namedItem(field).value = entry[field] ?? "";
  });
  editorTitle.textContent = "Edit investigation";
  deleteButton.disabled = false;
  saveStatus.textContent = `Last saved ${new Date(entry.updatedAt).toLocaleString()}.`;
  renderList();
}

function renderList() {
  entryCount.textContent = String(entries.length);
  entryList.innerHTML = entries.length ? entries.slice().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).map((entry) =>
    `<button type="button" class="entry-button" data-entry-id="${escapeHtml(entry.id)}" aria-pressed="${entry.id === activeId}"><strong>${escapeHtml(entry.title || "Untitled investigation")}</strong><small>${escapeHtml(new Date(entry.updatedAt).toLocaleDateString())}</small></button>`
  ).join("") : '<p class="rail-footnote">No saved investigations yet. Create one to start a trail.</p>';
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const id = activeId || (crypto.randomUUID ? crypto.randomUUID() : `note-${Date.now()}`);
  const existing = entries.find((entry) => entry.id === id);
  const entry = {
    id,
    title: String(data.get("title") || "").trim(),
    context: String(data.get("context") || "").trim(),
    steps: String(data.get("steps") || "").trim(),
    hypothesis: String(data.get("hypothesis") || "").trim(),
    evidence: String(data.get("evidence") || "").trim(),
    outcome: String(data.get("outcome") || "").trim(),
    createdAt: existing?.createdAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  entries = existing ? entries.map((item) => item.id === id ? entry : item) : [...entries, entry];
  activeId = id;
  persistEntries();
  editorTitle.textContent = "Edit investigation";
  deleteButton.disabled = false;
  renderList();
});

entryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-entry-id]");
  if (!button) return;
  const entry = entries.find((item) => item.id === button.dataset.entryId);
  if (entry) openEntry(entry);
});

document.querySelector("#new-entry").addEventListener("click", newEntry);
deleteButton.addEventListener("click", () => {
  if (!activeId) return;
  entries = entries.filter((entry) => entry.id !== activeId);
  persistEntries();
  newEntry();
});

document.querySelector("#export-entries").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tracepad-notes.json";
  link.click();
  URL.revokeObjectURL(url);
  saveStatus.textContent = "Export requested. Check your browser downloads.";
});

renderList();
newEntry();
