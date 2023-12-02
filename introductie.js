let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    if (slideIndex >= 5 && n === 1) {
        // Als de huidige slideIndex 6 is en de gebruiker op "volgende" klikt
        // Navigeer naar een andere pagina
        window.location.href = "start.html", "_self";
    } else {
        showSlides(slideIndex += n);
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}