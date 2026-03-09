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
    "You're the person I'd choose to be stranded on an island with.",
    "The way you can tell I'm upset just from a single 'hey'.",
    "Your ability to make me laugh even when I'm trying to be serious.",
    "The way you never judge me for my weird 3 AM cravings.",
    "How you always remember to ask about that one thing I mentioned weeks ago.",
    "The way you defend me when I'm not even there to hear it.",
    "Your patience when I'm over-explaining something simple.",
    "The way you make the most boring car rides feel like a road trip adventure.",
    "How you never fail to send me a meme that perfectly matches my mood.",
    "The way you look when you're genuinely excited about something you love.",
    "Your ability to stay calm when everything around us is chaotic.",
    "The way you always make sure I've eaten even when you're busy.",
    "How you never make me feel guilty for needing 'me time'.",
    "The way you listen to my long rants without ever checking your phone.",
    "Your honesty, even when it's something I might not want to hear but need to.",
    "The way you literally leave everything just to be there for me.",
    "How you always notice if I've changed something small about my outfit.",
    "The way you handle my dramatic moments with so much grace.",
    "Your incredible sense of loyalty that makes me feel so secure.",
    "The way you always walk on the outside of the sidewalk to protect me.",
    "How you never make fun of my niche interests or hobbies.",
    "The way you always include me in your future plans.",
    "Your willingness to try new things just because I'm interested in them.",
    "The way you always text 'home safe?' after we meet.",
    "How you remember exactly how I like my coffee/tea.",
    "The way you can finish my sentences when we've been talking for too long.",
    "Your ability to forgive and move on without holding grudges.",
    "The way you celebrate my tiny wins like they're huge achievements.",
    "How you never let me go to sleep feeling like I've upset you.",
    "The way you always find the silver lining in my bad days.",
    "Your dedication to your goals, which inspires me to work harder.",
    "The way you share your favorite music with me, even the 'guilty pleasures'.",
    "How you always make me feel like the most important person in the room.",
    "The way you respect my parents and family.",
    "Your ability to admit when you're wrong without an ego.",
    "The way you give the best hugs that make all my worries disappear.",
    "How you always have my back, no matter what the situation is.",
    "The way you genuinely care about my mental health.",
    "Your curiosity about the world that makes our conversations so deep.",
    "The way you never take our friendship for granted.",
    "How you always find a way to make me smile when I'm stressed.",
    "The way you talk about your dreams with so much passion.",
    "Your kindness towards strangers and animals.",
    "The way you never compare our friendship to anyone else's.",
    "How you always know the right thing to say to calm my anxiety.",
    "The way you look when you're sleepily saying 'good morning'.",
    "Your consistency—you've been the same amazing person since day one.",
    "The way you never make me feel like I'm 'too much' to handle.",
    "How you always support my crazy ideas, even if they're a bit unrealistic.",
    "The way you keep all our inside jokes alive for years.",
    "Your ability to make 'doing nothing' feel like the best time ever.",
    "The way you always apologize first just to keep the peace.",
    "How you never judge my Spotify Wrapped, no matter how chaotic it is.",
    "The way you always notice when my social battery is running low.",
    "Your willingness to learn about things I'm passionate about.",
    "The way you protect my secrets as if they were your own.",
    "How you always make sure I'm comfortable in any social setting.",
    "The way you look when you're focused on a game you're winning.",
    "Your habit of checking up on me when you know I'm sick.",
    "The way you never make me feel like an afterthought.",
    "How you always help me organize my thoughts when I'm overwhelmed.",
    "The way you remember the names of my childhood friends I mentioned once.",
    "Your ability to make me feel safe in my own skin.",
    "The way you never pressure me into doing things I'm not ready for.",
    "How you always find the perfect gift that isn't even about the price.",
    "The way you value my opinion on the big decisions in your life.",
    "Your sense of humor that only I truly 'get'.",
    "The way you look at me when you're about to tell a secret.",
    "How you always make my problems feel like our problems.",
    "The way you never bring up my past mistakes during an argument.",
    "Your strength of character that I admire so much.",
    "The way you handle disappointment with such maturity.",
    "How you always remind me of my worth when I start doubting myself.",
    "The way you share your food with me without me even asking.",
    "Your ability to make me feel seen when I feel invisible to the world.",
    "The way you never walk too fast and always wait for me to catch up.",
    "How you always remember the dates that are important to me.",
    "The way you listen to the same stories over and over without complaining.",
    "Your patience when I'm being stubborn and difficult.",
    "The way you always make sure my phone is charged or I have a charger.",
    "How you never make me feel 'stupid' for not knowing something.",
    "The way you celebrate 'friendship anniversaries' with so much heart.",
    "Your ability to turn a bad mood around with just one funny face.",
    "The way you always defend my choices to other people.",
    "How you never let a day go by without checking in on me.",
    "The way you look when you're trying to hide a smile.",
    "Your bravery in sticking to your values even when it's hard.",
    "The way you always make room for me, literally and figuratively.",
    "How you never make me feel like I have to change to fit in with you.",
    "The way you've become a part of my family as much as my own.",
    "Your habit of sending me songs that remind you of me.",
    "The way you always notice when I'm trying my best.",
    "How you never make me feel like a burden when I need help.",
    "The way you look when you're genuinely surprised by something nice I do.",
    "Your ability to stay humble despite all your talents.",
    "The way you always find time for me, no matter how busy you are.",
    "How you never make me feel guilty for my success.",
    "The way you listen more than you speak when I'm hurt.",
    "Your commitment to being honest with me even when it's uncomfortable.",
    "The way you always make sure I feel like a priority.",
    "How you've taught me what real friendship actually looks like.",
    "The way you handle my overthinking with so much logic and kindness.",
    "Your ability to keep our relationship private but still special.",
    "The way you always show up when it matters most.",
    "How you never make fun of my 'uncool' habits.",
    "The way you look when you're laughing so hard you can't breathe.",
    "Your willingness to admit your flaws and work on them.",
    "The way you always encourage me to stand up for myself.",
    "How you never let anyone speak poorly of me in your presence.",
    "The way you remember my favorite childhood snacks.",
    "Your ability to make me feel like anything is possible.",
    "The way you always respect my silence when I don't want to talk.",
    "How you never make me feel like I'm competing for your attention.",
    "The way you look when you're trying to learn something new.",
    "Your habit of always saying 'thank you' for the little things.",
    "The way you never make me feel like I'm a second choice.",
    "How you always help me see the bigger picture when I'm stuck.",
    "The way you value our 'no-phone' time when we're hanging out.",
    "Your ability to make a rainy day feel cozy instead of gloomy.",
    "The way you always make sure I'm included in group photos.",
    "How you never make me feel like I'm asking for too much affection.",
    "The way you look when you're telling a story you're really into.",
    "Your dedication to keeping our friendship 'low maintenance' but high value.",
    "The way you always know when I need a digital detox.",
    "How you never hold it against me when I'm being grumpy.",
    "The way you always find a way to make things fun.",
    "Your belief in my potential, even when I don't see it.",
    "The way you always apologize if you think you've hurt my feelings.",
    "How you never make me feel like I'm 'too sensitive'.",
    "The way you look when you're deep in thought.",
    "Your habit of always double-checking if I need anything before you leave.",
    "The way you never make me feel like our friendship is a chore.",
    "How you always support my need for adventure.",
    "The way you look at the stars with so much wonder.",
    "Your ability to take a joke even when it's at your expense.",
    "The way you always make sure I feel safe when we're out late.",
    "How you never make me feel like I have to perform around you.",
    "The way you've seen my worst side and still chose to stay.",
    "Your consistency in showing up, even when things get hard.",
    "The way you always find the right words for my 'unsayable' feelings.",
    "How you never make me feel like I'm being dramatic about my pain.",
    "The way you look when you're trying to be serious but I make you laugh.",
    "Your ability to make me feel proud of who I am.",
    "The way you always remember the specific things that make me happy.",
    "How you never make me feel like I'm a 'burden' for venting.",
    "The way you always check the menu for things I'd like before we order.",
    "Your habit of sending me motivational quotes when you know I have a big day.",
    "The way you never let a misunderstanding turn into a real fight.",
    "How you always make sure I'm not overworking myself.",
    "The way you look when you're doing something kind for someone else.",
    "Your ability to make me feel like I'm 'home' whenever we're together.",
    "The way you always defend my boundaries to others.",
    "How you never make me feel like I'm 'boring' for wanting to stay in.",
    "The way you always notice when I'm being too self-critical.",
    "Your willingness to listen to my 'conspiracy theories' about life.",
    "The way you always help me find my keys (and my sanity).",
    "How you never make me feel like I'm 'trailing behind' in life.",
    "The way you look when you're listening to your favorite song.",
    "Your habit of always calling me just to say 'hi'.",
    "The way you never make me feel like I'm 'replacement' for someone else.",
    "How you always celebrate the version of me I'm becoming.",
    "The way you look when you're genuinely curious about my day.",
    "Your ability to make me feel like I'm a good person.",
    "The way you always remember to ask about my work/projects.",
    "How you never make me feel like I'm 'weird' for my emotional reactions.",
    "The way you always find a reason to be proud of us.",
    "Your dedication to making sure our friendship is a safe space.",
    "The way you always notice when I need a compliment.",
    "How you never make me feel like our friendship is transactional.",
    "The way you look when you're trying to solve a difficult problem.",
    "Your habit of always being on my side, even when I'm slightly wrong.",
    "The way you never make me feel like I'm a 'temporary' fix.",
    "How you always support my journey of self-discovery.",
    "The way you look when you're genuinely happy for me.",
    "Your ability to make me feel like I'm the smartest person you know.",
    "The way you always remember the things I'm insecure about and protect them.",
    "How you never make me feel like I'm 'too much' for your schedule.",
    "The way you always find a way to make me laugh when I'm crying.",
    "Your habit of always texting me back, even if it's just an emoji to say you're busy.",
    "The way you never make me feel like I'm a 'charity case'.",
    "How you always encourage me to speak my truth.",
    "The way you look when you're proud of something you've done.",
    "Your ability to make me feel like my feelings are valid.",
    "The way you always remember to include me in the 'big news'.",
    "How you never make me feel like I'm a 'distraction' from your work.",
    "The way you always celebrate my existence, not just my achievements.",
    "Your habit of always being the first to congratulate me.",
    "The way you never make me feel like I'm 'losing' at life.",
    "How you always help me find the 'funny' in a bad situation.",
    "The way you look when you're daydreaming.",
    "Your ability to make me feel like I'm worth the effort.",
    "The way you always remember the name of my favorite childhood pet.",
    "How you never make me feel like I'm 'too loud' or 'too quiet'.",
    "The way you always find a reason to call me.",
    "Your dedication to making sure I'm always okay.",
    "The way you always notice when I've achieved a personal goal.",
    "How you never make me feel like our friendship is 'work'.",
    "The way you look when you're genuinely interested in a new topic.",
    "Your habit of always checking in on me when you know I'm lonely.",
    "The way you never make me feel like I'm a 'burden' on your time.",
    "How you always support my need for change.",
    "The way you look when you're inspired by something.",
    "Your ability to make me feel like I'm important to your world.",
    "The way you always remember to send me 'good luck' texts.",
    "How you never make me feel like I'm 'extra' for my emotions.",
    "The way you always find a reason to smile at me.",
    "Your habit of always making sure I'm the first to know your secrets.",
    "The way you never make me feel like I'm a 'side character' in our friendship.",
    "How you always celebrate my growth, no matter how small.",
    "The way you look when you're excited for a trip or a plan.",
    "Your ability to make me feel like I'm part of something special.",
    "The way you always remember to ask how my 'stressful' thing went.",
    "How you never make me feel like I'm 'overreacting' to life.",
    "The way you always find a reason to be kind to me.",
    "Your habit of always being there to catch me when I fall.",
    "The way you never make me feel like I'm 'alone' in this world.",
    "How you always celebrate the fact that we're friends.",
    "The way you look when you're happy to see me.",
    "Your ability to make me feel like I'm enough, just as I am.",
    "The way you always remember the little things that make me feel safe.",
    "How you never make me feel like our friendship is 'temporary'.",
    "The way you always find a reason to trust me with your heart.",
    "Your habit of always being my 'person'.",
    "The way you never make me feel like I'm 'unseen' by you.",
    "How you always celebrate the way we've grown together.",
    "The way you look when you're saying 'I'm proud of you'.",
    "Your ability to make me feel like I'm a better version of myself when I'm with you.",
    "The way you always remember to ask about my health and well-being.",
    "How you never make me feel like I'm 'too much' for our future.",
    "The way you always find a reason to believe in me.",
    "Your habit of always making sure I'm okay before you worry about yourself.",
    "The way you never make me feel like I'm 'forgettables'.",
    "How you always celebrate the unique connection we share.",
    "The way you look when you're telling me everything will be okay.",
    "Your ability to make me feel like I'm a miracle in your life.",
    "The way you always remember the details of our 'firsts'.",
    "How you never make me feel like I'm 'unimportant' to your day.",
    "The way you always find a reason to love our friendship.",
    "Your habit of always being my anchor in a storm.",
    "The way you never make me feel like I'm 'replaceable' by anyone.",
    "How you always celebrate the small moments that make us 'us'.",
    "The way you look when you're simply happy to be alive.",
    "Your ability to make me feel like I'm have a purpose.",
    "The way you always remember to ask about my family's well-being.",
    "How you never make me feel like I'm 'falling behind' on our friendship.",
    "The way you always find a reason to be grateful for me.",
    "Your habit of always being the source of my strength.",
    "The way you never make me feel like I'm 'unlovable' for my flaws.",
    "How you always celebrate the way we handle our differences.",
    "The way you look when you're genuinely enjoying our silence.",
    "Your ability to make me feel like I'm a legend in your eyes.",
    "The way you always remember to check if I'm surviving my 'hard weeks'.",
    "How you never make me feel like I'm 'too heavy' for your support.",
    "The way you always find a reason to stay.",
    "Your habit of always being my home.",
    "The way you never make me feel like I'm 'disconnected' from you.",
    "How you always celebrate the way we make each other laugh.",
    "The way you look when you're looking at a sunset and thinking of me.",
    "Your ability to make me feel like I'm a treasure you've found.",
    "The way you always remember the things that made us best friends.",
    "How you never make me feel like I'm 'another person' on your list.",
    "The way you always find a reason to be proud of our bond.",
    "Your habit of always being the first person I want to talk to.",
    "The way you never make me feel like I'm 'not enough' for your life.",
    "How you always celebrate the way we've navigated the hard times.",
    "The way you look when you're saying 'I've got your back'.",
    "Your ability to make me feel like I'm a powerhouse with you by my side.",
    "The way you always remember the specific ways I like to be cheered up.",
    "How you never make me feel like I'm 'too complicated' to understand.",
    "The way you always find a reason to be patient with my heart.",
    "Your habit of always making me feel like I'm your 'first priority'.",
    "The way you never make me feel like I'm 'too much' to love.",
    "How you always celebrate the person I'm becoming today.",
    "The way you look when you're truly content.",
    "Your ability to make me feel like I'm the best version of a human.",
    "The way you always remember to text me 'goodnight' even when you're tired.",
    "How you never make me feel like I'm 'not worth' the argument.",
    "The way you always find a reason to make me feel special.",
    "Your habit of always being there to celebrate my milestones.",
    "The way you never make me feel like I'm 'too emotional' for you.",
    "How you always celebrate the simplicity of our friendship.",
    "The way you look when you're laughing at a silly joke I made.",
    "Your ability to make me feel like I'm light in your world.",
    "The way you always remember to ask about my dreams for the future.",
    "How you never make me feel like I'm 'too ambitious' for our reality.",
    "The way you always find a reason to stay consistent in my life.",
    "Your habit of always being my safest haven.",
    "The way you never make me feel like I'm 'losing' my spark.",
    "How you always celebrate the way we see the world similarly.",
    "The way you look when you're genuinely interested in my rambling.",
    "Your ability to make me feel like I'm a genius for just being myself.",
    "The way you always remember to send me memes when you're away.",
    "How you never make me feel like I'm 'too quiet' when I'm processing.",
    "The way you always find a reason to be kind even when you're stressed.",
    "Your habit of always making sure I'm part of your inner circle.",
    "The way you never make me feel like I'm 'too busy' for your time.",
    "How you always celebrate the small details of my personality.",
    "The way you look when you're concentrated on making me happy.",
    "Your ability to make me feel like I'm a gift you never expected.",
    "The way you always remember to check if I've reached my goals.",
    "How you never make me feel like I'm 'too much' of a dreamer.",
    "The way you always find a reason to keep our traditions alive.",
    "Your habit of always being my partner in everything.",
    "The way you never make me feel like I'm 'too' anything.",
    "How you always celebrate the way we've stayed together through it all.",
    "The way you look when you're just being you—and that's the best part.",
    "Your ability to make me feel like I'm the one who makes your day.",
    "The way you always remember to ask 'how are you really feeling?'.",
    "How you never make me feel like I'm 'not understood'.",
    "The way you always find a reason to be my best friend.",
    "Your habit of always making sure I feel like a superstar in your story.",
    "The way you never make me feel like I'm 'not important'.",
    "How you always celebrate the way we've stayed true to ourselves.",
    "The way you look when you're telling me you love our friendship.",
    "Your ability to make me feel like I'm a miracle to you.",
    "The way you always remember the things that make me 'me'.",
    "How you never make me feel like I'm 'too far' from your heart.",
    "The way you always find a reason to love me as a friend.",
    "Your habit of always being the highlight of my day.",
    "The way you never make me feel like I'm 'unwanted' in your life.",
    "How you always celebrate the way we make each other better.",
    "The way you look when you're simply happy to have me around.",
    "Your ability to make me feel like I'm a blessing you cherish.",
    "The way you always remember to ask about my small daily highlights.",
    "How you never make me feel like I'm 'not enough' for our bond.",
    "The way you always find a reason to trust me with everything.",
    "Your habit of always being my most favorite human.",
    "The way you never make me feel like I'm 'unseen' by your soul.",
    "How you always celebrate the way we've grown up together.",
    "The way you look when you're saying 'thank you for being there'.",
    "Your ability to make me feel like I'm a legend in your lifetime.",
    "The way you always remember to check if I'm happy with my life.",
    "How you never make me feel like I'm 'too heavy' for your heart.",
    "The way you always find a reason to be here for me, always.",
    "The way you handle my bad moods with such a calm energy.",
    "Your ability to make me feel like I'm the only one who matters in a crowd.",
    "How you never let me go a day without feeling appreciated.",
    "The way you remember the names of my favorite songs.",
    "Your habit of always texting me first in the morning.",
    "The way you look when you're trying to figure out how to help me.",
    "How you never make me feel like I'm 'too much' for your life.",
    "The way you always find the silver lining in every disaster.",
    "Your ability to make me feel like I'm a superstar.",
    "How you never judge my strange internet history.",
    "The way you always listen to my long stories about my day.",
    "Your habit of always being on my side.",
    "The way you look when you're genuinely proud of me.",
    "How you never make me feel like I'm a second option.",
    "The way you always find a reason to stay in our friendship.",
    "Your ability to make me feel like I'm home.",
    "How you never make me feel like I'm a burden when I'm sad.",
    "The way you always remember the dates that mean something to us.",
    "Your habit of always double-checking if I'm okay.",
    "The way you look when you're laughing at my stupid jokes.",
    "How you never judging my weird habits.",
    "The way you always find a way to make things work.",
    "Your ability to make me feel like I'm the most special friend.",
    "How you never make me feel like I'm an afterthought.",
    "The way you always notice the little things I do for you.",
    "Your habit of always making me feel included.",
    "The way you look when you're passionate about a game.",
    "How you never make me feel like I'm too sensitive.",
    "The way you always find a reason to be kind.",
    "Your ability to make me feel like I can conquer anything.",
    "How you never take our friendship for granted.",
    "The way you always remember to send me 'safety' texts.",
    "Your habit of always being honest with me.",
    "The way you look when you're just being yourself.",
    "How you never make me feel like I have to change.",
    "The way you always find a reason to love our time together.",
    "Your ability to make me feel like I'm a miracle.",
    "How you never make me feel like I'm a mistake.",
    "The way you always find a reason to stay around.",
    "Your habit of always being the source of my joy.",
    "The way you look when you're simply happy to see me.",
    "How you never let me feel like I'm alone.",
    "The way you always find a way to make me smile.",
    "Your ability to make me feel like I'm enough.",
    "How you never make me feel like I'm asking for too much.",
    "The way you always remember to celebrate my birthday like it's a holiday.",
    "Your habit of always being my anchor.",
    "The way you look when you're telling me everything will be fine.",
    "How you never make me feel like I'm a side character.",
    "The way you always find a reason to believe in me.",
    "Your ability to make me feel like I'm a star.",
    "How you never make me feel like I'm not loved.",
    "The way you always find a reason to be my best friend.",
    "Your habit of always being there to catch me when I fall.",
    "The way you look when you're genuinely happy for my success.",
    "How you never make me feel like I'm a distraction.",
    "The way you always find a reason to celebrate us.",
    "Your ability to make me feel like I'm the best version of me.",
    "How you never make me feel like I'm too much to handle.",
    "The way you always remember the things that make me happy.",
    "Your habit of always being the highlight of my week.",
    "The way you look when you're daydreaming about our plans.",
    "How you never make me feel like I'm boring.",
    "The way you always find a reason to be proud of our bond.",
    "Your ability to make me feel like I'm a treasure.",
    "How you never make me feel like I'm a tool.",
    "The way you always find a reason to partner with me.",
    "Your habit of always being the one I can trust.",
    "The way you look when you're thinking of a way to surprise me.",
    "How you never make me feel like I'm a used friend.",
    "The way you always find a reason to love our chaos.",
    "Your ability to make me feel like I'm a light.",
    "How you never make me feel like I'm a secret.",
    "The way you always find a reason to show me off.",
    "Your habit of always being the one who makes it all okay.",
    "The way you look when you're saying 'forever'.",
    "How you never make me feel like I'm a regret.",
    "The way you always find a reason to be proud of me.",
    "Your ability to make me feel like I'm a find.",
    "How you never make me feel like I'm a loss.",
    "The way you always find a reason to stay here.",
    "Your habit of always being my home.",
    "The way you look when you're saying 'goodnight'.",
    "How you never let me go a day without feeling valued.",
    "The way you always find a reason to be there for me.",
    "Your ability to make me feel like I'm worth the world.",
    "How you never make me feel like I'm a ghost.",
    "The way you always find a reason to listen to me.",
    "Your habit of always being my person.",
    "The way you look when you're happy for me.",
    "How you never make me feel like I'm not enough.",
    "The way you always find a reason to be my world.",
    "Your ability to make me feel like I'm a legend.",
    "How you never make me feel like I'm a memory.",
    "The way you always find a reason to be my future.",
    "Your habit of always being my best.",
    "The way you look when you're just happy.",
    "How you never let me feel like I'm a past.",
    "The way you always find a reason to be my now.",
    "Your ability to make me feel like I'm everything.",
    "How you never make me feel like I'm a maybe.",
    "The way you always find a reason to say yes to our plans.",
    "Your habit of always being my only.",
    "The way you look when you're saying 'I care'.",
    "How you never let me feel like I'm a shadow.",
    "The way you always find a reason to shine with me.",
    "Your ability to make me feel like I'm a voice.",
    "How you never make me feel like I'm a bother.",
    "The way you always find a reason to choose me.",
    "Your habit of always being my miracle.",
    "The way you look when you're just you.",
    "How you never let me feel like I'm a nobody.",
    "The way you always find a reason to be my favorite.",
    "Your ability to make me feel like I'm a blessing.",
    "How you never make me feel like I'm a mistake in your life.",
    "The way you always find a reason to be my happiness.",
    "Your habit of always being the one.",
    "The way you look when you're saying 'I'm here for you'.",
    "How you never let me feel like I'm a nothing.",
    "The way you always find a reason to be my heart.",
    "Your ability to make me feel like I'm alive.",
    "How you never make me feel like I'm a secret to keep.",
    "The way you always find a reason to be my everything.",
    "Your habit of always being my light.",
    "The way you look when you're just happy to be alive with me.",
    "How you never let me feel like I'm a choice.",
    "The way you always find a reason to be my necessity.",
    "Your ability to make me feel like I'm your best friend forever.",
    "How you never make me feel like I'm a stranger.",
    "The way you always find a reason to be my family.",
    "Your habit of always being my home forever.",
    "The way you look when you're saying 'I love you bestie'.",
    "How you never let me go without a smile.",
    "The way you always find a reason to be the best part of my life.",
    "Your ability to make me feel like I'm simply the luckiest person to have you.",
    "How you never make me feel like anything less than perfect.",
    "The way you always find a reason to stay in our story.",
    "Your habit of always being you—because you're perfect.",
    "Final reason: Because there's simply nobody else in the world like you."
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
        score = 0;
        scoreDisplay.textContent = score;
        backToLetter(); // Go back or to a final celebration? Let's go back to letter for now.
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
