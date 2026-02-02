/* =========================================================
  FLOATING REFRESH BUTTON (PWA standalone only)
========================================================== */
const refreshBtn = document.getElementById('refreshButton');
let hideTimer;

if (refreshBtn && window.matchMedia('(display-mode: standalone)').matches) {
  refreshBtn.style.display = 'flex';
  setTimeout(() => refreshBtn.classList.add('visible'), 100);

  refreshBtn.addEventListener('click', () => window.location.reload());

  function resetHideTimer() {
    refreshBtn.classList.add('visible');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => refreshBtn.classList.remove('visible'), 5000);
  }

  ['mousemove', 'scroll', 'touchstart'].forEach(evt =>
    document.addEventListener(evt, resetHideTimer)
  );

  resetHideTimer();
}



/* =========================================================
  LIGHTBOX FUNCTIONALITY
========================================================== */
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
});

/* =========================================================
  DYNAMIC COMPONENT LOADING (e.g., footer)
========================================================== */
function loadComponent(selector, url, fallbackHTML = '') {
  const container = document.querySelector(selector);
  if (!container) return;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then(html => container.innerHTML = html)
    .catch(error => {
      console.warn(`Component load failed: ${url}`, error);
      container.innerHTML = fallbackHTML;
    });
}

// Load footer dynamically
loadComponent('#footer-placeholder', 'footer.html', `
  <footer>
    <div class="footer-content">
      <span class="footer-text">© C2C Rides</span>
    </div>
  </footer>
`);
