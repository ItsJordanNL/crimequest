var map = L.map("map");
map.setView([51.45124, 5.47952], 22);

var greenIcon = L.icon({
  iconUrl: "images/marker.png",

  iconSize: [38, 38], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [18, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const options = {
  enableHighAccuracy: true,
  // Get high accuracy reading, if available (default false)
  timeout: 5000,
  // Time to return a position successfully before error (default infinity)
  maximumAge: 2000,
  // Milliseconds for which it is acceptable to use cached position (default 0)
};

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution: "CrimeQuest",
}).addTo(map);

navigator.geolocation.watchPosition(succes, error);

let marker, circle, zoomed;

function succes(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  if (marker) {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }

  marker = L.marker([lat, lng], { icon: greenIcon }).addTo(map);
  circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

  if (!zoomed) {
    zoomed = map.fitBounds(circle.getBounds());
  }

  map.setView([lat, lng]);
}

L.marker([51.45119, 5.48002], {
  title: "Keuze 1",
})
  .bindPopup('<a class="markerbutton" href="https://google.com">Scenario 1</a>')
  .addTo(map);

L.marker([51.45132, 5.47914], {
  title: "Keuze 2",
})
  .bindPopup('<a class="markerbutton" href="https://google.com">Scenario 2</a>')
  .addTo(map);

L.marker([51.45117, 5.47915], {
  title: "Keuze 3",
})
  .bindPopup('<a class="markerbutton" href="https://google.com">Scenario 3</a>')
  .addTo(map);

L.marker([51.45136, 5.47968], {
  title: "Keuze 4",
})
  .bindPopup('<a class="markerbutton" href="https://google.com">Scenario 4</a>')
  .addTo(map);

L.marker([51.45115, 5.47979], {
  title: "Keuze 5",
})
  .bindPopup('<a class="markerbutton" href="https://google.com">Scenario 5</a>')
  .addTo(map);

function error(err) {
  if (err.code === 1) {
    alert("Please allow geolocation access");
  } else {
    alert("Cannot get current location");
  }
}

map.zoomControl.remove();
map.attributionControl.remove();

/* ================================ einde Map ================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  var hitbox = document.getElementById("inventory");
  var closeButton = document.getElementById("closeInventory");

  // Add a click event listener to the button
  hitbox.addEventListener("click", function () {
    // Toggle the class on the button
    hitbox.classList.add("inventory-overlay");
    document.getElementById("inventory-icon").style.display = "none";
    document.getElementById("inventory_tekst").style.display = "none";
    document.getElementById("closeInventory").style.display = "flex";
    document.getElementById("backgroundOverlay").style.display = "flex";
    document.getElementById("inventoryContent").style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    hitbox.classList.remove("inventory-overlay");
    document.getElementById("closeInventory").style.display = "none";
    document.getElementById("inventory-icon").style.display = "";
    document.getElementById("inventory_tekst").style.display = "";
    document.getElementById("backgroundOverlay").style.display = "none";
    document.getElementById("inventoryContent").style.display = "";
  });
});
