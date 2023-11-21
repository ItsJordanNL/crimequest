var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'CrimeQuest'
}).addTo(map);

// =============================== Map load================================== //

map.locate({setView: true, maxZoom: 16});

// =============================== Laat je eigen locatie zien =========================== //

function onLocationFound(e) {
    var radius = 300;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

// =============================== Laat je locatie nauwkeurig zien=========================== //

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// =============================== Laat een error zien als hij je locatie niet kan vinden ================================ //