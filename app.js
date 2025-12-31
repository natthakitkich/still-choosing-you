const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const indicator = document.getElementById("indicator");
const music = document.getElementById("bgMusic");

let index = 0;
let locked = false;

function renderIndicator() {
  indicator.innerHTML = pages.map((_, i) =>
    `<span style="opacity:${i === index ? 0.6 : 0.2}">•</span>`
  ).join(" ");
}

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
  renderIndicator();
}

function playMusic() {
  music.volume = 0.35;
  music.play();
}

function fadeOutMusic() {
  const fade = setInterval(() => {
    if (music.volume > 0.01) {
      music.volume -= 0.01;
    } else {
      music.pause();
      clearInterval(fade);
    }
  }, 120);
}

startBtn.addEventListener("click", () => {
  playMusic();
  index = 1;
  showPage(index);
});

nextBtn.addEventListener("click", () => {
  if (locked) return;
  locked = true;

  if (index < pages.length - 1) {
    index++;
    showPage(index);
    if (index === pages.length - 1) fadeOutMusic();
  }

  setTimeout(() => locked = false, 600);
});

renderIndicator();
