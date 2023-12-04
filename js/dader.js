const container = document.querySelector('.container');
const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const bulletsContainer = document.getElementById('bullets');

let startX;
let currentIndex = 0;

container.addEventListener('touchstart', handleTouchStart, { passive: false });
container.addEventListener('touchmove', handleTouchMove, { passive: false });
container.addEventListener('touchend', handleTouchEnd, { passive: false });

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    setTransform(diff);
}

function handleTouchEnd() {
    const diff = startX - event.changedTouches[0].clientX;

    if (Math.abs(diff) > container.clientWidth / 4) {
        // Toggle the order of the boxes
        currentIndex = 1 - currentIndex;
    }

    // Reset
    setTransform(0);

    updateBullets();
}

function setTransform(percentage) {
    box.style.zIndex = currentIndex === 0 ? '2' : '1';
    box.style.left = currentIndex === 0 ? `${percentage}px` : `${14 + percentage}px`;
    box2.style.left = currentIndex === 0 ? `${14 + percentage}px` : `${percentage}px`;
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