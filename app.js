const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

// start experience
startBtn.addEventListener("click", () => {
  document.querySelector(".landing").style.display = "none";
  content.classList.remove("hidden");

  music.volume = 0.35;
  music.play();
});

// reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));
