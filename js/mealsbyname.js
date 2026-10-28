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

  // Mapping of hotel keys to the venue field IDs
  const venues = {
    venue1: { venue: "venue1", fields: ["venue1starter", "venue1main", "venue1dessert", "venue1cost"] },
    venue2: { venue: "venue2", fields: ["venue2starter", "venue2main", "venue2dessert", "venue2cost"] },
    venue3: { venue: "venue3", fields: ["venue3starter", "venue3main", "venue3dessert", "venue3cost"] },
    venue4: { venue: "venue4", fields: ["venue4starter", "venue4main", "venue4dessert", "venue4cost"] },
  };

  // Render meal rows for each hotel
  Object.values(venues).forEach(({ venue, fields }) => {
    const entry = entries.find((e) => e.Venue === venue);

    document.getElementById(fields[0]).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">🥗 Starter:</div><div class="food-item">${entry.Starter}</div></div>`
      : "";

    document.getElementById(fields[1]).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">🍽️ Main:</div><div class="food-item">${entry.Main}</div></div>`
      : "";

    document.getElementById(fields[2]).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">🍰 Dessert:</div><div class="food-item">${entry.Dessert}</div></div>`
      : "";

    document.getElementById(fields[3]).innerHTML = entry
      ? `<div class="menu-row"><div class="category-label">Total Cost:</div><div class="food-item">${entry.Cost}</div></div>`
      : "";
  });
}

// Trigger update when user selects a name
nameSelector.addEventListener("change", updateOutput);

nameSelector.addEventListener("change", () => {
  if (nameSelector.value) {
    hotelSelector.value = "";
    tableContainer.innerHTML = "";
  }
});
