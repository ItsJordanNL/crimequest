let marker;
let circle;


var map = L.map('map').setView([51.4512, 5.4800], 18); // Eindhoven locatie
// var map = L.map('map').setView([51.44083, 5.47778], 18); // Eindhoven locatie
// var map = L.map('map').fitWorld(); // Laat de wereld zien indien geen locatie gevonden kan worden


L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'CrimeQuest',
}).addTo(map);

// =============================== Map load================================== //


function mapLocate(){
    map.locate({setView: true, maxZoom: 18});
};

let RefreshLocation = setInterval(mapLocate, 100);// Refresh map iedere mili seconde

// =============================== Laat je eigen locatie zien =========================== //

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    // Controleer of er al een marker bestaat en verwijder deze indien aanwezig
    if (marker) {
        map.removeLayer(marker);
    }

    // Voeg de nieuwe marker toe
    marker = L.marker(e.latlng)
        .addTo(map)
}

map.on('locationfound', onLocationFound);

// =============================== Laat je locatie nauwkeurig zien=========================== //

function onLocationError(e) {
    alert(e.message);
}



map.on('locationerror', onLocationError);

// =============================== Laat een error zien als hij je locatie niet kan vinden ================================ //

// L.marker([51.4512, 5.480019]).addTo(map);
// L.marker([51.4512, 5.4789997]).addTo(map);
// L.marker([51.4513, 5.47954]).addTo(map);
// L.marker([51.45115, 5.47935]).addTo(map);

L.circle([51.4512, 5.480019],3).addTo(map);
L.circle([51.4512, 5.4789997],3).addTo(map);
L.circle([51.4513, 5.47954],3).addTo(map);
L.circle([51.45115, 5.47935],3).addTo(map);




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

