/* =========================================================
   MEALS BY NAME PAGE SCRIPT
   - Mobile menu toggle
   - Load meal data for each name and render meal grid
   - Component loader for header/footer
=========================================================== */

/* =========================================================
    STATIC MEAL DATA
    Each entry represents a person's meal choices per hotel
========================================================== */

const sheetData = [
  {
    Name: "David Olney",
    Starter: "Creamy Garlic Mushrooms, thyme toasted sourdough, herb oil",
    Main: "Mini Fish & Chips, mushy peas, tartare sauce",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "David Olney",
    Starter: "No starter",
    Main: "Lion’s Hot Chicken Burger with gherkins, balsamic onions, Tomato, Lettuce and Chef’ special sauce",
    Dessert: "Sticky Toffee Pudding with Custard",
    Hotel: "lionhotel",
  },
  {
    Name: "David Olney",
    Starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
    Main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95 + No side dish",
    Dessert:
      "Banoffee Belgian Waffle - Belgian Wafle topped with bananas, signature toffee sauce & honeycomb ice cream - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "David Olney",
    Starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
    Main: "Cheese, Onion & Potato Pie (V) - With chips and vegetables - £17.95 + No side dish or steak sauce",
    Dessert: "Cheese Board - With biscuits, fruit and chutney - £12.95",
    Hotel: "bullinn",
  },

  {
    Name: "Jane Olney",
    Starter: "Confit of Salmon, whipped horseradish, beetroot slaw, lemon rye bread",
    Main: "Mini Fish & Chips, mushy peas, tartare sauce",
    Dessert: "Chocolate Brownie",
    Hotel: "themanor1",
  },
  {
    Name: "Jane Olney",
    Starter: "Chef’s Soup of the Day",
    Main: "Butter chicken in a rich & silky makhani sauce served with saffron flavored basmati rice & poppadum",
    Dessert: "No dessert",
    Hotel: "lionhotel",
  },
  {
    Name: "Jane Olney",
    Starter: "Katsu Chicken Strips - Mango mayo - £8.50",
    Main: "Classic Dishes: Hunters Chicken Burger - Crispy chicken, bacon, cheese & BBQ sauce with coleslaw, hand cut chips - £14.95 + No side dish",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Jane Olney",
    Starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
    Main: "Scampi & Chips - With mushy peas and tartare sauce - £17.95 + No side dish or steak sauce",
    Dessert: "No dessert",
    Hotel: "bullinn",
  },
];

/* =========================================================
    POPULATE NAME SELECTOR
========================================================== */

const nameSelector = document.getElementById("nameSelector");

// Extract unique names from dataset
const uniqueNames = [...new Set(sheetData.map((entry) => entry.Name))];

// Populate dropdown
uniqueNames.forEach((name) => {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  nameSelector.appendChild(opt);
});

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
  });
}

// Trigger update when user selects a name
nameSelector.addEventListener("change", updateOutput);
