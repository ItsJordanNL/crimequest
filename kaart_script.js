let marker;
let circle;


// var map = L.map('map').setView([51.44083, 5.47778], 16); // Eindhoven locatie
var map = L.map('map').fitWorld(); // Laat de wereld zien indien geen locatie gevonden kan worden


L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'CrimeQuest',
}).addTo(map);

// =============================== Map load================================== //

function mapLocate(){
    map.locate({setView: true, maxZoom: 18});
};

let RefreshLocation = setInterval(mapLocate, 1000);// Refresh map iedere seconde

// =============================== Laat je eigen locatie zien =========================== //

function onLocationFound(e) {
    var radius = 10;

    // Controleer of er al een marker bestaat en verwijder deze indien aanwezig
    if (marker) {
        map.removeLayer(marker);
    }
    if (circle) {
        map.removeLayer(circle);
    }

    // Voeg de nieuwe marker toe
    marker = L.marker(e.latlng)
        .addTo(map)
        .bindPopup("You are within " + radius + " meters from this point")
        .openPopup();

    // Voeg de cirkel toe
    L.circle(e.latlng, radius).addTo(map);
}



map.on('locationfound', onLocationFound);

// =============================== Laat je locatie nauwkeurig zien=========================== //

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// =============================== Laat een error zien als hij je locatie niet kan vinden ================================ //

// L.marker([51.4512, 5.4800]).addTo(map);
// L.marker([51.44083, 5.47778]).addTo(map);
// L.marker([51.44371, 5.47778]).addTo(map);
// L.marker([51.4415, 5.4828]).addTo(map);
// L.marker([51.4393, 5.4751]).addTo(map);



// =============================== Markers & circles ============================ //

L.control.coordinates({
    position:"topright",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLatLng: "E {x}",
    useLatLngOrder: true,
}).addTo(map)

// =============================== Zoek coordinaten functie =========================== //

map.zoomControl.remove();
map.attributionControl.remove();

// ============================= Removal of functions etc. ============================= //

