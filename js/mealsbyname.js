/* =========================================================
   MEALS BY NAME PAGE SCRIPT
   - Mobile menu toggle
   - Load meal data for each name and render meal grid
   - Component loader for header/footer
=========================================================== */

let sheetData = [];
const nameSelector = document.getElementById("nameSelector");

fetch("data/mealsbyname.json")
  .then((response) => {
    if (!response.ok) throw new Error("mealsbyname.json failed to load");
    return response.json();
  })
  .then((data) => {
    sheetData = data;
    const uniqueNames = [...new Set(sheetData.map((entry) => entry.Name))];

    uniqueNames.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      nameSelector.appendChild(opt);
    });
  })
  .catch((err) => console.error("Failed to load meal data:", err));
/* =========================================================
    UPDATE MEAL GRID WHEN NAME IS SELECTED
========================================================== */

/**
 * Updates the meal grid based on the selected name.
 */
function updateOutput() {
  const selected = nameSelector.value;
  const grid = document.querySelector(".grid");

  // Hide grid if nothing selected
  if (!selected) {
    grid.classList.add("hidden");
    return;
  }

  grid.classList.remove("hidden");

  // Filter all entries for the selected person
  const entries = sheetData.filter((e) => e.Name === selected);

  // Mapping of hotel keys to DOM ID prefixes
  const hotels = {
    themanor1: "themanor1",
    lionhotel: "lionhotel",
    nanhoronhotel: "nanhoronhotel",
    bullinn: "bullinn",
    themanor2: "themanor2", // included for completeness
  };

  // Render meal rows for each hotel
  Object.entries(hotels).forEach(([hotelName, prefix]) => {
    const entry = entries.find((e) => e.Hotel === hotelName);

    document.getElementById(`${prefix}F`).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">🥗 Starter:</div><div class="food-item">${entry.Starter}</div></div>`
      : "";

    document.getElementById(`${prefix}G`).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">🍽️ Main:</div><div class="food-item">${entry.Main}</div></div>`
      : "";

    document.getElementById(`${prefix}H`).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">🍰 Dessert:</div><div class="food-item">${entry.Dessert}</div></div>`
      : "";

    document.getElementById(`${prefix}I`).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">Total Cost:</div><div class="food-item">${entry.Cost}</div></div>`
      : "";
  });
}

// Trigger update when user selects a name
nameSelector.addEventListener("change", updateOutput);
