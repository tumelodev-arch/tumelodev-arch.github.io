document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const printButton = document.querySelector("[data-print-page]");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
