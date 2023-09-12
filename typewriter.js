// typewriter.js
const initialText = "#DariJogjaUntukDunia";
const delay = 100; // Delay dalam milidetik (ms)
const textElement = document.getElementById("typewriter-text");

function typeWriter(text, charIndex) {
    if (charIndex < text.length) {
        textElement.innerHTML = text.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(function () {
            typeWriter(text, charIndex);
        }, delay);
    } else {
        setTimeout(function () {
            typeWriter(initialText, 0);
        }, 1000); // Tunggu selama 1 detik sebelum mulai ulang
    }
}

// Panggil fungsi typewriter untuk pertama kali
typeWriter(initialText, 0);
