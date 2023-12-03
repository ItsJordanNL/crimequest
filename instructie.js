document.addEventListener("DOMContentLoaded", function () {
    // Toon de eerste popup bij het laden van de pagina
    document.getElementById('popup1').style.display = 'flex';
});

function changePopup(popupNumber) {
    // Verberg alle popups
    for (let i = 1; i <= 4; i++) {
        document.getElementById('popup' + i).style.display = 'none';
    }

    // Toon de geselecteerde popup
    document.getElementById('popup' + popupNumber).style.display = 'flex';
}
