const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

let current = 0;

// iOS-safe play
function playMusic() {
  music.currentTime = 0;
  music.volume = 0.3;
  music.play();
}

// show page
function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

startBtn.addEventListener("click", () => {
  playMusic();
  current = 1;
  showPage(current);
});

nextBtn.addEventListener("click", () => {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
});
