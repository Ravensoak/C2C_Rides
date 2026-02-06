
    const btn = document.getElementById('refreshButton');
    let hideTimer;

    // Only show when running as a standalone PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      btn.style.display = 'flex';
      setTimeout(() => btn.classList.add('visible'), 100);

      // Reload when tapped
      btn.addEventListener('click', () => window.location.reload());

      // Hide after 5 seconds of inactivity
      function resetHideTimer() {
        btn.classList.add('visible');
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => btn.classList.remove('visible'), 5000);
      }

      // Detect activity (tap, scroll, move)
      ['mousemove', 'scroll', 'touchstart'].forEach(evt =>
        document.addEventListener(evt, resetHideTimer)
      );

      resetHideTimer(); // start hiding timer
    }

    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');
        const allHeaders = document.querySelectorAll('.accordion-header');
        const allContents = document.querySelectorAll('.accordion-content');
        const allItems = document.querySelectorAll('.accordion-item');

        // Close all sections
        allHeaders.forEach(h => h.classList.remove('active'));
        allItems.forEach(item => item.classList.remove('active'));
        allContents.forEach(content => {
          content.classList.remove('open');
          content.style.maxHeight = null;
        });

        // Open clicked one
        if (!isActive) {
          header.classList.add('active');
          const item = header.parentElement;
          const content = header.nextElementSibling;
          item.classList.add('active');
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });


  


    // JavaScript for toggling mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
    }); 

     function loadComponent(selector, url, fallbackHTML = '') {
    const container = document.querySelector(selector);
    if (!container) return;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then(html => {
        container.innerHTML = html;
      })
      .catch(error => {
        console.warn(`Component load failed: ${url}`, error);
        container.innerHTML = fallbackHTML;
      });
  }
  /* New code for standard footer */
  loadComponent('#footer-placeholder', 'footer.html', `
    <footer>
      <div class="footer-content">
        <span class="footer-text">© C2C Rides</span>
      </div>
    </footer>
  `);
