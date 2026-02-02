/* =========================================================
  PWA REFRESH BUTTON
========================================================== */
const btn = document.getElementById('refreshButton');
let hideTimer;

if (window.matchMedia('(display-mode: standalone)').matches) {
  btn.style.display = 'flex';
  setTimeout(() => btn.classList.add('visible'), 100);

  btn.addEventListener('click', () => window.location.reload());

  function resetHideTimer() {
    btn.classList.add('visible');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => btn.classList.remove('visible'), 5000);
  }

  ['mousemove', 'scroll', 'touchstart'].forEach(evt =>
    document.addEventListener(evt, resetHideTimer)
  );

  resetHideTimer();
}

/* =========================================================
  MOBILE MENU TOGGLE
========================================================== */
const toggleBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

/* =========================================================
  LIGHTBOX FUNCTIONALITY
========================================================== */
let redirectTarget = null;

function openLightbox(imgSrc, text, targetUrl) {
  const overlay = document.getElementById('lightbox');
  const content = overlay.querySelector('.lightbox-content');

  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-text').innerHTML = text;
  redirectTarget = targetUrl;

  overlay.classList.add('show');
  content.classList.remove('animate');
  void content.offsetWidth; // trigger reflow
  content.classList.add('animate');
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox');
  overlay.classList.remove('show');

  if (redirectTarget) {
    window.open(redirectTarget, '_blank');
    redirectTarget = null;
  }
}

document.querySelectorAll('.lightbox-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const img = button.getAttribute('data-img');
    const text = button.getAttribute('data-text');
    const target = button.getAttribute('data-target');
    openLightbox(img, text, target);
  });
});

/* =========================================================
  DYNAMIC FOOTER LOADING
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

loadComponent('#footer-placeholder', 'footer.html', `
  <footer>
    <div class="footer-content">
      <span class="footer-text">© C2C Rides</span>
    </div>
  </footer>
`);
