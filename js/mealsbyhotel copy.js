/* =========================================================
   MEALS BY HOTEL PAGE SCRIPT
   - Mobile menu toggle
   - Load meal data for each hotel and render sortable table
=========================================================== */

/* =========================================================
    MEAL DATA (STATIC)
    Each hotel contains an array of guest meal selections
========================================================== */

const hotelData = {
  hotelA: [
    {
      name: "David Olney",
      starter: "Creamy Garlic Mushrooms, thyme toasted sourdough, herb oil",
      main: "Mini Fish & Chips, mushy peas, tartare sauce",
      dessert: "No dessert",
    },
    {
      name: "Jane Olney",
      starter: "Confit of Salmon, whipped horseradish, beetroot slaw, lemon rye bread",
      main: "Mini Fish & Chips, mushy peas, tartare sauce",
      dessert: "Chocolate Brownie",
    },
  ],
  hotelB: [
    {
      name: "David Olney",
      starter: "No starter",
      main: "Lion’s Hot Chicken Burger with gherkins, balsamic onions, Tomato, Lettuce and Chef’ special sauce",
      dessert: "Sticky Toffee Pudding with Custard",
    },
    {
      name: "Jane Olney",
      starter: "Chef’s Soup of the Day",
      main: "Butter chicken in a rich & silky makhani sauce served with saffron flavored basmati rice & poppadum",
      dessert: "No dessert",
    },
  ],
  hotelC: [
    {
      name: "David Olney",
      starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
      main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95 + No side dish",
      dessert:
        "Banoffee Belgian Waffle - Belgian Wafle topped with bananas, signature toffee sauce & honeycomb ice cream - £7.95",
    },
    {
      name: "Jane Olney",
      starter: "Katsu Chicken Strips - Mango mayo - £8.50",
      main: "Classic Dishes: Hunters Chicken Burger - Crispy chicken, bacon, cheese & BBQ sauce with coleslaw, hand cut chips - £14.95 + No side dish",
      dessert: "No dessert",
    },
  ],
  hotelD: [
    {
      name: "David Olney",
      starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
      main: "Cheese, Onion & Potato Pie (V) - With chips and vegetables - £17.95 + No side dish or steak sauce",
      dessert: "Cheese Board - With biscuits, fruit and chutney - £12.95",
    },
    {
      name: "Jane Olney",
      starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
      main: "Scampi & Chips - With mushy peas and tartare sauce - £17.95 + No side dish or steak sauce",
      dessert: "No dessert",
    },
  ],
};

/* =========================================================
    DOM ELEMENTS & TABLE CONFIGURATION
========================================================== */

const hotelSelector = document.getElementById("hotelSelector");
const tableContainer = document.getElementById("tableContainer");

// Column definitions for the dynamic table
const headers = [
  { label: "Name", key: "name", icon: "" },
  { label: "Starter", key: "starter", icon: "🥗" },
  { label: "Main", key: "main", icon: "🍽️" },
  { label: "Dessert", key: "dessert", icon: "🍰" },
];

let currentHotel = "";
let currentSort = { key: null, direction: "asc" };

/* =========================================================
    TABLE HEADER GENERATION (WITH SORTING)
========================================================== */

function createTableHeaders() {
  const headerRow = document.createElement("tr");

  headers.forEach(({ label, key, icon }) => {
    const th = document.createElement("th");
    th.style.cursor = "pointer";
    th.setAttribute("role", "columnheader");
    th.setAttribute("aria-sort", currentSort.key === key ? currentSort.direction : "none");

    const isSorted = currentSort.key === key;
    const arrowClass = isSorted ? `sort-arrow ${currentSort.direction}` : "sort-arrow asc";

    const arrowSVG = `
      <svg class="${arrowClass}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
        <path d="M7 10l5-5 5 5H7z"/>
      </svg>
    `;

    th.innerHTML = `
      ${icon ? `<span style="margin-right: 0.4rem;">${icon}</span>` : ""}
      ${label}
      ${arrowSVG}
    `;

    if (isSorted) th.classList.add("sorted");

    // Sorting behaviour
    th.addEventListener("click", () => {
      const direction = isSorted && currentSort.direction === "asc" ? "desc" : "asc";
      currentSort = { key, direction };
      renderHotelTable(currentHotel);
    });

    headerRow.appendChild(th);
  });

  return headerRow;
}

/* =========================================================
    TABLE ROW GENERATION
========================================================== */

function createGuestRow(guest) {
  const row = document.createElement("tr");

  headers.forEach(({ key }) => {
    const td = document.createElement("td");
    td.textContent = guest[key];
    row.appendChild(td);
  });

  return row;
}

/* =========================================================
    RENDER TABLE FOR SELECTED HOTEL
    Includes sorting logic
========================================================== */

function renderHotelTable(hotelKey) {
  currentHotel = hotelKey;
  let guests = [...hotelData[hotelKey]];

  // Apply sorting if active
  if (currentSort.key) {
    guests.sort((a, b) => {
      const valA = a[currentSort.key].toLowerCase();
      const valB = b[currentSort.key].toLowerCase();
      if (valA < valB) return currentSort.direction === "asc" ? -1 : 1;
      if (valA > valB) return currentSort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Build table
  const table = document.createElement("table");
  table.appendChild(createTableHeaders());

  guests.forEach((guest) => table.appendChild(createGuestRow(guest)));

  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}

/* =========================================================
    HOTEL SELECTOR EVENT
    Resets sorting when switching hotels
========================================================== */

hotelSelector.addEventListener("change", () => {
  currentSort = { key: null, direction: "asc" };
  renderHotelTable(hotelSelector.value);
});
