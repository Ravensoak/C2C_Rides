/* =========================================================
  ACCOMMODATION PAGE SCRIPT
  - Mobile menu toggle
  - PWA refresh button
  - Load hotel cards from hotels.json
  - Load footer component
========================================================== */

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

  /* =========================================================
    FLOATING REFRESH BUTTON (PWA standalone only)
  ========================================================== */
  const refreshBtn = document.getElementById("refreshButton");
  let hideTimer;

  if (refreshBtn && window.matchMedia("(display-mode: standalone)").matches) {
    refreshBtn.style.display = "flex";
    setTimeout(() => refreshBtn.classList.add("visible"), 100);

    refreshBtn.addEventListener("click", () => window.location.reload());

    function resetHideTimer() {
      refreshBtn.classList.add("visible");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(
        () => refreshBtn.classList.remove("visible"),
        5000
      );
    }

    ["mousemove", "scroll", "touchstart"].forEach((evt) =>
      document.addEventListener(evt, resetHideTimer)
    );

    resetHideTimer();
  }

  /* =========================================================
    LOAD HOTELS FROM JSON
  ========================================================== */
  const hotelContainer = document.getElementById("hotelContainer");

  function renderHotels(hotels) {
    hotelContainer.innerHTML = hotels
      .map(
        (hotel) => `
        <div class="hotel-card">
          <img src="${hotel.image}" alt="${hotel.alt}">
          <h3>${hotel.name}</h3>
          <p><strong>Address:</strong> ${hotel.address}</p>
          <p>${hotel.description}</p>
          <p>
            <a href="${hotel.url}" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </p>
        </div>
      `
      )
      .join("");
  }

  function showHotelError() {
    hotelContainer.innerHTML = `
      <p class="error-message">
        Sorry — accommodation details couldn’t be loaded right now.
      </p>
    `;
  }

  if (hotelContainer) {
    fetch("data/hotels.json")
      .then((response) => {
        if (!response.ok) throw new Error("hotels.json failed to load");
        return response.json();
      })
      .then((hotels) => renderHotels(hotels))
      .catch((err) => {
        console.error("Failed to load hotels.json:", err);
        showHotelError();
      });
  }

  /* =========================================================
    COMPONENT LOADER (Footer, etc.)
  ========================================================== */
  function loadComponent(selector, url, fallbackHTML = "") {
    const container = document.querySelector(selector);
    if (!container) return;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then((html) => {
        container.innerHTML = html;
      })
      .catch((error) => {
        console.warn(`Component load failed: ${url}`, error);
        container.innerHTML = fallbackHTML;
      });
  }

  /* =========================================================
    LOAD STANDARD FOOTER
  ========================================================== */
  loadComponent(
    "#footer-placeholder",
    "footer.html",
    `
    <footer>
      <div class="footer-content">
        <span class="footer-text">© C2C Rides</span>
      </div>
    </footer>
    `
  );
});