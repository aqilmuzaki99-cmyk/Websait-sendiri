const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const questionCard = document.getElementById("questionCard");
const successCard = document.getElementById("successCard");
const confettiContainer = document.getElementById("confetti");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const hearts = ["💗", "💕", "💖", "💓", "💞", "💘", "❤️"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    heart.style.animationDuration = 4 + Math.random() * 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

function moveNoButton() {
    const maxX = window.innerWidth - noButton.offsetWidth - 30;
    const maxY = window.innerHeight - noButton.offsetHeight - 30;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);
noButton.addEventListener("click", moveNoButton);

yesButton.addEventListener("click", () => {
    questionCard.style.display = "none";
    successCard.style.display = "block";

    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");

        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 1.5 + "s";
        confetti.style.width = 5 + Math.random() * 8 + "px";
        confetti.style.height = 5 + Math.random() * 8 + "px";
        confetti.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
