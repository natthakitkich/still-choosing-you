

/* ===== Pages ===== */
const pages = [
`การ์ดใบนี้
เขียนถึงคนคนเดียว

กดเพื่อเปิดการ์ดปีใหม่`,
`สวัสดีปีใหม่นะงับที่รัก`,
`ปีนี้เป็นปีที่ดีมาก ๆ สำหรับเราเลยนะ
และเราอยากบอกเธอจากใจว่า
คนที่ทำให้เรารู้สึกแบบนั้นได้

คือเธอนะ`,
`ถ้ามองย้อนกลับไป
เธอคือคนแรก และเป็นคนเดียว
ที่ทำให้เรากลับมามีพลังใจ
มีรอยยิ้ม`,
`และค่อย ๆ กลับมารู้สึกว่า
ชีวิตมันเบาขึ้นมาก ๆ`,
`เราไม่เคยคิดเลยว่า
ตัวเองจะกลับมามีความสุข
ได้มากขนาดนี้`,
`มันเหมือนหัวใจที่เคยพังทลาย
ค่อย ๆ ฟื้นตัว
และกลับมาเป็นเรา
ในเวอร์ชันที่เราภูมิใจ`,
`ทั้งหมดนี้เกิดขึ้นได้
เพราะมีเธออยู่ตรงนี้
ข้าง ๆ เรา`,
`ไม่ว่าที่ผ่านมา
เราจะทำตัวแย่แค่ไหน
แต่เธอก็ไม่เคยปล่อยมือ`,
`ปีนี้เราเดินมาด้วยกัน
หลายช่วงเวลามาก`,
`วันที่เธอบินมาหาเรา
ตามสัญญาที่ให้กันไว้`,
`และวันที่เรา
บินไปหาเธอ`,
`มันเป็นการเดินทางที่ไกล
แต่มีความหมายที่สุด`,
`แม้บางวันจะเหนื่อย
บางวันจะยาก`,
`แต่เราก็ยังเลือกเธอ`,
`ไม่ใช่เพราะมันง่าย
แต่เพราะเราเห็นอนาคต`,
`Still Choosing You…`,
`วันนี้
พรุ่งนี้
และทุกวันที่จะเดินไปข้างหน้า`,
`เราก็ยังเลือกเธอนะ`,
`สวัสดีปีใหม่นะงับ
นักการทูตคนเก่งของเรา`
];

let index = 0;

const card = document.getElementById("card");
const content = document.getElementById("content");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function render() {
  content.textContent = pages[index];
  prev.style.display = index === 0 ? "none" : "inline-block";
  next.textContent = index === 0 ? "เปิดการ์ด" : "ถัดไป";
}

function go(to) {
  card.classList.add("fade-out");
  setTimeout(() => {
    index = to;
    render();
    card.classList.remove("fade-out");
  }, 500);
}

prev.onclick = () => index > 0 && go(index - 1);
next.onclick = () => index < pages.length - 1 && go(index + 1);

render();

/* ===== Dust (iOS safe) ===== */
const canvas = document.getElementById("dust");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const dots = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2 + 0.4,
  s: Math.random() * 0.25 + 0.05
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d => {
    d.y -= d.s;
    if (d.y < -10) d.y = canvas.height + 10;
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
