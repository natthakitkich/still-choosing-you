const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('startBtn');
const bgm = document.getElementById('bgm');

let index = 0;
let started = false;

function show(i) {
  screens.forEach(s => s.classList.remove('active'));
  screens[i].classList.add('active');
}

startBtn.addEventListener('click', () => {
  if (started) return;
  started = true;

  bgm.volume = 0.8;
  bgm.play().catch(()=>{});

  index = 1;
  show(index);
});

document.body.addEventListener('click', () => {
  if (!started) return;
  if (index >= screens.length - 1) return;

  index++;
  show(index);
});
