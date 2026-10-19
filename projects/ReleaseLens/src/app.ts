type Outcome = "succeeded" | "failed" | "cancelled";
type Category = "Tests" | "Build" | "Deployment" | "Configuration";
type Run = {
  id: string;
  branch: string;
  commit: string;
  outcome: Outcome;
  category: Category | null;
  durationSeconds: number;
  finishedAt: string;
  summary: string;
  steps: string[];
};

const runs: Run[] = [
  { id: "RUN-108", branch: "feature/receipt-check", commit: "8ac14d2", outcome: "failed", category: "Tests", durationSeconds: 184, finishedAt: "2026-10-18 14:32", summary: "A synthetic unit test expected a receipt warning for an amount at the policy boundary.", steps: ["Restore dependencies: passed", "Compile application: passed", "Validation tests: failed"] },
  { id: "RUN-107", branch: "main", commit: "4f2aa01", outcome: "succeeded", category: null, durationSeconds: 231, finishedAt: "2026-10-18 12:09", summary: "Sample build completed with all listed checks passing.", steps: ["Restore dependencies: passed", "Compile application: passed", "Test suite: passed"] },
  { id: "RUN-106", branch: "feature/health-endpoint", commit: "cd31c5a", outcome: "failed", category: "Build", durationSeconds: 74, finishedAt: "2026-10-17 16:41", summary: "A synthetic compile step failed after an example method signature changed.", steps: ["Restore dependencies: passed", "Compile application: failed", "Tests: not run"] },
  { id: "RUN-105", branch: "main", commit: "d834e0f", outcome: "succeeded", category: null, durationSeconds: 218, finishedAt: "2026-10-17 10:22", summary: "The sample main branch run completed all checks.", steps: ["Restore dependencies: passed", "Compile application: passed", "Test suite: passed"] },
  { id: "RUN-104", branch: "feature/report-view", commit: "aa52c20", outcome: "cancelled", category: "Configuration", durationSeconds: 35, finishedAt: "2026-10-16 15:07", summary: "The sample run was cancelled during setup because a required demo setting was not present.", steps: ["Restore dependencies: started", "Required demo setting: missing", "Run: cancelled"] },
  { id: "RUN-103", branch: "feature/deploy-preview", commit: "2be48d0", outcome: "failed", category: "Deployment", durationSeconds: 146, finishedAt: "2026-10-16 11:50", summary: "A synthetic health check did not pass after the preview service was started.", steps: ["Compile application: passed", "Deploy preview: passed", "Health check: failed"] },
  { id: "RUN-102", branch: "main", commit: "73d992c", outcome: "succeeded", category: null, durationSeconds: 205, finishedAt: "2026-10-15 13:11", summary: "A previous sample run completed successfully.", steps: ["Restore dependencies: passed", "Compile application: passed", "Test suite: passed"] },
  { id: "RUN-101", branch: "feature/filter-state", commit: "0b781cf", outcome: "succeeded", category: null, durationSeconds: 197, finishedAt: "2026-10-14 09:28", summary: "The synthetic filter-state change passed its sample checks.", steps: ["Compile application: passed", "Unit tests: passed", "Review snapshot: passed"] }
];

const list = document.querySelector<HTMLDivElement>("#run-list")!;
const details = document.querySelector<HTMLDivElement>("#run-detail")!;
const search = document.querySelector<HTMLInputElement>("#search-runs")!;
const outcomeFilter = document.querySelector<HTMLSelectElement>("#filter-outcome")!;
const categoryFilter = document.querySelector<HTMLSelectElement>("#filter-category")!;
const visibleCount = document.querySelector<HTMLSpanElement>("#visible-count")!;
const totalMetric = document.querySelector<HTMLElement>("#metric-total")!;
const failedMetric = document.querySelector<HTMLElement>("#metric-failed")!;
const rateMetric = document.querySelector<HTMLElement>("#metric-rate")!;
const topCategoryMetric = document.querySelector<HTMLElement>("#metric-top-category")!;
const breakdown = document.querySelector<HTMLDivElement>("#category-breakdown")!;
const exportButton = document.querySelector<HTMLButtonElement>("#export-runs")!;
const exportSummary = document.querySelector<HTMLParagraphElement>("#export-summary")!;
let selectedId = runs[0].id;

function resultLabel(outcome: Outcome): string {
  return outcome.charAt(0).toUpperCase() + outcome.slice(1);
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return minutes > 0 ? `${minutes}m ${remainder.toString().padStart(2, "0")}s` : `${remainder}s`;
}

function filteredRuns(): Run[] {
  const query = search.value.trim().toLowerCase();
  const outcome = outcomeFilter.value;
  const category = categoryFilter.value;
  return runs.filter((run) => {
    const matchesText = !query || [run.id, run.branch, run.commit, run.summary].join(" ").toLowerCase().includes(query);
    const matchesOutcome = outcome === "all" || run.outcome === outcome;
    const matchesCategory = category === "all" || run.category === category;
    return matchesText && matchesOutcome && matchesCategory;
  });
}

function renderBreakdown(current: Run[]): void {
  const counts = new Map<string, number>();
  current.filter((run) => run.outcome === "failed").forEach((run) => {
    const category = run.category ?? "Unclassified";
    counts.set(category, (counts.get(category) ?? 0) + 1);
  });
  const entries = [...counts.entries()].sort((left, right) => right[1] - left[1]);
  const top = entries[0];
  topCategoryMetric.textContent = top ? top[0] : "None";
  if (!entries.length) {
    breakdown.innerHTML = '<p class="empty-state">No failed runs match these filters.</p>';
    return;
  }
  const max = top![1];
  breakdown.innerHTML = entries.map(([label, count]) => `<div class="category-row"><div class="category-row-top"><span>${label}</span><span>${count}</span></div><div class="bar-track" aria-label="${label}: ${count} failed runs"><div class="bar-fill" style="width:${Math.round((count / max) * 100)}%"></div></div></div>`).join("");
}

function renderDetails(run: Run | undefined): void {
  if (!run) {
    details.innerHTML = '<p class="empty-state">Choose a run to inspect its sample summary.</p>';
    return;
  }
  const category = run.category ?? "No failure category";
  details.innerHTML = `<p class="detail-kicker">${run.id} / SAMPLE DETAIL</p><h3>${run.branch}</h3><p class="detail-summary">${run.summary}</p><div class="detail-grid"><div><span>Outcome</span><strong>${resultLabel(run.outcome)}</strong></div><div><span>Failure category</span><strong>${category}</strong></div><div><span>Commit</span><strong>${run.commit}</strong></div><div><span>Duration</span><strong>${formatDuration(run.durationSeconds)}</strong></div><div><span>Finished</span><strong>${run.finishedAt}</strong></div><div><span>Data source</span><strong>Synthetic fixture</strong></div></div><p class="detail-kicker">STEPS</p><div class="detail-steps">${run.steps.map((step) => `<div class="detail-step">${step}</div>`).join("")}</div>`;
}


function csvCell(value: string | number | null): string {
  return '"' + String(value ?? "").replace(/"/g, '""') + '"';
}

function exportFilteredRuns(): void {
  const current = filteredRuns();
  const columns = ["id", "branch", "commit", "outcome", "category", "durationSeconds", "finishedAt", "summary", "steps"];
  const rows = [
    columns.map(csvCell).join(","),
    ...current.map((run) => {
      const record: Record<string, string | number | null> = {
        id: run.id,
        branch: run.branch,
        commit: run.commit,
        outcome: run.outcome,
        category: run.category,
        durationSeconds: run.durationSeconds,
        finishedAt: run.finishedAt,
        summary: run.summary,
        steps: run.steps.join(" | ")
      };
      return columns.map((column) => csvCell(record[column] ?? "")).join(",");
    })
  ];
  const blob = new Blob(["\\uFEFF" + rows.join("\\r\\n")], { type: "text/csv;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = "releaselens-filtered-runs.csv";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

function render(): void {
  const current = filteredRuns();
  exportButton.disabled = current.length === 0;
  exportSummary.textContent = "Exports the " + current.length + " visible synthetic record" + (current.length === 1 ? "" : "s.");
  visibleCount.textContent = `${current.length} record${current.length === 1 ? "" : "s"}`;
  totalMetric.textContent = String(current.length);
  failedMetric.textContent = String(current.filter((run) => run.outcome === "failed").length);
  const finished = current.filter((run) => run.outcome !== "cancelled");
  const successes = finished.filter((run) => run.outcome === "succeeded").length;
  rateMetric.textContent = finished.length ? `${Math.round((successes / finished.length) * 100)}%` : "N/A";
  renderBreakdown(current);
  if (!current.some((run) => run.id === selectedId)) selectedId = current[0]?.id ?? "";
  list.innerHTML = current.length ? current.map((run) => `<button class="run-button" type="button" data-run-id="${run.id}" aria-pressed="${run.id === selectedId}"><span><span class="run-id">${run.id}</span><strong>${run.branch}</strong></span><span class="outcome ${run.outcome}">${resultLabel(run.outcome)}</span><span class="run-meta">${run.finishedAt} · ${formatDuration(run.durationSeconds)}</span></button>`).join("") : '<p class="empty-state">No runs match these filters. Change the query or select a different outcome.</p>';
  renderDetails(current.find((run) => run.id === selectedId));
}

list.addEventListener("click", (event: MouseEvent) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-run-id]");
  if (!button) return;
  selectedId = button.dataset.runId ?? "";
  render();
});
search.addEventListener("input", render);
outcomeFilter.addEventListener("change", render);
categoryFilter.addEventListener("change", render);
exportButton.addEventListener("click", exportFilteredRuns);
render();
