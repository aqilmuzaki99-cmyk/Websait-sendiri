const startButton = document.getElementById("startButton");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const finalMessage = document.getElementById("finalMessage");
const answerBox = document.getElementById("answerBox");

const confettiContainer = document.getElementById("confetti");

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");
const musicStatus = document.getElementById("musicStatus");
const volumeControl = document.getElementById("volumeControl");

const memoryMessage = document.getElementById("memoryMessage");


startButton.addEventListener("click", () => {

    document.getElementById("final").scrollIntoView({
        behavior: "smooth"
    });

});


music.volume = 0.7;


function updateMusicButton() {

    if (music.paused) {

        musicButton.textContent = "▶";
        musicStatus.textContent = "Klik untuk memutar";

    } else {

        musicButton.textContent = "❚❚";
        musicStatus.textContent = "Sedang diputar ♫";

    }

}


musicButton.addEventListener("click", async () => {

    try {

        if (music.paused) {

            await music.play();

            updateMusicButton();

        } else {

            music.pause();

            updateMusicButton();

        }

    } catch (error) {

        console.error("Gagal memutar musik:", error);

        musicStatus.textContent =
            "Musik tidak dapat diputar";

    }

});


volumeControl.addEventListener("input", () => {

    music.volume = volumeControl.value;

});


music.addEventListener("play", () => {

    updateMusicButton();

});


music.addEventListener("pause", () => {

    updateMusicButton();

});


music.addEventListener("error", () => {

    musicButton.textContent = "⚠";

    musicStatus.textContent =
        "File lagu tidak ditemukan";

});


document.querySelectorAll(".reason-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});


document.querySelectorAll(".memory-card").forEach(card => {

    card.addEventListener("click", () => {

        memoryMessage.textContent =
            card.dataset.message;

        memoryMessage.classList.remove("show");

        setTimeout(() => {

            memoryMessage.classList.add("show");

        }, 50);

    });

});


function moveNoButton() {

    const container =
        document.querySelector(".final-buttons");

    const maxX = Math.max(
        100,
        container.clientWidth - noButton.offsetWidth
    );

    const x =
        Math.random() * maxX - maxX / 2;

    noButton.style.position = "relative";

    noButton.style.left =
        x + "px";

}


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        moveNoButton();

    }
);


function saveAnswer(answer) {

    const waktu =
        new Date().toLocaleString("id-ID");

    const isiJawaban =
        "================================\n" +
        "          JAWABAN CONFESS\n" +
        "================================\n\n" +
        "Jawaban : " +
        answer +
        "\n" +
        "Waktu   : " +
        waktu +
        "\n\n" +
        "================================\n";

    localStorage.setItem(
        "jawaban_confess",
        isiJawaban
    );

    const file =
        new Blob(
            [isiJawaban],
            {
                type: "text/plain;charset=utf-8"
            }
        );

    const link =
        document.createElement("a");

    const url =
        URL.createObjectURL(file);

    link.href = url;

    link.download =
        "jawaban.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setTimeout(() => {

        URL.revokeObjectURL(url);

    }, 1000);


    answerBox.textContent =
        "Jawaban kamu: " + answer;

    answerBox.classList.remove("show");

    setTimeout(() => {

        answerBox.classList.add("show");

    }, 50);

}


yesButton.addEventListener("click", () => {

    const jawaban =
        "Mau! 💗";

    finalMessage.textContent =
        "Yeyyy! ♡ Terima kasih sudah membuka halaman ini 💗";

    saveAnswer(jawaban);

    createConfetti();

    yesButton.style.transform =
        "scale(1.08)";

    setTimeout(() => {

        yesButton.style.transform =
            "";

    }, 500);

});


noButton.addEventListener("click", event => {

    event.preventDefault();

    const jawaban =
        "Pikir-pikir Dulu";

    saveAnswer(jawaban);

    moveNoButton();

});


function createConfetti() {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "❀"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            10 +
            Math.random() * 18 +
            "px";

        confetti.style.animationDelay =
            Math.random() * 1.5 +
            "s";

        confettiContainer.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


function createStars() {

    const container =
        document.querySelector(".stars");

    for (let i = 0; i < 60; i++) {

        const star =
            document.createElement("div");

        star.className =
            "star";

        star.textContent =
            "✦";

        star.style.left =
            Math.random() * 100 +
            "vw";

        star.style.top =
            Math.random() * 100 +
            "vh";

        star.style.fontSize =
            4 +
            Math.random() * 10 +
            "px";

        star.style.animationDelay =
            Math.random() * 4 +
            "s";

        star.style.animationDuration =
            2 +
            Math.random() * 4 +
            "s";

        container.appendChild(star);

    }

}


function createPetal() {

    const container =
        document.querySelector(".petals");

    const petal =
        document.createElement("div");

    const symbols = [
        "🌸",
        "❀",
        "♡",
        "✿"
    ];

    petal.className =
        "petal";

    petal.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    petal.style.left =
        Math.random() * 100 +
        "vw";

    petal.style.fontSize =
        10 +
        Math.random() * 18 +
        "px";

    petal.style.animationDuration =
        5 +
        Math.random() * 7 +
        "s";

    container.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 13000);

}


function createGoldDots() {

    const container =
        document.querySelector(".gold-dots");

    for (let i = 0; i < 35; i++) {

        const dot =
            document.createElement("div");

        dot.className =
            "gold-dot";

        dot.style.left =
            Math.random() * 100 +
            "vw";

        dot.style.top =
            Math.random() * 100 +
            "vh";

        dot.style.animationDelay =
            Math.random() * 5 +
            "s";

        container.appendChild(dot);

    }

}


createStars();

createGoldDots();

setInterval(
    createPetal,
    900
);

updateMusicButton();
