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
            }
        }, 10); // Smaller interval for smoother animation
        console.log()
    }

    updateProgressBar();
});