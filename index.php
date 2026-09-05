<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["jawaban"])) {
    $jawaban = htmlspecialchars($_POST["jawaban"], ENT_QUOTES, "UTF-8");
    $waktu = date("Y-m-d H:i:s");

    $data = "Jawaban: $jawaban | Waktu: $waktu" . PHP_EOL;

    file_put_contents(
        "jawaban.txt",
        $data,
        FILE_APPEND | LOCK_EX
    );

    echo "OK";
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Pesan Untukmu 💌</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <!-- =========================
         STIKER ANIMASI
    ========================== -->

    <div class="sticker sticker1">💗</div>
    <div class="sticker sticker2">🌸</div>
    <div class="sticker sticker3">💕</div>
    <div class="sticker sticker4">✨</div>
    <div class="sticker sticker5">🦋</div>
    <div class="sticker sticker6">💖</div>

    <!-- HATI BERTERBANG -->

    <div class="hearts"></div>


    <!-- =========================
         BACKSOUND
    ========================== -->

    <audio id="backgroundMusic" loop>

        <source
            src="backsound.mp3"
            type="audio/mpeg"
        >

    </audio>


    <main class="container">

        <!-- =========================
             HALAMAN UTAMA
        ========================== -->

        <div class="card" id="mainCard">

            <div class="envelope">
                💌
            </div>

            <h1>
                Hai Kamu 👋
            </h1>

            <p class="subtitle">
                Ada sesuatu yang ingin aku sampaikan...
            </p>


            <div class="message">

                <p>
                    Sebenarnya ada sesuatu yang
                    sudah lama ingin aku sampaikan.
                </p>

                <p>
                    Terima kasih sudah mau membuka
                    pesan kecil ini. 🌸
                </p>

                <p class="question">
                    Kamu mau gak menjadi
                    orang spesial buatku? 💗
                </p>

            </div>


            <div class="buttons">

                <button
                    id="yesBtn"
                    class="yes-btn"
                >
                    Mau / Iya 💗
                </button>


                <button
                    id="noBtn"
                    class="no-btn"
                >
                    Gak / Enggak 😭
                </button>

            </div>


            <!-- Tombol musik -->

            <button
                id="musicBtn"
                class="music-btn"
            >
                🎵 Nyalakan Musik
            </button>


            <p class="hint">
                Jawab dengan jujur ya 😊
            </p>

        </div>


        <!-- =========================
             HALAMAN BERHASIL
        ========================== -->

        <div
            class="card success-card"
            id="successCard"
        >

            <div class="big-heart">
                💖
            </div>

            <h1>
                Yeay! 🎉
            </h1>

            <p>
                Terima kasih sudah menjawab.
            </p>

            <p class="success-message">

                Semoga pesan kecil ini bisa
                membuat harimu sedikit lebih
                menyenangkan. ✨

            </p>


            <div class="success-stickers">

                💕 🌸 💖 ✨ 🦋 💗

            </div>


            <button
                class="back-btn"
                onclick="location.reload()"
            >
                Kembali ↩️
            </button>

        </div>

    </main>


    <script src="script.js"></script>

</body>

</html>