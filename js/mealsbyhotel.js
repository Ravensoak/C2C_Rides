/* =========================================================
   MEALS BY HOTEL PAGE SCRIPT
   - Mobile menu toggle
   - Load meal data for each hotel and render sortable table
=========================================================== */

/* =========================================================
    LOAD MEAL DATA
    Guest meal selections are loaded from data/mealsbyvenue.json
========================================================== */

let venueData = {};

/* =========================================================
    DOM ELEMENTS & TABLE CONFIGURATION
========================================================== */

const hotelSelector = document.getElementById("hotelSelector");
const tableContainer = document.getElementById("tableContainer");

const venueDataPromise = fetch("data/mealsbyvenue.json")
  .then((response) => {
    if (!response.ok) throw new Error("mealsbyvenue.json failed to load");
    return response.json();
  })
  .then((data) => {
    venueData = data;
  })
  .catch((err) => console.error("Failed to load venue data:", err));

// Column definitions for the dynamic table
const headers = [
  { label: "Name", key: "name", icon: "" },
  { label: "Starter", key: "starter", icon: "\u{1F963}" },
  { label: "Main", key: "main", icon: "\u{1F37D}\uFE0F" },
  { label: "Dessert", key: "dessert", icon: "\u{1F370}" },
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
  if (!venueData[hotelKey]) return;
  let guests = [...venueData[hotelKey]];

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
  venueDataPromise.then(() => renderHotelTable(hotelSelector.value));
});
