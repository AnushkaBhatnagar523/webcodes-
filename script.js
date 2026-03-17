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
        localStorage.setItem('letter_unlocked', 'true');
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
    "Because you understand me even when I don’t explain myself.",
    "Because your smile instantly brightens my day.",
    "Because talking to you feels effortless.",
    "Because you listen to my random thoughts patiently.",
    "Because you make ordinary days feel special.",
    "Because you remember small details about me.",
    "Because you make me laugh when I’m sad.",
    "Because your presence feels comforting.",
    "Because you never judge me.",
    "Because you accept my weird side.",
    "Because you make me feel safe emotionally.",
    "Because you are honest with me.",
    "Because you always try to understand my feelings.",
    "Because you encourage me when I feel lost.",
    "Because you make me feel important.",
    "Because you notice when something is wrong.",
    "Because you never make me feel alone.",
    "Because you support my dreams.",
    "Because you respect my opinions.",
    "Because you always try to cheer me up.",
    "Because you are patient with me.",
    "Because you care about my happiness.",
    "Because your voice feels calming.",
    "Because you never ignore me when I need you.",
    "Because you are always there to talk.",
    "Because you understand my silence.",
    "Because you laugh at my stupid jokes.",
    "Because you give great advice.",
    "Because you make life feel easier.",
    "Because you make every conversation interesting.",
    "Because you care about what I think.",
    "Because you never let me feel like a burden.",
    "Because you respect my boundaries.",
    "Because you motivate me to be better.",
    "Because you bring positivity into my life.",
    "Because you make me smile without trying.",
    "Because you treat me with kindness.",
    "Because you trust me.",
    "Because you make me feel valued.",
    "Because you believe in me.",
    "Because you make me feel understood.",
    "Because you appreciate my presence.",
    "Because you never make fun of my feelings.",
    "Because you help me calm down when I’m stressed.",
    "Because you make difficult days easier.",
    "Because you remind me that I matter.",
    "Because you give me emotional support.",
    "Because you bring laughter into my life.",
    "Because you make my heart feel light.",
    "Because life feels better with you in it.",
    "Because you make me feel comfortable being myself.",
    "Because you never get tired of my long conversations.",
    "Because you respect my emotions.",
    "Because you make me feel cared for.",
    "Because you are thoughtful.",
    "Because you make small moments meaningful.",
    "Because you notice when I’m quiet.",
    "Because you ask if I’m okay.",
    "Because you genuinely care.",
    "Because you make me feel less anxious.",
    "Because you share your thoughts with me.",
    "Because you trust me with your feelings.",
    "Because you make me feel included.",
    "Because you encourage me to be confident.",
    "Because you respect my decisions.",
    "Because you never try to change who I am.",
    "Because you make me laugh even during serious talks.",
    "Because you bring calmness into my life.",
    "Because you make me feel safe sharing anything.",
    "Because you are emotionally supportive.",
    "Because you remember things I say casually.",
    "Because you always check on me.",
    "Because you make time for me.",
    "Because you make my life more colorful.",
    "Because you are gentle with my feelings.",
    "Because you never dismiss my emotions.",
    "Because you give genuine compliments.",
    "Because you make me feel special.",
    "Because you bring warmth into my life.",
    "Because you respect my thoughts.",
    "Because you never ignore my messages intentionally.",
    "Because you always respond with care.",
    "Because you value our friendship.",
    "Because you bring happiness into my day.",
    "Because you make serious talks easier.",
    "Because you stay patient with me.",
    "Because you try to understand my perspective.",
    "Because you care about my wellbeing.",
    "Because you make me feel heard.",
    "Because you respect my opinions even if they differ.",
    "Because you always try to help.",
    "Because you make life less lonely.",
    "Because you encourage me during tough times.",
    "Because you are emotionally present.",
    "Because you make my heart feel peaceful.",
    "Because you remind me that I’m strong.",
    "Because you bring positivity into my thoughts.",
    "Because you never give up on our friendship.",
    "Because you mean a lot to me.",
    "Because you make me feel appreciated.",
    "Because you always try to make me smile.",
    "Because you give me your time.",
    "Because you are thoughtful in conversations.",
    "Because you notice little details.",
    "Because you make me laugh unexpectedly.",
    "Because you bring calm energy.",
    "Because you listen carefully.",
    "Because you show genuine interest in my life.",
    "Because you celebrate my achievements.",
    "Because you help me feel confident.",
    "Because you motivate me to improve.",
    "Because you make me feel comfortable sharing secrets.",
    "Because you never betray my trust.",
    "Because you respect my vulnerability.",
    "Because you bring peace into my mind.",
    "Because you always try to understand me.",
    "Because you encourage my goals.",
    "Because you give emotional stability.",
    "Because you support me without conditions.",
    "Because you make me feel cared for deeply.",
    "Because you are genuinely kind.",
    "Because you appreciate my efforts.",
    "Because you notice when I try.",
    "Because you comfort me when I’m upset.",
    "Because you help me calm down.",
    "Because you make me feel secure.",
    "Because you bring light into dark days.",
    "Because you treat me with respect.",
    "Because you make me feel worthy.",
    "Because you are patient with my moods.",
    "Because you don’t judge my mistakes.",
    "Because you help me learn from them.",
    "Because you make serious talks feel easy.",
    "Because you value honesty.",
    "Because you encourage positivity.",
    "Because you make me feel emotionally safe.",
    "Because you always try to be there.",
    "Because you understand my personality.",
    "Because you support me during stressful times.",
    "Because you help me think clearly.",
    "Because you listen without interrupting.",
    "Because you genuinely care about my thoughts.",
    "Because you bring calmness to chaos.",
    "Because you make me laugh during bad days.",
    "Because you remind me to stay strong.",
    "Because you help me stay hopeful.",
    "Because you treat my feelings seriously.",
    "Because you make my heart feel warm.",
    "Because you make me feel loved as a friend.",
    "Because you respect my time.",
    "Because you make conversations enjoyable.",
    "Because you are genuine.",
    "Because you are caring.",
    "Because you make life better.",
    "Because you encourage me to grow.",
    "Because you support my decisions.",
    "Because you treat me kindly.",
    "Because you make life brighter.",
    "Because you care deeply.",
    "Because you help me stay positive.",
    "Because you respect my feelings.",
    "Because you make life meaningful.",
    "Because you stay supportive.",
    "Because you are trustworthy.",
    "Because you respect me.",
    "Because you always try to understand.",
    "Because you motivate me.",
    "Because you bring peace into my life.",
    "Because you make every day better.",
    "Because you remind me to smile.",
    "Because you make life enjoyable.",
    "Because you bring warmth.",
    "Because you make things easier.",
    "Because you stand by me.",
    "Because you make me feel lucky.",
    "Because you make my life happier.",
    "Because you make me smile naturally.",
    "Because you understand my emotions.",
    "Because you appreciate who I am.",
    "Because you never take me for granted.",
    "Because you care about me.",
    "Because you are my best friend.",
    "Because you somehow know exactly what to say when I’m overthinking.",
    "Because you make my worst days feel manageable.",
    "Because you always make space for me in your life.",
    "Because your laugh is contagious.",
    "Because you never let me feel invisible.",
    "Because you care about the little things that matter to me.",
    "Because you check on me without me asking.",
    "Because you make conversations feel safe.",
    "Because you’re patient when I’m emotional.",
    "Because you understand my mood swings.",
    "Because you remember things I forgot I told you.",
    "Because you make even silence comfortable.",
    "Because you don’t rush me when I’m opening up.",
    "Because you care enough to listen fully.",
    "Because you encourage me when I’m scared.",
    "Because you’re proud of me.",
    "Because you make me feel like I matter.",
    "Because you make everything feel less heavy.",
    "Because you are gentle with my heart.",
    "Because you respect my feelings deeply.",
    "Because you bring calmness when I’m anxious.",
    "Because you remind me that things will be okay.",
    "Because you never make fun of my vulnerability.",
    "Because you celebrate my wins.",
    "Because you support me in my failures.",
    "Because you make me feel accepted.",
    "Because you listen even when I repeat stories.",
    "Because you are kind without trying.",
    "Because you make me laugh randomly.",
    "Because you don’t get tired of me.",
    "Because you make my heart feel calm.",
    "Because you stay when things get difficult.",
    "Because you don’t disappear when I need you.",
    "Because you care about my mental peace.",
    "Because you remind me to breathe when I panic.",
    "Because you make emotional conversations easier.",
    "Because you value my thoughts.",
    "Because you make me feel included in your life.",
    "Because you are honest even when it’s hard.",
    "Because you protect my feelings.",
    "Because you always try to understand my side.",
    "Because you make me feel safe being vulnerable.",
    "Because you brighten my day just by texting me.",
    "Because your words calm my overthinking.",
    "Because you notice when my energy changes.",
    "Because you always ask if I’m okay.",
    "Because you make ordinary moments feel special.",
    "Because you treat my emotions seriously.",
    "Because you never make me feel dramatic.",
    "Because you encourage me when I doubt myself.",
    "Because you make me feel emotionally secure.",
    "Because you are gentle with your words.",
    "Because you think about my feelings.",
    "Because you make difficult talks easier.",
    "Because you listen more than you judge.",
    "Because you are emotionally intelligent.",
    "Because you support my growth.",
    "Because you celebrate the little things with me.",
    "Because you understand my humor.",
    "Because you laugh at my dumb jokes.",
    "Because you make me laugh at yours.",
    "Because you brighten my mood instantly.",
    "Because you make me forget my stress sometimes.",
    "Because you are naturally comforting.",
    "Because you make me feel lucky to know you.",
    "Because you respect my vulnerabilities.",
    "Because you stay patient during my bad moods.",
    "Because you don’t judge my insecurities.",
    "Because you make me feel accepted completely.",
    "Because you are honest about your feelings.",
    "Because you trust me with your thoughts.",
    "Because you make conversations meaningful.",
    "Because you are emotionally reliable.",
    "Because you bring stability to my life.",
    "Because you are always supportive.",
    "Because you inspire me sometimes.",
    "Because you are thoughtful in your actions.",
    "Because you make life more colorful.",
    "Because you make memories better.",
    "Because you are someone I can rely on.",
    "Because you are important to me.",
    "Because you respect my emotions deeply.",
    "Because you make me feel comfortable.",
    "Because you bring happiness into my life.",
    "Because you stay supportive even during tough times.",
    "Because you encourage me to stay strong.",
    "Because you make stressful days lighter.",
    "Because you help me see the bright side.",
    "Because you comfort me without judging.",
    "Because you are thoughtful about my feelings.",
    "Because you understand when I’m quiet.",
    "Because you make me laugh at unexpected moments.",
    "Because you believe in my abilities.",
    "Because you give me confidence.",
    "Because you make me feel strong.",
    "Because you motivate me during tough times.",
    "Because you make emotional talks easier.",
    "Because you bring clarity to confusion.",
    "Because you make life feel meaningful.",
    "Because you make my days better.",
    "Because you bring warmth into my heart.",
    "Because you accept my flaws.",
    "Because you encourage my strengths.",
    "Because you make conversations feel easy.",
    "Because you bring peace to my mind.",
    "Because you help me stay calm.",
    "Because you are always understanding.",
    "Because you encourage my dreams.",
    "Because you bring calmness into my mind.",
    "Because you support my goals.",
    "Because you care deeply about me.",
    "Because you treat my emotions with respect.",
    "Because you help me grow.",
    "Because you bring positivity into conversations.",
    "Because you make my life brighter.",
    "Because you appreciate me.",
    "Because you support me endlessly.",
    "Because you stay by my side.",
    "Because you make life easier.",
    "Because you bring peace.",
    "Because you bring happiness.",
    "Because you make me smile.",
    "Because you understand my feelings.",
    "Because you are kind.",
    "Because you are supportive.",
    "Because you are understanding.",
    "Because you are patient.",
    "Because you are reliable.",
    "Because you make my life better.",
    "Because you make me laugh easily.",
    "Because you make life more fun.",
    "Because you bring comfort.",
    "Because you give emotional support.",
    "Because you help me stay strong.",
    "Because you motivate me to keep going.",
    "Because you encourage me.",
    "Because you bring positivity.",
    "Because you make me feel supported.",
    "Because you are someone I trust.",
    "Because you care about my peace of mind.",
    "Because you bring calmness.",
    "Because you help me believe in myself.",
    "Because you support me emotionally.",
    "Because you make me feel safe.",
    "Because you understand me deeply.",
    "Because you care about me genuinely.",
    "Because you make my heart smile.",
    "Because you make my days brighter.",
    "Because you are always there.",
    "Because you make me laugh.",
    "Because you make my heart happy.",
    "Because you bring joy.",
    "Because you bring laughter.",
    "Because you bring kindness.",
    "Because you bring support.",
    "Because you bring understanding.",
    "Because you make my days happier.",
    "Because you make my heart calm.",
    "Because you make everything feel better.",
    "Because you bring light into my life.",
    "Because you make life feel special.",
    "Because you make moments better.",
    "Because you bring comfort to my heart.",
    "Because you make my world brighter.",
    "Because you bring peace into my thoughts.",
    "Because you make every day lighter.",
    "Because you bring warmth to my heart.",
    "Because you are my favorite person to talk to.",
    "Because you make even boring conversations interesting.",
    "Because you understand my sarcasm.",
    "Because you make me laugh when I’m trying to stay serious.",
    "Because you somehow always know when I need cheering up.",
    "Because talking to you feels natural.",
    "Because you make long conversations feel short.",
    "Because you make short conversations meaningful.",
    "Because you make my bad days a little better.",
    "Because you listen even when I ramble.",
    "Because you never rush me when I’m explaining something.",
    "Because you respect my feelings even when you don’t fully understand them.",
    "Because you remember things about me that even I forget.",
    "Because you notice when something feels off.",
    "Because you genuinely want to know how I’m doing.",
    "Because you care about the little details.",
    "Because you ask questions instead of assuming.",
    "Because you’re patient with my overthinking.",
    "Because you never make me feel silly for feeling too much.",
    "Because you stay calm when I’m chaotic.",
    "Because you make my heart feel lighter.",
    "Because you’re someone I can rely on.",
    "Because you never make me feel like an option.",
    "Because you give genuine attention.",
    "Because you make space for me in your life.",
    "Because you’re emotionally present.",
    "Because you actually care.",
    "Because you make me laugh at random moments.",
    "Because you make my mood change instantly.",
    "Because you turn awkward moments into funny ones.",
    "Because you make silence comfortable.",
    "Because you make simple things fun.",
    "Because you make everything feel less stressful.",
    "Because you make ordinary days memorable.",
    "Because you make my thoughts feel heard.",
    "Because you are thoughtful without even trying.",
    "Because you are kind naturally.",
    "Because you make people around you comfortable.",
    "Because you bring calmness into chaotic moments.",
    "Because you have a gentle way of talking.",
    "Because you never intentionally hurt my feelings.",
    "Because you always try to be careful with your words.",
    "Because you respect my emotional boundaries.",
    "Because you make me feel safe opening up.",
    "Because you genuinely care about me.",
    "Because you make life feel less lonely.",
    "Because you understand my weird humor.",
    "Because you laugh at things only we find funny.",
    "Because you make inside jokes with me.",
    "Because those inside jokes make my day.",
    "Because you make conversations fun.",
    "Because you lighten serious moments.",
    "Because you stay patient when I overthink.",
    "Because you help calm my anxious thoughts.",
    "Because you listen to my late-night thoughts.",
    "Because you never make me feel annoying.",
    "Because you respect when I need space.",
    "Because you’re still there when I come back.",
    "Because you never hold my bad days against me.",
    "Because you accept me as I am.",
    "Because you never try to change me.",
    "Because you appreciate the real version of me.",
    "Because you see my good qualities.",
    "Because you remind me of my strengths.",
    "Because you encourage me to believe in myself.",
    "Because you support my ambitions.",
    "Because you encourage me to keep going.",
    "Because you motivate me when I’m tired.",
    "Because you remind me of my potential.",
    "Because you bring happiness into my routine.",
    "Because you make conversations feel exciting.",
    "Because you make me smile when I read your messages.",
    "Because you give thoughtful replies.",
    "Because you actually pay attention.",
    "Because you remember important things about me.",
    "Because you remember things I like.",
    "Because you remember things I dislike.",
    "Because you remember my stories.",
    "Because you’re someone I trust deeply.",
    "Because you respect my secrets.",
    "Because you’re reliable.",
    "Because you stand by your words.",
    "Because you’re emotionally mature.",
    "Because you communicate honestly.",
    "Because you value sincerity.",
    "Because you appreciate honesty.",
    "Because you make friendship feel meaningful.",
    "Because you make good days even better.",
    "Because you bring balance to my emotions.",
    "Because you make me feel calm.",
    "Because you’re gentle with my feelings.",
    "Because you make conversations feel genuine.",
    "Because you’re emotionally supportive.",
    "Because you bring good energy.",
    "Because you give thoughtful advice.",
    "Because you guide me when I’m confused.",
    "Because you help me see things clearly.",
    "Because you help me grow as a person.",
    "Because you make life feel brighter.",
    "Because you add happiness to my life.",
    "Because you make moments feel special.",
    "Because you bring joy to my day.",
    "Because you bring kindness everywhere.",
    "Because you treat people with respect.",
    "Because you show empathy.",
    "Because you care about others.",
    "Because you listen to my thoughts.",
    "Because you ask what I think.",
    "Because you value my perspective.",
    "Because you appreciate my ideas.",
    "Because you make me feel intelligent.",
    "Because you make me feel capable.",
    "Because you make me feel confident.",
    "Because you encourage my creativity.",
    "Because you motivate my growth.",
    "Because you bring positivity to conversations.",
    "Because you brighten my mood.",
    "Because you stay patient during deep conversations.",
    "Because you make serious talks comfortable.",
    "Because you show genuine interest.",
    "Because you’re emotionally aware.",
    "Because you understand feelings deeply.",
    "Because you’re someone I can depend on.",
    "Because you’re consistent.",
    "Because you’re trustworthy.",
    "Because you’re reliable emotionally.",
    "Because you bring stability.",
    "Because you stay loyal as a friend.",
    "Because you appreciate our friendship.",
    "Because you make my life more interesting.",
    "Because you add fun to conversations.",
    "Because you make jokes randomly.",
    "Because you laugh loudly sometimes.",
    "Because you make awkward situations funny.",
    "Because you create memories with me.",
    "Because you make stories better.",
    "Because you turn small moments into good memories.",
    "Because you make time feel special.",
    "Because you make my heart feel happy.",
    "Because you bring excitement.",
    "Because you make me look forward to talking to you.",
    "Because you give me something to smile about.",
    "Because you bring warmth into conversations.",
    "Because you are comforting.",
    "Because you make life feel softer.",
    "Because you make difficult moments lighter.",
    "Because you bring peace to my thoughts.",
    "Because you calm my worries.",
    "Because you encourage honesty.",
    "Because you listen openly.",
    "Because you understand emotions.",
    "Because you’re empathetic.",
    "Because you’re compassionate.",
    "Because you show kindness naturally.",
    "Because you treat people well.",
    "Because you’re respectful.",
    "Because you value connection.",
    "Because you brighten my day.",
    "Because you remind me I matter.",
    "Because you make my world better.",
    "Because you make me smile unexpectedly.",
    "Because you brighten even dull days.",
    "Because you make talking fun.",
    "Because you bring laughter into quiet moments.",
    "Because you help me relax.",
    "Because you listen patiently.",
    "Because you make me feel brave.",
    "Because you bring joy into my day.",
    "Because you bring kindness into conversations.",
    "Because you make every day feel better.",
    "Because somehow you always know how to make me smile.",
    "Because talking to you is the best part of my day.",
    "Because you make my heart feel lighter without even trying.",
    "Because your messages can instantly change my mood.",
    "Because you somehow manage to make me laugh even when I’m annoyed.",
    "Because you’re the person I want to tell everything to first.",
    "Because you make silence feel comfortable instead of awkward.",
    "Because you tease me just enough to make me blush.",
    "Because you make even normal conversations feel special.",
    "Because you make my day brighter without even realizing it.",
    "Because your voice is weirdly comforting.",
    "Because you make me laugh at the dumbest things.",
    "Because you somehow make me miss you even when we just talked.",
    "Because your attention makes me feel special.",
    "Because you make me smile at my phone like an idiot sometimes.",
    "Because you’re the person I look forward to hearing from.",
    "Because you know exactly how to cheer me up.",
    "Because you’re the only one who can annoy me and still make me smile.",
    "Because you understand me better than most people.",
    "Because you make late-night conversations feel magical.",
    "Because you’re someone I never get tired of talking to.",
    "Because you make my boring days interesting.",
    "Because you somehow always know what I’m thinking.",
    "Because you make me feel comfortable being completely myself.",
    "Because you’re the person I secretly hope will text me.",
    "Because you’re easy to talk to.",
    "Because you make conversations flow naturally.",
    "Because you’re the one person who can always calm me down.",
    "Because you make me laugh in ways nobody else does.",
    "Because you remember random things about me.",
    "Because you make teasing feel cute instead of annoying.",
    "Because you’re always interesting to talk to.",
    "Because you make time pass quickly when we talk.",
    "Because you bring positive energy into my life.",
    "Because you somehow make me feel safe.",
    "Because you listen when I’m rambling.",
    "Because you care about my feelings.",
    "Because you’re thoughtful in your words.",
    "Because you’re someone I feel lucky to know.",
    "Because you make even serious conversations easier.",
    "Because you’re someone I can rely on emotionally.",
    "Because you’re kind in ways that matter.",
    "Because you bring comfort when I need it.",
    "Because you make me smile even when I try not to.",
    "Because you know exactly how to make me laugh.",
    "Because you somehow turn bad moods into good ones.",
    "Because you make talking feel easy.",
    "Because you’re someone I can trust with my thoughts.",
    "Because you’re always supportive.",
    "Because you’re someone I never get bored of.",
    "Because you make simple conversations fun.",
    "Because you make jokes that actually make me laugh.",
    "Because you’re the person I think of when something funny happens.",
    "Because you make every conversation memorable.",
    "Because you’re interesting in your own way.",
    "Because you make me feel comfortable opening up.",
    "Because you’re someone I enjoy talking to every day.",
    "Because you make conversations feel meaningful.",
    "Because you bring joy into my life.",
    "Because you make me laugh often.",
    "Because you make moments special.",
    "Because you treat my feelings with respect.",
    "Because you are someone special to me.",
    "Because you make me smile at my phone like a fool.",
    "Because sometimes I reread your messages and smile again.",
    "Because you somehow make teasing me look cute.",
    "Because talking to you never feels like a waste of time.",
    "Because you make conversations addictive.",
    "Because you’re the reason I check my phone more often.",
    "Because you make my mood instantly better.",
    "Because you make even random chats fun.",
    "Because you’re the person I want to tell good news to first.",
    "Because you’re also the person I go to when things go wrong.",
    "Because you make everything feel lighter.",
    "Because you know how to make me laugh properly.",
    "Because you make my day feel incomplete if we don’t talk.",
    "Because you make teasing fun.",
    "Because you make me blush sometimes.",
    "Because you know exactly how to make me smile.",
    "Because you bring excitement into my day.",
    "Because you’re someone I look forward to hearing from.",
    "Because you’re the reason some days feel better.",
    "Because you make ordinary days interesting.",
    "Because you’re someone I enjoy talking to endlessly.",
    "Because you make conversations feel effortless.",
    "Because you’re fun to be around.",
    "Because you have a way of making me laugh easily.",
    "Because you appreciate my humor.",
    "Because you bring out my playful side.",
    "Because you make me feel happy unexpectedly.",
    "Because you’re someone who makes life less boring.",
    "Because you bring excitement into conversations.",
    "Because you’re someone I genuinely enjoy talking to.",
    "Because you bring positive energy.",
    "Because somehow you always manage to make me smile at the worst possible times.",
    "Because talking to you feels like my favorite habit.",
    "Because you make even the most boring topics interesting.",
    "Because you somehow make me forget what I was upset about.",
    "Because you’re the person I always want to reply to immediately.",
    "Because you make late-night chats feel special.",
    "Because you make random moments memorable.",
    "Because you’re the reason I smile at my phone sometimes.",
    "Because you know how to keep a conversation interesting.",
    "Because you’re the one person I can never stay mad at.",
    "Because you somehow understand my weird side.",
    "Because you make me laugh harder than anyone else.",
    "Because you make even arguments funny sometimes.",
    "Because you make me feel comfortable being silly.",
    "Because you make life feel lighter.",
    "Because you make normal conversations fun.",
    "Because you make me look forward to messages.",
    "Because you make teasing feel like flirting sometimes.",
    "Because you make my mood better without even trying.",
    "Because you make conversations feel natural.",
    "Because you somehow make my jokes funnier.",
    "Because you’re someone I can talk to endlessly.",
    "Because you make ordinary moments fun.",
    "Because you make my day feel less boring.",
    "Because you make me feel noticed.",
    "Because you make my day better just by being there.",
    "Because you make conversations feel comfortable.",
    "Because you know how to cheer me up.",
    "Because you’re someone I always want to talk to.",
    "Because you make moments more fun.",
    "Because you somehow always brighten my day.",
    "Because you’re the reason some of my best laughs happen.",
    "Because you make normal chats feel exciting.",
    "Because you somehow always know what to say.",
    "Because you make teasing feel sweet.",
    "Because you make even simple things fun.",
    "Because you make my day brighter.",
    "Because you make my mood better instantly.",
    "Because you make life less boring.",
    "Because you make me laugh even when I’m trying not to.",
    "Because you make jokes that actually work on me.",
    "Because you somehow always know how to cheer me up.",
    "Because you make teasing feel harmless and cute.",
    "Because you make me smile without realizing it.",
    "Because you bring excitement into my routine.",
    "Because you’re someone I trust with my thoughts.",
    "Because you support me.",
    "Because you make life more meaningful.",
    "Because you make random conversations fun.",
    "Because you somehow always know how to make me laugh.",
    "Because you make even quiet moments comfortable.",
    "Because you’re someone I can talk to about anything.",
    "Because you make conversations feel special.",
    "Because you make me laugh harder than I expect.",
    "Because you make every day a little better.",
    "Because you somehow make teasing me feel adorable instead of annoying.",
    "Because you always know how to make me laugh when I least expect it.",
    "Because talking to you never feels like a chore.",
    "Because you make me smile at my phone like a complete idiot sometimes.",
    "Because you somehow turn boring moments into fun ones.",
    "Because you’re the person I secretly hope will text me first.",
    "Because you make every conversation feel a little special.",
    "Because you always manage to make me laugh.",
    "Because you somehow always understand my sarcasm.",
    "Because you make random conversations interesting.",
    "Because you make normal moments feel memorable.",
    "Because you make even small conversations fun.",
    "Because you bring energy into every conversation.",
    "Because you know how to make me smile unexpectedly.",
    "Because you somehow make even arguments funny.",
    "Because you make ordinary moments exciting.",
    "Because you make even serious talks easier.",
    "Because you make my mood lighter.",
    "Because you make life feel more fun.",
    "Because you somehow make everything feel better",
    "Because you make teasing feel like our own little game.",
    "Because you somehow know exactly how to make me blush.",
    "Because you make my day interesting without trying.",
    "Because you make even random chats enjoyable.",
    "Because you make me laugh during the most random moments.",
    "Because you make simple conversations exciting.",
    "Because you make conversations memorable.",
    "Because you’re someone I can always be myself around.",
    "Because you make me laugh even when I’m annoyed.",
    "Because you make teasing feel playful.",
    "Because you bring fun into my life.",
    "Because you make my day feel lighter.",
    "Because you make life more entertaining.",
    "Because you somehow always understand my humor.",
    "Because you make moments feel fun.",
    "Because you make conversations lively.",
    "Because you make my mood better.",
    "Because you make my world more interesting.",
    "Because you make even boring topics interesting.",
    "Because you make my day happier.",
    "Because you make my heart lighter.",
    "Because you bring joy into my routine.",
    "Because you make life feel exciting.",
    "Because you somehow make my day better just by being in it.",
    "Because you make me smile even when I’m trying not to.",
    "Because talking to you never feels like enough.",
    "Because you make normal conversations feel special.",
    "Because you’re the person I want to share good news with first.",
    "Because you’re also the person I run to when things go wrong.",
    "Because you make me laugh at the most random moments.",
    "Because you make teasing feel cute.",
    "Because you somehow make my day brighter.",
    "Because you make even boring days interesting.",
    "Because you’re someone I look forward to talking to.",
    "Because you make moments feel memorable.",
    "Because you make me smile at my phone sometimes.",
    "Because you bring excitement into ordinary days.",
    "Because you make life feel less stressful.",
    "Because you bring calmness into my thoughts.",
    "Because you listen when I need to talk.",
    "Because you bring happiness into conversations.",
    "Because you make my world feel brighter.",
    "Because you bring positivity everywhere.",
    "Because you make my world happier",
    "Because you somehow always know how to make me smile.",
    "Because you make even random conversations fun.",
    "Because you make life more interesting.",
    "Because you make moments memorable.",
    "Because you bring joy into conversations.",
    "Because you bring smiles into my day.",
    "Because you make me laugh even when I’m upset.",
    "Because you make teasing feel adorable.",
    "Because you make every conversation enjoyable.",
    "Because you bring comfort into my life.",
    "Because out of all the people in the world, you’re still the one who makes my life feel a little brighter just by being in it."
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

// Happiness & Game Logic
function showHappiness() {
    document.getElementById('reasons-section').style.display = 'none';
    document.getElementById('happiness-section').style.display = 'block';
    createHearts();
}

function backToHappiness() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('happiness-section').style.display = 'block';
}

function showGame() {
    document.getElementById('happiness-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'flex';
    resetGame();
}

let score = 0;
const gameHeart = document.getElementById('game-heart');
const scoreDisplay = document.getElementById('game-score');
const gameArea = document.getElementById('game-area');

gameHeart.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    createHearts(); // Bonus hearts on click!

    if (score >= 5) {
        alert("Yay! You caught my heart! ❤️ Now you HAVE to forgive me and we HAVE to meet soon! No excuses allowed! 😤✨");
        document.getElementById('finish-game-btn').style.display = 'block';
        scoreDisplay.parentElement.innerHTML = "<b>Challenge Complete! 🎊</b>";
    } else {
        moveHeart();
    }
});

function moveHeart() {
    const maxX = gameArea.clientWidth - gameHeart.clientWidth - 20;
    const maxY = gameArea.clientHeight - gameHeart.clientHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    gameHeart.style.left = `${x}px`;
    gameHeart.style.top = `${y}px`;
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    moveHeart();
}

// Auto-move heart if they are too slow (to make it funny)
setInterval(() => {
    if (document.getElementById('game-section').style.display === 'flex' && score < 5) {
        moveHeart();
    }
}, 1500);

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

// New Admin & Message Logic
const ADMIN_KEY = "admin123";

function showNewLetter() {
    hideAllSections();
    document.getElementById('new-letter-section').style.display = 'block';
    createHearts();
}

function showMessageBox() {
    hideAllSections();
    document.getElementById('msg-submission-section').style.display = 'block';
    createHearts();
}

function hideAllSections() {
    const ids = ['lock-screen', 'main-content', 'reasons-section', 'happiness-section', 'game-section', 'new-letter-section', 'msg-submission-section', 'admin-login-section', 'admin-dashboard-section'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function hideAllAndShowMain() {
    hideAllSections();
    document.getElementById('main-content').style.display = 'block';
}

function submitMessage() {
    const msgInput = document.getElementById('user-message');
    const msg = msgInput.value.trim();
    const btn = document.querySelector('#msg-submission-section .btn-primary');
    const successMsg = document.getElementById('msg-success');

    if (!msg) {
        alert("Please write something! 🥺");
        return;
    }

    // Show loading state
    const originalBtnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Sending... 💌";

    // 1. Send via Email (FormSubmit.co - reliable and no account needed)
    fetch("https://formsubmit.co/ajax/anushkabh2426@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            message: msg,
            _subject: "New Message from your Bestie! 🤍",
            _captcha: "false"
        })
    })
        .then(response => response.json())
        .then(data => {
            // 2. Save to Local Storage
            const messages = JSON.parse(localStorage.getItem('user_messages') || '[]');
            messages.push({
                text: msg,
                date: new Date().toLocaleString(),
                id: Date.now()
            });
            localStorage.setItem('user_messages', JSON.stringify(messages));

            // UI Success
            msgInput.value = '';
            successMsg.style.display = 'block';
            createHearts();
            alert("Message sent! I'll read it soon. 🤍");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Saved to your local Admin Dashboard! 🩹 (Email might be delayed)");

            // Save locally anyway as fallback
            const messages = JSON.parse(localStorage.getItem('user_messages') || '[]');
            messages.push({
                text: msg,
                date: new Date().toLocaleString(),
                id: Date.now()
            });
            localStorage.setItem('user_messages', JSON.stringify(messages));
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = originalBtnText;
        });
}

function showAdminLogin() {
    hideAllSections();
    document.getElementById('admin-login-section').style.display = 'block';
    document.getElementById('admin-password').value = '';
}

function hideAdmin() {
    document.getElementById('admin-login-section').style.display = 'none';
    document.getElementById('admin-dashboard-section').style.display = 'none';

    // Check if we were already logged in (password check)
    if (localStorage.getItem('letter_unlocked') === 'true') {
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('lock-screen').style.display = 'block';
    }
}

function checkAdminPassword() {
    const pass = document.getElementById('admin-password').value;
    const error = document.getElementById('admin-error-msg');

    if (pass === ADMIN_KEY) {
        document.getElementById('admin-login-section').style.display = 'none';
        document.getElementById('admin-dashboard-section').style.display = 'flex';
        loadMessages();
    } else {
        error.style.display = 'block';
        setTimeout(() => error.style.display = 'none', 2000);
    }
}

function loadMessages() {
    const list = document.getElementById('admin-messages-list');
    const messages = JSON.parse(localStorage.getItem('user_messages') || '[]');

    list.innerHTML = '';

    if (messages.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #888;">No messages yet. 🕊️</p>';
        return;
    }

    messages.reverse().forEach(msg => {
        const item = document.createElement('div');
        item.className = 'admin-msg-item';
        item.innerHTML = `
            <span class="admin-msg-date">${msg.date}</span>
            <div class="admin-msg-text">${msg.text}</div>
        `;
        list.appendChild(item);
    });
}

function clearMessages() {
    if (confirm("Are you sure you want to delete all messages? 🗑️")) {
        localStorage.removeItem('user_messages');
        loadMessages();
    }
}
