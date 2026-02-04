/* =========================================================
  MEALS PAGE SCRIPT
  - Mobile menu toggle
========================================================== */
document.addEventListener('DOMContentLoaded', () => {
/* =========================================================
    LOAD AND PROCESS MEAL DATA FOR EACH HOTEL
========================================================== */
const hotelData = {
    hotelA: [
    { name: "David Olney", starter: "Soup of the day, bread roll", main: "Mini Fish & Chips, mushy peas, tartare sauce", dessert: "Mini Eaton Mess" },
    { name: "Jane Olney", starter: "No Starter", main: "Pan Fried Minute Steak, fries, Café de Paris butter, tomato", dessert: "Mini Eaton Mess" },
    { name: "Kevin Marriott", starter: "No Starter", main: "Welsh Cheese & Leek Risotto, toasted sourdough, basil dressing (vegan option available)", dessert: "Lemon Meringue Roulade" }
    ],
    hotelB: [
    { name: "David Olney", starter: "Buffalo Wings – Crisp fried wings tossed in spicy relish, garnished with spring onions & red chillies", main: "Tagliatelle in Langoustine Bisque – With prawns, squid & mussels, lemon, Urfa chilli & parmesan", dessert: "No Dessert" },
    { name: "Jane Olney", starter: "Buffalo Wings – Crisp fried wings tossed in spicy relish, garnished with spring onions & red chillies", main: "Tagliatelle in Langoustine Bisque – With prawns, squid & mussels, lemon, Urfa chilli & parmesan", dessert: "No Dessert" },
    { name: "Kevin Marriott", starter: "Soup of the Day – Freshly prepared daily, served with crusty bread (v)", main: "Tagliatelle in Langoustine Bisque – With prawns, squid & mussels, lemon, Urfa chilli & parmesan", dessert: "No Dessert" }
    ],
    hotelC: [
    { name: "David Olney", starter: "No Starter", main: "Caesar Chicken Burger - Crispy chicken, bacon, parmesan, lettuce, garlic & black pepper mayo, coleslaw, hand-cut chips", dessert: "Cheesecake of the Day" },
    { name: "Jane Olney", starter: "No Starter", main: "Beef or V Vegetable Lasagne - Dressed leaves, chips & garlic bread", dessert: "Banoffee Belgian Waffle - Bananas, toffee sauce, honeycomb ice cream" },
    { name: "Kevin Marriott", starter: "V/VG Soup of the Day - Crusty bread & butter", main: "Beef or V Vegetable Lasagne - Dressed leaves, chips & garlic bread", dessert: "Double Chocolate Brownie - Warm brownie, chocolate sauce, vanilla ice cream" }
    ],
    hotelD: [
    { name: "David Olney", starter: "Soup of the Day – Served with Welsh butter and crusty bread (v)", main: "Pulled Beef ‘Wellington’ – Truffle & parmesan mash, roasted carrot, parsnip purée, red wine jus", dessert: "Selection of Welsh Cheeses – Biscuits, chutney, grapes" },
    { name: "Jane Olney", starter: "Haddock & Spring Onion Fishcake – Wilted spinach, tartare hollandaise", main: "Maple-Smoked Aubergine & Red Lentil Lasagne – Garlic bread, balsamic dressed rocket (vg)", dessert: "No Dessert" },
    { name: "Kevin Marriott", starter: "Chicken Liver Pâté – Redcurrant & thyme butter, red onion & balsamic chutney, warm mini loaf", main: "Beer Battered Fish & Chips – Mushy peas, tartare sauce, thick-cut chips", dessert: "No Dessert" }
    ]
};

const hotelSelector = document.getElementById('hotelSelector');
const tableContainer = document.getElementById('tableContainer');

const headers = [
    { label: 'Name', key: 'name', icon: '' },
    { label: 'Starter', key: 'starter', icon: '🥗' },
    { label: 'Main', key: 'main', icon: '🍽️' },
    { label: 'Dessert', key: 'dessert', icon: '🍰' }
];

    let currentHotel = '';
    let currentSort = { key: null, direction: 'asc' };

    function createTableHeaders(data) {
    const headerRow = document.createElement('tr');

    headers.forEach(({ label, key, icon }) => {
      const th = document.createElement('th');
      th.style.cursor = 'pointer';
      th.setAttribute('role', 'columnheader');
      th.setAttribute('aria-sort', currentSort.key === key ? currentSort.direction : 'none');

      const isSorted = currentSort.key === key;
      const arrowClass = isSorted ? `sort-arrow ${currentSort.direction}` : 'sort-arrow asc';

      const arrowSVG = `
        <svg class="${arrowClass}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
          <path d="M7 10l5-5 5 5H7z"/>
        </svg>
      `;

    th.innerHTML = `
      ${icon ? `<span style="margin-right: 0.4rem;">${icon}</span>` : ''}
      ${label}
      ${arrowSVG}
    `;

    if (isSorted) {
      th.classList.add('sorted');
    }

    th.addEventListener('click', () => {
      const direction = isSorted && currentSort.direction === 'asc' ? 'desc' : 'asc';
      currentSort = { key, direction };
      renderHotelTable(currentHotel);
    });

    headerRow.appendChild(th);
   });

    return headerRow;
    }

    function createGuestRow(guest) {
      const row = document.createElement('tr');
      headers.forEach(({ key }) => {
        const td = document.createElement('td');
        td.textContent = guest[key];
        row.appendChild(td);
      });
      return row;
    }

    function renderHotelTable(hotelKey) {
      currentHotel = hotelKey;
      let guests = [...hotelData[hotelKey]];

      if (currentSort.key) {
        guests.sort((a, b) => {
          const valA = a[currentSort.key].toLowerCase();
          const valB = b[currentSort.key].toLowerCase();
          if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
          if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
          return 0;
        });
      }

    const table = document.createElement('table');
    table.appendChild(createTableHeaders(guests));

    guests.forEach(guest => {
      table.appendChild(createGuestRow(guest));
    });

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
  }

    hotelSelector.addEventListener('change', () => {
      currentSort = { key: null, direction: 'asc' };
      renderHotelTable(hotelSelector.value);
    });

    const toggleBtn = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');


    function toggleMenu() {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    }

    // Open/close on hamburger click
    toggleBtn.addEventListener('click', toggleMenu);

    // Close when overlay is clicked
    overlay.addEventListener('click', toggleMenu);

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
