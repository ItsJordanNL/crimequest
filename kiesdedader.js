const container = document.querySelector('.container');
const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const bulletsContainer = document.getElementById('bullets');

let startX;
let initialTransform = 0;
let currentIndex = 0;

container.addEventListener('touchstart', handleTouchStart);
container.addEventListener('touchmove', handleTouchMove);
container.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    initialTransform = getCurrentTransform();
}

function handleTouchMove(e) {
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    setTransform(initialTransform - diff);
}

function handleTouchEnd() {
    const diff = startX - event.changedTouches[0].clientX;

    if (Math.abs(diff) > container.clientWidth / 4) {
        currentIndex = (currentIndex + 1) % 2;
    }

    // Reset
    setTransform(0);

    // posities van de boxen worden gespiegeld
    [box.style.order, box2.style.order] = [box2.style.order, box.style.order];

    updateBullets();
}

function getCurrentTransform() {
    const transformValue = window.getComputedStyle(box).getPropertyValue('transform');
    const matrix = new WebKitCSSMatrix(transformValue);
    return matrix.m41;
}

function setTransform(percentage) {
    box.style.zIndex = currentIndex === 0 ? '2' : '1';
    box.style.left = currentIndex === 0 ? '0' : '14px';
    box2.style.left = currentIndex === 0 ? '12px' : '-5px';
    box.style.transform = `translateX(${percentage}%)`;
    box2.style.transform = `translateX(${percentage + 1}%)`;
}

function updateBullets() {
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentIndex);
    });
}

// Voor de bullet points updater
for (let i = 0; i < 2; i++) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.addEventListener('click', () => {
        currentIndex = i;
        setTransform(0);
        updateBullets();
    });
    bulletsContainer.appendChild(bullet);
}

updateBullets();
