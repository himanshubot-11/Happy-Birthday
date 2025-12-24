// Play music when user interacts (click/touch) – works reliably on all browsers
document.body.addEventListener('click', startMusic, { once: true });
document.body.addEventListener('touchstart', startMusic, { once: true });

function startMusic() {
    const audio = document.getElementById('birthdayMusic');
    audio.volume = 0.4; // Soft background volume (adjust 0.1–1.0 if needed)
    audio.play().catch(() => {
        // Fallback if autoplay blocked
        console.log("Music autoplay prevented – will play on next interaction");
    });
}

// Create confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 4 + 4) + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confetti.style.width = (Math.random() * 10 + 8) + 'px';
    confetti.style.height = (Math.random() * 20 + 20) + 'px';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 8000);
}

// Create floating heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

// Create sparkle
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 6000);
}

// Continuous creation
setInterval(createConfetti, 100);
setInterval(createHeart, 400);
setInterval(createSparkle, 300);

// Initial burst for instant magic
for (let i = 0; i < 100; i++) {
    setTimeout(createConfetti, i * 20);
    if (i < 30) setTimeout(createHeart, i * 100);
}