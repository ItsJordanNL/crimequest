document.addEventListener("DOMContentLoaded", function () {
    var progressBar = document.getElementById("progress-bar");
    var timeElement = document.getElementById("time");

    function updateProgressBar() {
        var progress = 0;
        var elapsedTime = 0;
        var intervalId = setInterval(function () {
            if (progress <= 100) {
                progressBar.style.width = progress + "%";
                progress += 0.1; // Smaller increments for smoother progress
                elapsedTime += 100; // Increment elapsed time by the interval (in milliseconds)
                timeElement.innerHTML = (elapsedTime / 10000).toFixed(0) + "s"; // Convert to seconds
            } else {
                clearInterval(intervalId);
                alert("Je hebt niet op tijd gekozen, je wordt nu teruggestuurd naar de kaart");
                window.open("kaart.html", "_self");
                //Typ hier wat er moet gebeuren als de speler niet op tijd kiest
            }
        }, 10); // Smaller interval for smoother animation
        console.log()
    }

    updateProgressBar();
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var hitboxTop = document.getElementById('hitboxTop');

    // Add a click event listener to the button
    hitboxTop.addEventListener('click', function () {
        // Toggle the class on the button
        hitboxTop.classList.add('shape-top-clicked');
        hitboxBottom.classList.remove('shape-bottom-clicked');

        document.getElementById("info-top-content").style.display = "none";
        document.getElementById("info-bottom-content").style.display = "flex";

        document.getElementById("informationTopContent").style.display = "flex";
        document.getElementById("informationBottomContent").style.display = "none";

        document.getElementById("itemContainerTop").style.opacity = "1";
        document.getElementById("itemContainerBottom").style.opacity = "0";

        infoTopContainer.classList.add('info-top-container-clicked');
        infoBottomContainer.classList.remove('info-bottom-container-clicked');

        document.getElementById("textContainer").style.opacity = "0";

        document.getElementById("itemContainerTop").style.bottom = "3%";
        document.getElementById("itemContainerBottom").style.top = "5%";
    });

    var hitboxBottom = document.getElementById('hitboxBottom');

    hitboxBottom.addEventListener('click', function () {
        hitboxBottom.classList.add('shape-bottom-clicked');
        hitboxTop.classList.remove('shape-top-clicked');

        document.getElementById("info-top-content").style.display = "flex";
        document.getElementById("info-bottom-content").style.display = "none";

        document.getElementById("informationTopContent").style.display = "none";
        document.getElementById("informationBottomContent").style.display = "flex";

        document.getElementById("itemContainerBottom").style.opacity = "1";
        document.getElementById("itemContainerTop").style.opacity = "0";

        infoBottomContainer.classList.add('info-bottom-container-clicked');
        infoTopContainer.classList.remove('info-top-container-clicked');

        document.getElementById("textContainer").style.opacity = "0";

        document.getElementById("itemContainerBottom").style.top = "3%";
        document.getElementById("itemContainerTop").style.bottom = "5%";
    });

    var topKiezen = document.getElementById('informationTopContent');

    topKiezen.addEventListener('click', function () {
        window.open("kaart.html", "_self");
        //Typ hier wat er moet gebeuren als de speler bewijsstuk 1 kiest
    });

    var bottomKiezen = document.getElementById('informationBottomContent');

    bottomKiezen.addEventListener('click', function () {
        window.open("kaart.html", "_self");
        //Typ hier wat er moet gebeuren als de speler bewijsstuk 2 kiest
    });
});