// Animasi teks muncul pelan
document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".content");
  content.style.opacity = "0";
  content.style.transform = "translateY(30px)";

  setTimeout(() => {
    content.style.transition = "all 1s ease";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 300);
});

// Efek klik tombol
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.style.transform = "scale(0.9)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 150);
});

// Confetti sederhana 🎊
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.backgroundColor = ["#ff5e78", "#ffd700", "#87cefa", "#98fb98"][
    Math.floor(Math.random() * 4)
  ];

  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

setInterval(createConfetti, 200);
