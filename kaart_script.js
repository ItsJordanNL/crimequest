
var map = L.map('map').setView([51.44083, 5.47778], 16);
// var map = L.map('map').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'CrimeQuest',
}).addTo(map);



// =============================== Map load================================== //

// map.locate({setView: true, maxZoom: 16});

// =============================== Laat je eigen locatie zien =========================== //

function onLocationFound(e) {
    var radius = 100;

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

L.marker([51.44083, 5.47778]).addTo(map);
L.marker([51.44371, 5.47778]).addTo(map);
L.marker([51.4415, 5.4828]).addTo(map);


L.circle([51.44083, 5.47778],1000).addTo(map);


// =============================== Markers & circles ============================ //

L.control.coordinates({
    position:"topright",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLatLng: "E {x}",
    useLatLngOrder: true,
}).addTo(map)

// =============================== Zoek coordinaten functie=========================== //

