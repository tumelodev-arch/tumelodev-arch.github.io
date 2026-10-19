document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const filterButtons = Array.from(document.querySelectorAll("[data-work-filter]"));
const workItems = Array.from(document.querySelectorAll("[data-work-item]"));
const filterStatus = document.querySelector("[data-filter-status]");

if (filterButtons.length && workItems.length && filterStatus) {
  const filterLabels = {
    all: "all work examples",
    professional: "professional work",
    learning: "learning exercises",
    wip: "planned work"
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.workFilter || "all";
      let visibleCount = 0;

      filterButtons.forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));
      });

      workItems.forEach((item) => {
        const visible = selectedFilter === "all" || item.dataset.category === selectedFilter;
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      const noun = visibleCount === 1 ? "item" : "items";
      filterStatus.textContent = `Showing ${visibleCount} ${noun}: ${filterLabels[selectedFilter] || filterLabels.all}.`;
    });
  });
}


const printButton = document.querySelector("[data-print-page]");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
