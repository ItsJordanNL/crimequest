
    document.addEventListener("DOMContentLoaded", function () {
        // Toon de eerste popup bij het laden van de pagina
        document.getElementById('popup1').style.display = 'flex';
        document.querySelector('.indicator-dot').classList.add('active');

        // Add a click event listener to each popup
        document.querySelectorAll('.popup-instructie').forEach((popup, index) => {
            popup.addEventListener('click', () => handlePopupClick(index + 1));
        });
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

    function handlePopupClick(popupNumber) {
        // If the clicked popup is the last one, you can handle the completion or any specific action
        if (popupNumber === 4) {
            alert('Instructions Completed!');
            // You can add any additional action you want for completion
        } else {
            // If not the last one, proceed to the next popup
            changePopup(popupNumber + 1);

            // Update the active indicator color
            document.querySelectorAll('.indicator-dot').forEach(dot => {
                dot.classList.remove('active');
            });

            document.querySelector('.indicator-dot:nth-child(' + (popupNumber + 1) + ')').classList.add('active');
        }
    }

