/* =========================================================
   RIDE HISTORY PAGE SCRIPT
   Handles:
   - Mobile menu toggle
   - Accordion interactions
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     MOBILE MENU TOGGLE
  ========================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  /**
   * Toggles the mobile menu and overlay visibility.
   */
  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  }

  // Attach menu toggle events only if all elements exist
  if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener("click", toggleMenu);
    menuOverlay.addEventListener("click", toggleMenu);
  }

  /* =========================================================
     ACCORDION FUNCTIONALITY
  ========================================================== */

  const headers = document.querySelectorAll(".accordion-header");

  /**
   * Closes all accordion sections.
   */
  function closeAllAccordions() {
    const allHeaders = document.querySelectorAll(".accordion-header");
    const allContents = document.querySelectorAll(".accordion-content");
    const allItems = document.querySelectorAll(".accordion-item");

    allHeaders.forEach(h => h.classList.remove("active"));
    allItems.forEach(item => item.classList.remove("active"));

    allContents.forEach(content => {
      content.classList.remove("open");
      content.style.maxHeight = null;
    });
  }

  /**
   * Opens a specific accordion section.
   * @param {HTMLElement} header - The clicked accordion header.
   */
  function openAccordion(header) {
    const item = header.parentElement;
    const content = header.nextElementSibling;

    header.classList.add("active");
    item.classList.add("active");
    content.classList.add("open");

    // Set max-height for smooth animation
    content.style.maxHeight = content.scrollHeight + "px";
  }

  // Attach accordion behavior
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const isActive = header.classList.contains("active");

      // Always close all first
      closeAllAccordions();

      // Re-open only if the clicked one was not already active
      if (!isActive) {
        openAccordion(header);
      }
    });
  });

});