const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const bgm = document.getElementById("bgm");

let index = 0;

/* ===== iOS AUDIO FIX (100%) ===== */
startBtn.addEventListener("touchstart", () => {
  bgm.currentTime = 0;
  bgm.muted = false;
  bgm.play();
  goNext();
}, { once: true });

function goNext() {
  pages[index].classList.remove("active");
  index++;
  if (index < pages.length) {
    pages[index].classList.add("active");
  } else {
    nextBtn.style.display = "none";
  }
}

nextBtn.addEventListener("touchstart", goNext);
