document.addEventListener("DOMContentLoaded", function () {
    // Toon de eerste popup bij het laden van de pagina
    document.getElementById('popup1').style.display = 'flex';
    document.querySelector('.indicator-dot').classList.add('active');
});

function changePopup(popupNumber) {
    // Verberg alle popups
    for (let i = 1; i <= 4; i++) {
        document.getElementById('popup' + i).style.display = 'none';
    }

    // Toon de geselecteerde popup
    document.getElementById('popup' + popupNumber).style.display = 'flex';

    // Verwijder de active class van alle indicator dots
    document.querySelectorAll('.indicator-dot').forEach(dot => {
        dot.classList.remove('active');
    });

    // Voeg de active class toe aan de geselecteerde indicator dot
    document.querySelector('.indicator-dot:nth-child(' + popupNumber + ')').classList.add('active');
}
