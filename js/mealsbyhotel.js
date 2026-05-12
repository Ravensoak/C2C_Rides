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
      starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
      main: "Cheese & Potato Pie with chips, sticky red cabbage, gravy - £17.50",
      dessert: "No dessert",
    },
    {
      name: "Laurie Peach",
      starter: "No starter",
      main: "Steak & Ale Pie with mash, sticky red cabbage, gravy - £17.50",
      dessert: "Chocolate Brownie, with Ice Cream - £8.50",
    },
    {
      name: "Christine Bell",
      starter: "No starter",
      main: "Sweet potato roulade with a tomato & herb sauce, and seasonal veg - £16.50",
      dessert: "No dessert",
    },
    {
      name: "Beverly Smithers",
      starter: "Classic Prawn Cocktail, Marie Rose Sauce, Rye Bread £11",
      main: "Chicken Pie with mash, sticky red cabbage, gravy - £17.50",
      dessert: "No dessert",
    },
    {
      name: "Janice Clowes ",
      starter: "Hummus, flatbread, and olives £7.50",
      main: "Steak & Ale Pie with mash, sticky red cabbage, gravy - £17.50",
      dessert: "No dessert",
    },
    { name: "Roy clarke", starter: "No starter", main: "No main", dessert: "No dessert" },
    { name: "Theresa Jennings", starter: "No starter", main: "No main", dessert: "No dessert" },
    {
      name: "Ryan Lovatt",
      starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
      main: "Homemade beef lasagne, Garlic bread - £18",
      dessert: "No dessert",
    },
    {
      name: "Anthony Heaney",
      starter: "No starter",
      main: "Steak Rump served with tomato, mushroom, chips, garlic butter sauce - £24",
      dessert: "Sticky Toffee Pudding with Custard - £9",
    },
    {
      name: "Jenny Heaney",
      starter: "No starter",
      main: "Steak & Ale Pie with chips, sticky red cabbage, gravy - £17.50",
      dessert: "No dessert",
    },
    {
      name: "Ian Ferrer ",
      starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
      main: "Steak Rump served with tomato, mushroom, chips, peppercorn sauce - £24",
      dessert: "Sweet Potato cake, caramel sauce - £8.50",
    },
    {
      name: "Claire Ferrer",
      starter: "No starter",
      main: "Homemade beef lasagne, Garlic bread - £18",
      dessert: "No dessert",
    },
    {
      name: "Martyn  Leighton",
      starter: "Creamy Garlic Mushrooms, Sourdough bread £8.50",
      main: "Steak & Ale Pie with chips, sticky red cabbage, gravy - £17.50",
      dessert: "No dessert",
    },
  ],
  hotelB: [
    {
      name: "David Olney",
      starter: "Crispy onion & corn bites served with mango mole",
      main: "Lion’s Hot Chicken Burger with gherkins, balsamic onions, Tomato, Lettuce and Chef’ special sauce",
      dessert: "No dessert",
    },
    {
      name: "Laurie Peach",
      starter: "No starter",
      main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
      dessert: "Sticky Toffee Pudding with Custard",
    },
    {
      name: "Christine Bell",
      starter: "Chef’s Soup of the Day",
      main: "Tadka Dal (Red Lentil Curry) A flavorful and hearty dish, made with red lentils, simmered in mild spices, tempered with onions, garlic and cumin. Served with saffron flavored basmati rice & Poppadum",
      dessert: "No dessert",
    },
    {
      name: "Beverly Smithers",
      starter: "Lightly fried whitebait served with burnt lemon & tartar dip",
      main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
      dessert: "No dessert",
    },
    {
      name: "Janice Clowes ",
      starter: "No starter",
      main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
      dessert: "Sticky Toffee Pudding with Custard",
    },
    {
      name: "Roy clarke",
      starter: "No starter",
      main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
      dessert: "Cheesecake with Mix Berries Compote",
    },
    {
      name: "Theresa Jennings",
      starter: "No starter",
      main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
      dessert: "Cheesecake with Mix Berries Compote",
    },
    {
      name: "Ryan Lovatt",
      starter: "Chef’s Soup of the Day",
      main: "Butter chicken in a rich & silky makhani sauce served with saffron flavored basmati rice & poppadum",
      dessert: "Cheesecake with Mix Berries Compote",
    },
    {
      name: "Anthony Heaney",
      starter: "No starter",
      main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
      dessert: "Cheesecake with Mix Berries Compote",
    },
    {
      name: "Jenny Heaney",
      starter: "No starter",
      main: "Beer battered Cod & Chips served with chips, mushy peas, lemon wedge & tartare sauce",
      dessert: "Cheesecake with Mix Berries Compote",
    },
    {
      name: "Ian Ferrer ",
      starter: "Lightly fried whitebait served with burnt lemon & tartar dip",
      main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
      dessert: "No dessert",
    },
    {
      name: "Claire Ferrer",
      starter: "Lightly fried whitebait served with burnt lemon & tartar dip",
      main: "Seafood Tagliatelle simmered in Bisque with prawns, squids & mussels served with lemon, Urfa Chilli, chives & Parmesan",
      dessert: "No dessert",
    },
    {
      name: "Martyn  Leighton",
      starter: "No starter",
      main: "Butter chicken in a rich & silky makhani sauce served with saffron flavored basmati rice & poppadum",
      dessert: "Sticky Toffee Pudding with Custard",
    },
  ],
  hotelC: [
    {
      name: "David Olney",
      starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
      main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95",
      dessert:
        "Banoffee Belgian Waffle - Belgian Wafle topped with bananas, signature toffee sauce & honeycomb ice cream - £7.95",
    },
    {
      name: "Laurie Peach",
      starter: "No starter",
      main: "Classic Dishes: Beef Lasagne - Dressed leaves, chips & garlic bread - £14.95",
      dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    },
    {
      name: "Christine Bell",
      starter: "No starter",
      main: "Special Dishes: Pan Fried Salmon - With tomatoes, garlic, chilli & coriander - £19.95 + Seasonal Side Salad (VG) - £3.95",
      dessert: "No dessert",
    },
    {
      name: "Beverly Smithers",
      starter: "Thai Bass Fishcakes - With sweet chilli & coriander salad - £8.95",
      main: "Special Dishes: Pan Fried Salmon - With tomatoes, garlic, chilli & coriander - £19.95",
      dessert: "No dessert",
    },
    {
      name: "Janice Clowes ",
      starter: "Thai Bass Fishcakes - With sweet chilli & coriander salad - £8.95",
      main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95",
      dessert: "No dessert",
    },
    {
      name: "Roy clarke",
      starter: "No starter",
      main: "Classic Dishes: Nanhoron Tikka Curry - Chicken, Served with rice, naan, mango chutney - £15.95",
      dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    },
    {
      name: "Theresa Jennings",
      starter: "No starter",
      main: "Classic Dishes: Steak & Local Ale Pie - With puff pastry top & served with peas and chips - £15.95",
      dessert: "Lemon Posset - Creamy Lemon dessert with shortbread biscuit and berries - £7.95",
    },
    {
      name: "Ryan Lovatt",
      starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
      main: "Classic Dishes: House Burger - Double beef, cheese, pickles, lettuce, burger sauce, coleslaw, hand-cut chips - £14.95",
      dessert: "No dessert",
    },
    {
      name: "Anthony Heaney",
      starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
      main: "Special Dishes: Chicken Supreme - stuffed with bacon & cheese, wrapped in parma ham served on a bed of creamed leeks - £18.95",
      dessert: "Eton Mess - Crushed meringue, mixed fruit & fresh cream - £7.95",
    },
    {
      name: "Jenny Heaney",
      starter: "No starter",
      main: "Classic Dishes: Beef Lasagne - Dressed leaves, chips & garlic bread - £14.95",
      dessert: "No dessert",
    },
    {
      name: "Ian Ferrer ",
      starter: "Shredded Duck Bon Bons - Hoisin mayo & sticky dressing - £8.95",
      main: "Classic Dishes: Nanhoron Tikka Curry - Chicken, Served with rice, naan, mango chutney - £15.95",
      dessert: "No dessert",
    },
    {
      name: "Claire Ferrer",
      starter: "Thai Bass Fishcakes - With sweet chilli & coriander salad - £8.95",
      main: "Special Dishes: Crispy 1/2 Roast Duck - With orange sauce - £21.95",
      dessert: "No dessert",
    },
    {
      name: "Martyn  Leighton",
      starter: "Creamy Garlic Mushrooms (V) - Crusty bread & butter - £7.95",
      main: "Light Bites: Peppered Steak Loaded Fries - With slow cooked steak in a creamy peppercorn sauce - £12.95",
      dessert: "No dessert",
    },
  ],
  hotelD: [
    {
      name: "David Olney",
      starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
      main: "Steak & Ale Pie - With chips and vegetables - £18.95",
      dessert: "No dessert",
    },
    {
      name: "Laurie Peach",
      starter: "No starter",
      main: "Chicken Supreme with Chasseur Sauce - With mashed potato and vegetables - £18.95",
      dessert: "Tiramisu - Coffee, sponge and cream dessert - £6.95",
    },
    {
      name: "Christine Bell",
      starter: "Soup of the Day (V) – With bread and butter - £6.95",
      main: "Thai Green Vegetable Curry (V) - With steamed rice and flatbread - £15.95 + New Potatoes - £4.50, Tenderstem Brocoli & honeyed carrots - £3.50",
      dessert: "No dessert",
    },
    {
      name: "Beverly Smithers",
      starter: "Pheasant & Mushroom Pate - With toasted sourdough - £8.95",
      main: "Cod & Lemon Fishcakes - With pea and bacon salad - £18.95 + Tenderstem Brocoli & honeyed carrots - £3.50",
      dessert: "Coconut & Vanilla Panna Cotta - With pineapple salsa - £7.95",
    },
    {
      name: "Janice Clowes ",
      starter: "Chicken Caesar Croquettes - With salad and Parmesan - £7.95",
      main: "Lamb Hot Pot Pie & Mint Gravy - With mashed potato and vegetables - £18.95",
      dessert: "Rhubarb & Stem Ginger Crumble (V) - With custard - £7.95",
    },
    {
      name: "Roy clarke",
      starter: "No starter",
      main: "Lamb Hot Pot Pie & Mint Gravy - With chips and vegetables - £18.95",
      dessert: "Rhubarb & Stem Ginger Crumble (V) - With vanilla ice cream - £7.95",
    },
    {
      name: "Theresa Jennings",
      starter: "No starter",
      main: "Cod & Lemon Fishcakes - With pea and bacon salad - £18.95",
      dessert: "Rhubarb & Stem Ginger Crumble (V) - With vanilla ice cream - £7.95",
    },
    {
      name: "Ryan Lovatt",
      starter: "Pheasant & Mushroom Pate - With toasted sourdough - £8.95",
      main: "Steak & Ale Pie - With mashed potato and vegetables - £18.95 + Onion Rings - £4.50",
      dessert: "No dessert",
    },
    {
      name: "Anthony Heaney",
      starter: "Potato Skins (V) – With cheese, garlic sauce and crispy onions - £7.95",
      main: "Chicken Supreme with Chasseur Sauce - With mashed potato and vegetables - £18.95 + Jacket Potato - £4.50",
      dessert: "Rhubarb & Stem Ginger Crumble (V) - With custard - £7.95",
    },
    {
      name: "Jenny Heaney",
      starter: "No starter",
      main: "Scampi & Chips - With mushy peas and tartare sauce - £17.95",
      dessert: "Tiramisu - Coffee, sponge and cream dessert - £6.95",
    },
    {
      name: "Ian Ferrer ",
      starter: "Spicy Meatballs – With a roast tomato sauce, Parmesan and rocket - £8.95",
      main: "The Bull’s Buffalo Chicken Burger - With smoked cheese, ranch slaw and fries - £17.95 + House Slaw - £3.50",
      dessert: "Penderyn Whisky & Chocolate Basque Cheesecake - With Chantilly cream - £7.95",
    },
    {
      name: "Claire Ferrer",
      starter: "No starter",
      main: "Oven-Roasted Pheasant & Black Pudding Bon Bon - With potato fondant, vegetables and whisky sauce - £18.95 + Side Salad - £3.50",
      dessert: "No dessert",
    },
    {
      name: "Martyn  Leighton",
      starter: "Cod & Lemon Fishcake - With parsley sauce - £8.95",
      main: "Lamb Hot Pot Pie & Mint Gravy - With chips and vegetables - £18.95",
      dessert: "Tiramisu - Coffee, sponge and cream dessert - £6.95",
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
