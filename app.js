const startBtn = document.getElementById("startBtn");
const landing = document.querySelector(".landing");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  landing.style.display = "none";
  content.classList.remove("hidden");

  music.currentTime = 0;
  music.volume = 0.3;
  music.play();
});
