/* =========================================================
  ACCOMMODATION PAGE SCRIPT
  - Load hotel cards from hotels.json
========================================================== */

/* =========================================================
  LOAD HOTELS FROM JSON
========================================================== */
const hotelContainer = document.getElementById("hotelContainer");

function renderHotels(hotels) {
  hotelContainer.innerHTML = hotels
    .map(
      (hotel) => `
      <div class="hotel-card">
        <img src="${hotel.image}" alt="${hotel.alt}">
        <h3>${hotel.name}</h3>
        <p><strong>Address:</strong> ${hotel.address}</p>
        <p>${hotel.description}</p>
        <p>
          <a href="${hotel.url}" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </p>
      </div>
    `
    )
    .join("");
}

function showHotelError() {
  hotelContainer.innerHTML = `
    <p class="error-message">
      Sorry — accommodation details couldn’t be loaded right now.
    </p>
  `;
}

if (hotelContainer) {
  fetch("data/hotels.json")
    .then((response) => {
      if (!response.ok) throw new Error("hotels.json failed to load");
      return response.json();
    })
    .then((hotels) => renderHotels(hotels))
    .catch((err) => {
      console.error("Failed to load hotels.json:", err);
      showHotelError();
    });
}
;