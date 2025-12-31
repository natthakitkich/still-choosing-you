

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
นักการทูตคนเก่งของชั้น`
];

let index = 0;
const content = document.getElementById("content");
const card = document.getElementById("card");

function render() {
  content.textContent = pages[index];
}
render();

document.getElementById("next").onclick = () => {
  if (index < pages.length - 1) {
    card.classList.add("fade-out");
    setTimeout(() => {
      index++;
      render();
      card.classList.remove("fade-out");
      card.classList.add("fade-in");
    }, 300);
  }
};

document.getElementById("prev").onclick = () => {
  if (index > 0) {
    card.classList.add("fade-out");
    setTimeout(() => {
      index--;
      render();
      card.classList.remove("fade-out");
      card.classList.add("fade-in");
    }, 300);
  }
};

/* ===== Dust particles (เบา + iOS-safe) ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h, dots = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 50; i++) {
  dots.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.2 + 0.4,
    v: Math.random() * 0.3 + 0.1
  });
}

function animate() {
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  dots.forEach(d => {
    d.y -= d.v;
    if (d.y < 0) d.y = h;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
