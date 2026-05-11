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
    Starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
    Main: "Cheese & Potato Pie with chips, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "David Olney",
    Starter: "Crispy onion & corn bites served with mango mole",
    Main: "Lion’s Hot Chicken Burger with gherkins, balsamic onions, Tomato, Lettuce and Chef’ special sauce",
    Dessert: "No dessert",
    Hotel: "lionhotel",
  },
  {
    Name: "David Olney",
    Starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
    Main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95 + ",
    Dessert:
      "Banoffee Belgian Waffle - Belgian Waffle topped with bananas, signature toffee sauce & honeycomb ice cream - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "David Olney",
    Starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
    Main: "Steak & Ale Pie - With chips and vegetables - £18.95 + ",
    Dessert: "No dessert",
    Hotel: "bullinn",
  },
  {
    Name: "Laurie Peach",
    Starter: "No starter",
    Main: "Steak & Ale Pie with mash, sticky red cabbage, gravy - £17.50",
    Dessert: "Chocolate Brownie, with Ice Cream - £8.50",
    Hotel: "themanor1",
  },
  {
    Name: "Laurie Peach",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Sticky Toffee Pudding with Custard",
    Hotel: "lionhotel",
  },
  {
    Name: "Laurie Peach",
    Starter: "No starter",
    Main: "Classic Dishes: Beef Lasagne - Dressed leaves, chips & garlic bread - £14.95 + ",
    Dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Laurie Peach",
    Starter: "No starter",
    Main: "Chicken Supreme with Chasseur Sauce - With mashed potato and vegetables - £18.95 + ",
    Dessert: "Tiramisu - Coffee, sponge and cream dessert - £6.95",
    Hotel: "bullinn",
  },
  {
    Name: "Christine Bell",
    Starter: "No starter",
    Main: "Sweet potato roulade with a tomato & herb sauce, and seasonal veg - £16.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Christine Bell",
    Starter: "Chef’s Soup of the Day",
    Main: "Tadka Dal (Red Lentil Curry) A flavorful and hearty dish, made with red lentils, simmered in mild spices, tempered with onions, garlic and cumin. Served with saffron flavored basmati rice & Poppadum",
    Dessert: "No dessert",
    Hotel: "lionhotel",
  },
  {
    Name: "Christine Bell",
    Starter: "No starter",
    Main: "Special Dishes: Pan Fried Salmon - With tomatoes, garlic, chilli & coriander - £19.95 + Seasonal Side Salad (VG) - £3.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Christine Bell",
    Starter: "Soup of the Day (V) – With bread and butter - £6.95",
    Main: "Thai Green Vegetable Curry (V) - With steamed rice and flatbread - £15.95 + New Potatoes - £4.50, Tenderstem Brocoli & honeyed carrots - £3.50",
    Dessert: "No dessert",
    Hotel: "bullinn",
  },
  {
    Name: "Beverly Smithers",
    Starter: "Classic Prawn Cocktail, Marie Rose Sauce, Rye Bread £11",
    Main: "Chicken Pie with mash, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Beverly Smithers",
    Starter: "Lightly fried whitebait served with burnt lemon & tartar dip",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "No dessert",
    Hotel: "lionhotel",
  },
  {
    Name: "Beverly Smithers",
    Starter: "Thai Bass Fishcakes - With sweet chilli & coriander salad - £8.95",
    Main: "Special Dishes: Pan Fried Salmon - With tomatoes, garlic, chilli & coriander - £19.95 + ",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Beverly Smithers",
    Starter: "Pheasant & Mushroom Pate - With toasted sourdough - £8.95",
    Main: "Cod & Lemon Fishcakes - With pea and bacon salad - £18.95 + Tenderstem Brocoli & honeyed carrots - £3.50",
    Dessert: "Coconut & Vanilla Panna Cotta - With pineapple salsa - £7.95",
    Hotel: "bullinn",
  },
  {
    Name: "Janice Clowes ",
    Starter: "Hummus, flatbread, and olives £7.50",
    Main: "Steak & Ale Pie with mash, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Janice Clowes ",
    Starter: "No starter",
    Main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
    Dessert: "Sticky Toffee Pudding with Custard",
    Hotel: "lionhotel",
  },
  {
    Name: "Janice Clowes ",
    Starter: "Thai Bass Fishcakes - With sweet chilli & coriander salad - £8.95",
    Main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95 + ",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Janice Clowes ",
    Starter: "Chicken Caesar Croquettes - With salad and Parmesan - £7.95",
    Main: "Lamb Hot Pot Pie & Mint Gravy - With mashed potato and vegetables - £18.95 + ",
    Dessert: "Rhubarb & Stem Ginger Crumble (V) - With custard - £7.95",
    Hotel: "bullinn",
  },
  { Name: "Roy clarke", Starter: "No starter", Main: "No main", Dessert: "No dessert", Hotel: "themanor1" },
  {
    Name: "Roy clarke",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Cheesecake with Mix Berries Compote",
    Hotel: "lionhotel",
  },
  {
    Name: "Roy clarke",
    Starter: "No starter",
    Main: "Classic Dishes: Nanhoron Tikka Curry - Chicken, Served with rice, naan, mango chutney - £15.95 + ",
    Dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Roy clarke",
    Starter: "No starter",
    Main: "Lamb Hot Pot Pie & Mint Gravy - With chips and vegetables - £18.95 + ",
    Dessert: "Rhubarb & Stem Ginger Crumble (V) - With vanilla ice cream - £7.95",
    Hotel: "bullinn",
  },
  { Name: "Theresa Jennings", Starter: "No starter", Main: "No main", Dessert: "No dessert", Hotel: "themanor1" },
  {
    Name: "Theresa Jennings",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Cheesecake with Mix Berries Compote",
    Hotel: "lionhotel",
  },
  {
    Name: "Theresa Jennings",
    Starter: "No starter",
    Main: "Classic Dishes: Steak & Local Ale Pie - With puff pastry top & served with peas and chips - £15.95 + ",
    Dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Theresa Jennings",
    Starter: "No starter",
    Main: "Cod & Lemon Fishcakes - With pea and bacon salad - £18.95 + ",
    Dessert: "Rhubarb & Stem Ginger Crumble (V) - With vanilla ice cream - £7.95",
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
