const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");

let index = 0;
let locked = false;

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

// ❗ สำคัญมาก: play อยู่ “ใน click โดยตรง”
startBtn.addEventListener("click", () => {
  music.volume = 0.4;
  music.play(); // iOS Safari WILL allow this
  index = 1;
  showPage(index);
});

nextBtn.addEventListener("click", () => {
  if (locked) return;
  locked = true;

  if (index < pages.length - 1) {
    index++;
    showPage(index);
  }

  setTimeout(() => locked = false, 600);
});
