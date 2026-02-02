document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
    MOBILE MENU TOGGLE
  ========================================================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  }

  if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener("click", toggleMenu);
    menuOverlay.addEventListener("click", toggleMenu);
  }
});