// script.js

function gaNaarVolgendePagina() {
    // Hier kun je de URL van de volgende pagina instellen
    var huidigePagina = window.location.href;

    if (huidigePagina.endsWith("verhaallijn1.html")) {
        // Als de huidige pagina index.html is, ga naar pagina2.html
        window.location.href = "verhaallijn2.html";
    } else if (huidigePagina.endsWith("verhaallijn2.html")) {
        // Als de huidige pagina pagina2.html is, ga naar pagina3.html
        window.location.href = "verhaallijn3.html";
    } else if (huidigePagina.endsWith("verhaallijn3.html")) {
        // Als de huidige pagina pagina2.html is, ga naar pagina3.html
        window.location.href = "verhaallijn4.html";
    } else if (huidigePagina.endsWith("verhaallijn4.html")) {
        // Als de huidige pagina pagina2.html is, ga naar pagina3.html
        window.location.href = "verhaallijn5.html";
    }
    else {
        window.location.href = "kaart.html";
    }
}