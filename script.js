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

// Reasons Logic
const reasons = [
    "You're the first person I want to tell everything to.",
    "You left your cricket match just to see me! 🏏❤️",
    "You always know when I'm not feeling okay.",
    "Your laugh is literally my favorite sound.",
    "You're the most loyal friend someone could ask for.",
    "You put up with my mood swings without a word.",
    "You always take my side (even when I'm a bit wrong).",
    "You're actually a very good listener.",
    "You remember the small details I tell you.",
    "You make even boring days feel fun.",
    "Your sense of humor is top-tier (mostly).",
    "You're one of the few people who 'gets' me.",
    "You give the best advice when I'm stressed.",
    "You're genuinely a kind-hearted person.",
    "You don't judge me for my weird habits.",
    "You make me feel safe being myself.",
    "The way you get excited about things you love.",
    "You're incredibly patient with me.",
    "You're always there with a text when I need one.",
    "You're my favorite person to annoy.",
    "Our inside jokes that no one else understands.",
    "You're more like family than just a friend.",
    "You're genuinely proud of my achievements.",
    "You can tell what I'm thinking just by a look.",
    "You're honest with me even when it's hard.",
    "You have a heart of gold.",
    "The way you handle my drama so calmly.",
    "You're my go-to person for everything.",
    "You make me a better person.",
    "I can trust you with any secret.",
    "You're always down for random plans.",
    "You're the person I can be silent with comfortably.",
    "You always find a way to cheer me up.",
    "You're more than just a best friend, you're a support system.",
    "You actually care about how my day went.",
    "You're one of the strongest people I know.",
    "You're weird, and I love that about you.",
    "You never give up on people you care about.",
    "You're incredibly humble.",
    "You're my favorite person to share music with.",
    "You've seen me at my worst and stayed.",
    "You always know how to calm me down.",
    "You're the best person to waste time with.",
    "You have a very calming presence.",
    "You're always ready to help anyone in need.",
    "You're genuinely one of a kind.",
    "You make me feel like I matter.",
    "You're the best teammate for anything.",
    "The way you standing up for what's right.",
    "You're my favorite human being, period.",
    "You're always honest about your feelings.",
    "You're a very good judge of character.",
    "You have a great taste in almost everything.",
    "You're incredibly supportive of my dreams.",
    "I love how we can talk for hours about nothing.",
    "You're my favorite person to get food with.",
    "You're always there to humble me when I need it.",
    "You're a very genuine soul.",
    "You're basically my human diary.",
    "You make me feel heard.",
    "You're always willing to learn and grow.",
    "The way you protect the people you love.",
    "You're my comfort person.",
    "I love how you always find the silver lining.",
    "You're very observant.",
    "You're the most reliable person I know.",
    "You have a very contagious energy.",
    "You're the only one who can handle my sarcasm.",
    "You're always there to remind me of my worth.",
    "You're a really good influence on me.",
    "You're never too busy for me.",
    "I love our late-night deep conversations.",
    "You're very thoughtful in your actions.",
    "You're my biggest cheerleader.",
    "You're very selfless when it comes to friends.",
    "I love your random observations about life.",
    "You're the person I want to travel the world with.",
    "You're very forgiving (I hope!).",
    "You're a constant in my ever-changing life.",
    "You're the person I feel most 'regular' with.",
    "You're very grounded.",
    "I love how you're not afraid to be yourself.",
    "You're a really good problem solver.",
    "You're my favorite person to rant to.",
    "You're very protective of our friendship.",
    "You're always there to catch me if I fall.",
    "You're my partner in crime.",
    "I love how you always keep your promises.",
    "You're very intuitive.",
    "You're the 'calm' to my 'storm'.",
    "You're my favorite reason to smile.",
    "You're very easy to talk to.",
    "You're my safest place.",
    "I love how we can communicate without words.",
    "You're a true gem of a person.",
    "You're my constant source of happiness.",
    "You're the best thing that ever happened to me.",
    "You're my forever friend.",
    "I simply love you for who you are.",
    "One argument could never change how much you mean to me.",
    "Your presence makes everything better.",
    "You're the person I can always count on.",
    "You're my favorite traveling companion.",
    "You're the best listener in the world.",
    "You have the kindest soul I've ever met.",
    "You're my partner in all my adventures.",
    "I love how we can talk about nothing for hours.",
    "You're my rock when things get tough.",
    "You're the first person I want to share good news with.",
    "You're my favorite person to watch movies with.",
    "You're simply irreplaceable.",
    "You're the best best friend anyone could wish for.",
    "I trust you more than anyone else.",
    "You're my favorite human.",
    "You're the peanut butter to my jelly.",
    "We're basically a two-person cult.",
    "You're my soulmate in friend form.",
    "I'm so lucky to have you in my life.",
    "You're my sunshine on a cloudy day.",
    "You're the only one who truly understands my silence.",
    "You're my constant in a world of variables.",
    "You're the best version of a human being.",
    "I love you more than words can say (as a bestie!).",
    "You're the peace in my chaotic life.",
    "You're the person I can always be 'ugly-funny' with.",
    "I love how we can have a whole conversation with just facial expressions.",
    "You're my favorite person to share a sunset (or a match) with.",
    "You're the only one who knows my true favorite song.",
    "You make me feel like I can take on the world.",
    "You're my favorite human notification. 📱✨",
    "I love how we share the same brain cell sometimes.",
    "You're the best person to have a deep conversation with at 3 AM.",
    "You're the person I'd choose to be stranded on an island with."
];

function showReasons() {
    closeMessage();
    const letterCard = document.querySelector('.letter-card');
    const reasonsSection = document.getElementById('reasons-section');
    const reasonsList = document.getElementById('reasons-list');
    const countDisplay = document.getElementById('reasons-count');

    letterCard.style.display = 'none';
    reasonsSection.style.display = 'flex';
    reasonsList.innerHTML = '';

    // Animate counter
    let count = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    createHearts(); // Add some magic ✨

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuad = t => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(progress) * reasons.length);

        countDisplay.textContent = currentCount;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            countDisplay.textContent = reasons.length;
            renderReasons();
        }
    }

    requestAnimationFrame(updateCounter);
}

function renderReasons() {
    const reasonsList = document.getElementById('reasons-list');
    reasonsList.innerHTML = ''; // Ensure it's clean

    reasons.forEach((reason, index) => {
        setTimeout(() => {
            const item = document.createElement('div');
            item.className = 'reason-item';
            item.innerHTML = `
                <div class="reason-num">${index + 1}</div>
                <div class="reason-text">${reason}</div>
            `;
            reasonsList.appendChild(item);

            // Fast trigger to show and scroll
            setTimeout(() => {
                item.classList.add('visible');
                reasonsList.scrollTop = reasonsList.scrollHeight; // Simpler scroll
            }, 50);
        }, index * 25); // Fast staggered appearance
    });
}

function backToLetter() {
    const letterCard = document.querySelector('.letter-card');
    const reasonsSection = document.getElementById('reasons-section');
    reasonsSection.style.display = 'none';
    letterCard.style.display = 'block';
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
