/* =========================================================
  Site SCRIPT
  - FLOATING REFRESH BUTTON (PWA standalone only)
  - LIGHTBOX FUNCTIONALITY
  - DYNAMIC COMPONENT LOADING (e.g., footer)
========================================================== */ /* =========================================================
  FLOATING REFRESH BUTTON (PWA standalone only)
========================================================== */
const refreshBtn = document.getElementById("refreshButton");
let hideTimer;
let waitingServiceWorker = null;
let refreshingForUpdate = false;

if (refreshBtn && window.matchMedia("(display-mode: standalone)").matches) {
  refreshBtn.style.display = "flex";
  setTimeout(() => refreshBtn.classList.add("visible"), 100);

  refreshBtn.addEventListener("click", () => window.location.reload());

  function resetHideTimer() {
    refreshBtn.classList.add("visible");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => refreshBtn.classList.remove("visible"), 5000);
  }

  ["mousemove", "scroll", "touchstart"].forEach((evt) =>
    document.addEventListener(evt, resetHideTimer),
  );

  resetHideTimer();
}

/* =========================================================
  LIGHTBOX FUNCTIONALITY
==========================================================
let redirectTarget = null;

function openLightbox(imgSrc, text, targetUrl) {
  const overlay = document.getElementById('lightbox');
  if (!overlay) return;

  const content = overlay.querySelector('.lightbox-content');
  const img = overlay.querySelector('#lightbox-img');
  const txt = overlay.querySelector('#lightbox-text');

  img.src = imgSrc;
  txt.innerHTML = text;
  redirectTarget = targetUrl;

  overlay.classList.add('show');
  content.classList.remove('animate');
  void content.offsetWidth; // trigger reflow
  content.classList.add('animate');
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox');
  if (!overlay) return;

  overlay.classList.remove('show');

  if (redirectTarget) {
    window.open(redirectTarget, '_blank');
    redirectTarget = null;
  }
}

// Attach triggers to all buttons with class "lightbox-trigger"
document.querySelectorAll('.lightbox-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const img = button.getAttribute('data-img');
    const text = button.getAttribute('data-text');
    const target = button.getAttribute('data-target');
    openLightbox(img, text, target);
  });
});*/

/* =========================================================
  DYNAMIC COMPONENT LOADING (e.g., footer)
========================================================== */
function loadComponent(selector, url, fallbackHTML = "", callback) {
  const container = document.querySelector(selector);
  if (!container) return;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;
      if (typeof callback === "function") callback();
    })
    .catch((error) => {
      console.warn(`Component load failed: ${url}`, error);
      container.innerHTML = fallbackHTML;
      if (typeof callback === "function") callback();
    });
}

// Load footer dynamically
loadComponent(
  "#footer-placeholder",
  "footer.html",
  `
  <footer>
    <div class="footer-content">
      <span class="footer-text">© C2C Rides</span>
    </div>
  </footer>
`,
);

loadComponent(
  "#nav-placeholder",
  "nav.html",
  "", // optional fallback HTML
  initNavigationMenu, // callback to run AFTER nav loads
);
loadComponent(
  "#navindex-placeholder",
  "navindex.html",
  "", // optional fallback HTML
  initNavigationMenu, // callback to run AFTER nav loads
);

function showAppRefreshOption() {
  document.querySelectorAll(".app-refresh-menu-item").forEach((item) => {
    item.hidden = !waitingServiceWorker;
  });
}

function activateWaitingServiceWorker() {
  if (!waitingServiceWorker) return;
  refreshingForUpdate = true;
  waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
}

function monitorServiceWorkerUpdates() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshingForUpdate) window.location.reload();
  });

  navigator.serviceWorker
    .register("service-worker.js")
    .then((registration) => {
      const checkForWaitingWorker = () => {
        if (registration.waiting && navigator.serviceWorker.controller) {
          waitingServiceWorker = registration.waiting;
          showAppRefreshOption();
        }
      };

      checkForWaitingWorker();
      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;

        installingWorker.addEventListener("statechange", () => {
          if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
            waitingServiceWorker = installingWorker;
            showAppRefreshOption();
          }
        });
      });

      registration.update().catch((error) => console.warn("Could not check for app updates:", error));
    })
    .catch((error) => console.warn("Service worker registration failed:", error));
}

monitorServiceWorkerUpdates();

function initNavigationMenu() {
  document.querySelectorAll(".app-refresh-menu-item a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      activateWaitingServiceWorker();
    });
  });
  showAppRefreshOption();

  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");

  // If this nav doesn't include a mobile menu, skip mobile logic
  if (!toggle || !mobileMenu || !overlay) {
    console.log("Loaded nav without mobile menu — skipping mobile init");
    return;
  }

  // Mobile menu logic (only runs when elements exist)
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("active");
  });
}
