/* =========================================================
  No sepecific scripting required for meals page, but this file is included in the HTML in case we want to add some later.
========================================================== */
document.addEventListener("click", function (e) {
  const link = e.target.closest("a[data-external]");
  if (!link) return;
  e.preventDefault();
  window.open(link.href, "_system");
});
