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
    Main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95",
    Dessert:
      "Banoffee Belgian Waffle - Belgian Waffle topped with bananas, signature toffee sauce & honeycomb ice cream - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "David Olney",
    Starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
    Main: "Steak & Ale Pie - With chips and vegetables - £18.95",
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
    Main: "Classic Dishes: Beef Lasagne - Dressed leaves, chips & garlic bread - £14.95",
    Dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Laurie Peach",
    Starter: "No starter",
    Main: "Chicken Supreme with Chasseur Sauce - With mashed potato and vegetables - £18.95",
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
    Main: "Special Dishes: Pan Fried Salmon - With tomatoes, garlic, chilli & coriander - £19.95",
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
    Main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Janice Clowes ",
    Starter: "Chicken Caesar Croquettes - With salad and Parmesan - £7.95",
    Main: "Lamb Hot Pot Pie & Mint Gravy - With mashed potato and vegetables - £18.95",
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
    Main: "Classic Dishes: Nanhoron Tikka Curry - Chicken, Served with rice, naan, mango chutney - £15.95",
    Dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Roy clarke",
    Starter: "No starter",
    Main: "Lamb Hot Pot Pie & Mint Gravy - With chips and vegetables - £18.95",
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
    Main: "Classic Dishes: Steak & Local Ale Pie - With puff pastry top & served with peas and chips - £15.95",
    Dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Theresa Jennings",
    Starter: "No starter",
    Main: "Cod & Lemon Fishcakes - With pea and bacon salad - £18.95",
    Dessert: "Rhubarb & Stem Ginger Crumble (V) - With vanilla ice cream - £7.95",
    Hotel: "bullinn",
  },
  {
    Name: "Ryan Lovatt",
    Starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
    Main: "Homemade beef lasagne, Garlic bread - £18",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Ryan Lovatt",
    Starter: "Chef’s Soup of the Day",
    Main: "Butter chicken in a rich & silky makhani sauce served with saffron flavored basmati rice & poppadum",
    Dessert: "Cheesecake with Mix Berries Compote",
    Hotel: "lionhotel",
  },
  {
    Name: "Ryan Lovatt",
    Starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
    Main: "Classic Dishes: House Burger - Double beef, cheese, pickles, lettuce, burger sauce, coleslaw, hand-cut chips - £14.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Ryan Lovatt",
    Starter: "Pheasant & Mushroom Pate - With toasted sourdough - £8.95",
    Main: "Steak & Ale Pie - With mashed potato and vegetables - £18.95 + Onion Rings - £4.50",
    Dessert: "No dessert",
    Hotel: "bullinn",
  },
  {
    Name: "Anthony Heaney",
    Starter: "No starter",
    Main: "Steak Rump served with tomato, mushroom, chips, garlic butter sauce - £24",
    Dessert: "Sticky Toffee Pudding with Custard - £9",
    Hotel: "themanor1",
  },
  {
    Name: "Anthony Heaney",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Cheesecake with Mix Berries Compote",
    Hotel: "lionhotel",
  },
  {
    Name: "Anthony Heaney",
    Starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
    Main: "Special Dishes: Chicken Supreme - stuffed with bacon & cheese, wrapped in parma ham served on a bed of creamed leeks - £18.95",
    Dessert: "Eton Mess - Crushed meringue, mixed fruit & fresh cream - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Anthony Heaney",
    Starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
    Main: "Chicken Supreme with Chasseur Sauce - With mashed potato and vegetables - £18.95 + Jacket Potato - £4.50",
    Dessert: "Rhubarb & Stem Ginger Crumble (V) - With custard - £7.95",
    Hotel: "bullinn",
  },
  {
    Name: "Jenny Heaney",
    Starter: "No starter",
    Main: "Steak & Ale Pie with chips, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Jenny Heaney",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Cheesecake with Mix Berries Compote",
    Hotel: "lionhotel",
  },
  {
    Name: "Jenny Heaney",
    Starter: "No starter",
    Main: "Classic Dishes: Beef Lasagne - Dressed leaves, chips & garlic bread - £14.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Jenny Heaney",
    Starter: "No starter",
    Main: "Scampi & Chips - With mushy peas and tartare sauce - £17.95",
    Dessert: "Tiramisu - Coffee, sponge and cream dessert - £6.95",
    Hotel: "bullinn",
  },
  {
    Name: "Ian Ferrer ",
    Starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
    Main: "Steak Rump served with tomato, mushroom, chips, peppercorn sauce - £24",
    Dessert: "Sweet Potato cake, caramel sauce - £8.50",
    Hotel: "themanor1",
  },
  {
    Name: "Ian Ferrer ",
    Starter: "Lightly fried whitebait served with burnt lemon & tartar dip",
    Main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
    Dessert: "No dessert",
    Hotel: "lionhotel",
  },
  {
    Name: "Ian Ferrer ",
    Starter: "Shredded Duck Bon Bons - Hoisin mayo & sticky dressing - £8.95",
    Main: "Classic Dishes: Nanhoron Tikka Curry - Chicken, Served with rice, naan, mango chutney - £15.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Ian Ferrer ",
    Starter: "Spicy Meatballs – With a roast tomato sauce, Parmesan and rocket - £8.95",
    Main: "The Bull’s Buffalo Chicken Burger - With smoked cheese, ranch slaw and fries - £17.95 + House Slaw - £3.50",
    Dessert: "Penderyn Whisky & Chocolate Basque Cheesecake - With Chantilly cream - £7.95",
    Hotel: "bullinn",
  },
  {
    Name: "Claire Ferrer",
    Starter: "No starter",
    Main: "Homemade beef lasagne, Garlic bread - £18",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Claire Ferrer",
    Starter: "Lightly fried whitebait served with burnt lemon & tartar dip",
    Main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
    Dessert: "No dessert",
    Hotel: "lionhotel",
  },
  {
    Name: "Claire Ferrer",
    Starter: "Thai Bass Fishcakes - With sweet chilli & coriander salad - £8.95",
    Main: "Special Dishes: Crispy 1/2 Roast Duck - With orange sauce - £21.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Claire Ferrer",
    Starter: "No starter",
    Main: "Oven-Roasted Pheasant & Black Pudding Bon Bon - With potato fondant, vegetables and whisky sauce - £18.95 + Side Salad - £3.50",
    Dessert: "No dessert",
    Hotel: "bullinn",
  },
  {
    Name: "Martyn  Leighton",
    Starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
    Main: "Steak & Ale Pie with chips, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Martyn  Leighton",
    Starter: "No starter",
    Main: "Butter chicken in a rich & silky makhani sauce served with saffron flavored basmati rice & poppadum",
    Dessert: "Sticky Toffee Pudding with Custard",
    Hotel: "lionhotel",
  },
  {
    Name: "Martyn  Leighton",
    Starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
    Main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Martyn  Leighton",
    Starter: "Cod & Lemon Fishcake - With parsley sauce - £8.95",
    Main: "Lamb Hot Pot Pie & Mint Gravy - With chips and vegetables - £18.95",
    Dessert: "Tiramisu - Coffee, sponge and cream dessert - £6.95",
    Hotel: "bullinn",
  },
  {
    Name: "Jane Olney",
    Starter: "No starter",
    Main: "Chicken Pie with mash, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Jane Olney",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Sticky Toffee Pudding with Custard",
    Hotel: "lionhotel",
  },
  {
    Name: "Jane Olney",
    Starter: "No starter",
    Main: "Classic Dishes: Hunters Chicken Burger - Crispy chicken, bacon, cheese & BBQ sauce with coleslaw, hand cut chips - £14.95",
    Dessert: "Eton Mess - Crushed meringue, mixed fruit & fresh cream - £7.95",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Jane Olney",
    Starter: "No starter",
    Main: "Cumberland Sausage & Mash - With vegetables and gravy - £17.95",
    Dessert: "Cheese Board - With biscuits, fruit and chutney - £12.95",
    Hotel: "bullinn",
  },
  {
    Name: "Kevin Marriott ",
    Starter: "No starter",
    Main: "Beer battered cod, chips, peas - £18.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Kevin Marriott ",
    Starter: "No starter",
    Main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
    Dessert: "Sticky Toffee Pudding with Custard",
    Hotel: "lionhotel",
  },
  {
    Name: "Kevin Marriott ",
    Starter: "No starter",
    Main: "Special Dishes: Pan Roasted Wild Local Seabass  - white wine & mussels sauce - £21.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Kevin Marriott ",
    Starter: "No starter",
    Main: "Chicken Supreme with Chasseur Sauce - With mashed potato and vegetables - £18.95",
    Dessert: "Rhubarb & Stem Ginger Crumble (V) - With vanilla ice cream - £7.95",
    Hotel: "bullinn",
  },
  {
    Name: "Heather Marriott ",
    Starter: "No starter",
    Main: "Steak & Ale Pie with chips, sticky red cabbage, gravy - £17.50",
    Dessert: "No dessert",
    Hotel: "themanor1",
  },
  {
    Name: "Heather Marriott ",
    Starter: "No starter",
    Main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
    Dessert: "Cheesecake with Mix Berries Compote",
    Hotel: "lionhotel",
  },
  {
    Name: "Heather Marriott ",
    Starter: "No starter",
    Main: "Special Dishes: Pan Roasted Wild Local Seabass  - white wine & mussels sauce - £21.95",
    Dessert: "No dessert",
    Hotel: "nanhoronhotel",
  },
  {
    Name: "Heather Marriott ",
    Starter: "Beetroot Hummus (VG) - With warm flatbread - £7.95",
    Main: "Scampi & Chips - With mushy peas and tartare sauce - £17.95",
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
