const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const messageCard = document.getElementById('message-card');
const overlay = document.getElementById('overlay');
const unlockBtn = document.getElementById('unlock-btn');
const passwordInput = document.getElementById('password');
const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const errorMsg = document.getElementById('error-msg');

const CORRECT_PASSWORD = "24022006";

// Password Unlock Logic
unlockBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
    if (passwordInput.value === CORRECT_PASSWORD) {
        lockScreen.style.display = 'none';
        mainContent.style.display = 'block';
        createHearts(); // Sprinkle some hearts on entry
    } else {
        errorMsg.style.display = 'block';
        passwordInput.style.borderColor = '#ff4d4d';
        setTimeout(() => {
            errorMsg.style.display = 'none';
            passwordInput.style.borderColor = 'var(--soft-mint)';
        }, 2000);
    }
}

// Function to move the "No" button
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent accidental clicks on mobile
    moveButton();
});

function moveButton() {
    // Calculate safe boundaries
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = '1000';
}

// "No" button click (for mobile or if they manage to click it)
noBtn.addEventListener('click', () => {
    alert("Hey! You're not supposed to be able to click this! 😤 Please forgive me!");
});

// Function to handle "Yes" click
yesBtn.addEventListener('click', () => {
    createHearts();
    setTimeout(() => {
        messageCard.classList.add('active');
        overlay.classList.add('active');
    }, 500);
});

function closeMessage() {
    messageCard.classList.remove('active');
    overlay.classList.remove('active');
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        const hearts = ['💖', '💗', '✨', '🌸', '🤍'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.classList.add('heart-animation');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animation = `flyAway ${Math.random() * 2 + 3}s linear forwards`;
        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
