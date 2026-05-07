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
  { Name: "David Olney", Starter: "Soup of the day, bread roll", Main: "Mini Fish & Chips, mushy peas, tartare sauce", Dessert: "Mini Eaton Mess", Hotel: "themanor1" },
  { Name: "David Olney", Starter: "Buffalo Wings – Crisp fried wings tossed in spicy relish, garnished with spring onions & red chillies", Main: "Tagliatelle in Langoustine Bisque – With prawns, squid & mussels, lemon, Urfa chilli & parmesan", Dessert: "No Dessert", Hotel: "lionhotel" },
  { Name: "David Olney", Starter: "No Starter", Main: "Caesar Chicken Burger - Crispy chicken, bacon, parmesan, lettuce, garlic & black pepper mayo, coleslaw, hand-cut chips", Dessert: "Cheesecake of the Day", Hotel: "nanhoronhotel" },
  { Name: "David Olney", Starter: "Soup of the Day – Served with Welsh butter and crusty bread (v)", Main: "Pulled Beef ‘Wellington’ – Truffle & parmesan mash, roasted carrot, parsnip purée, red wine jus", Dessert: "Selection of Welsh Cheeses – Biscuits, chutney, grapes", Hotel: "bullinn" },

  { Name: "Jane Olney", Starter: "No Starter", Main: "Pan Fried Minute Steak, fries, Café de Paris butter, tomato", Dessert: "Mini Eaton Mess", Hotel: "themanor1" },
  { Name: "Jane Olney", Starter: "Buffalo Wings – Crisp fried wings tossed in spicy relish, garnished with spring onions & red chillies", Main: "Tagliatelle in Langoustine Bisque – With prawns, squid & mussels, lemon, Urfa chilli & parmesan", Dessert: "No Dessert", Hotel: "lionhotel" },
  { Name: "Jane Olney", Starter: "No Starter", Main: "Beef or V Vegetable Lasagne - Dressed leaves, chips & garlic bread", Dessert: "Banoffee Belgian Waffle - Bananas, toffee sauce, honeycomb ice cream", Hotel: "nanhoronhotel" },
  { Name: "Jane Olney", Starter: "Haddock & Spring Onion Fishcake – Wilted spinach, tartare hollandaise", Main: "Maple-Smoked Aubergine & Red Lentil Lasagne – Garlic bread, balsamic dressed rocket (vg)", Dessert: "No Dessert", Hotel: "bullinn" },

  { Name: "Kevin Marriott", Starter: "No Starter", Main: "Welsh Cheese & Leek Risotto, toasted sourdough, basil dressing (vegan option available)", Dessert: "Lemon Meringue Roulade", Hotel: "themanor1" },
  { Name: "Kevin Marriott", Starter: "Soup of the Day – Freshly prepared daily, served with crusty bread (v)", Main: "Tagliatelle in Langoustine Bisque – With prawns, squid & mussels, lemon, Urfa chilli & parmesan", Dessert: "No Dessert", Hotel: "lionhotel" },
  { Name: "Kevin Marriott", Starter: "V/VG Soup of the Day - Crusty bread & butter", Main: "Beef or V Vegetable Lasagne - Dressed leaves, chips & garlic bread", Dessert: "Double Chocolate Brownie - Warm brownie, chocolate sauce, vanilla ice cream", Hotel: "nanhoronhotel" },
  { Name: "Kevin Marriott", Starter: "Chicken Liver Pâté – Redcurrant & thyme butter, red onion & balsamic chutney, warm mini loaf", Main: "Beer Battered Fish & Chips – Mushy peas, tartare sauce, thick-cut chips", Dessert: "No Dessert", Hotel: "bullinn" },
];

/* =========================================================
    POPULATE NAME SELECTOR
========================================================== */

const nameSelector = document.getElementById("nameSelector");

// Extract unique names from dataset
const uniqueNames = [...new Set(sheetData.map(entry => entry.Name))];

// Populate dropdown
uniqueNames.forEach(name => {
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
  const grid = document.querySelector('.grid');

  // Hide grid if nothing selected
  if (!selected) {
    grid.classList.add('hidden');
    return;
  }

  grid.classList.remove('hidden');

  // Filter all entries for the selected person
  const entries = sheetData.filter(e => e.Name === selected);

  // Mapping of hotel keys to DOM ID prefixes
  const hotels = {
    themanor1: "themanor1",
    lionhotel: "lionhotel",
    nanhoronhotel: "nanhoronhotel",
    bullinn: "bullinn",
    themanor2: "themanor2" // included for completeness
  };

  // Render meal rows for each hotel
  Object.entries(hotels).forEach(([hotelName, prefix]) => {
    const entry = entries.find(e => e.Hotel === hotelName);

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