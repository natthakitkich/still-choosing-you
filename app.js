const content = document.getElementById("content");
const card = document.getElementById("card");

const startNav = document.getElementById("startNav");
const pageNav = document.getElementById("pageNav");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const bgm = document.getElementById("bgm");

let pageIndex = -1;

/* ===============================
   ข้อความต้นฉบับ 100%
   =============================== */

const rawText = `
สวัสดีปีใหม่นะงับที่รัก

ปีนี้เป็นปีที่ดีมาก ๆ สำหรับเราเลยนะ
และเราอยากบอกเธอจากใจว่า คนที่ทำให้เรารู้สึกแบบนั้นได้ คือเธอนะ

ถ้ามองย้อนกลับไปเธอคือคนแรก และเป็นคนเดียวที่ทำให้เรากลับมามีพลังใจ 

มีรอยยิ้ม และค่อย ๆ กลับมารู้สึกว่าชีวิตมันเบาขึ้นมาก ๆ ในปีนึ้

เราไม่เคยคิดเลยว่าตัวเองจะกลับมามีความสุขได้มากขนาดนี้ 

กลับมาดีขึ้นได้ขนาดนี้ 

มันเหมือนหัวใจที่เคยพังทลายและสูญเสียตัวตน

มันค่อย ๆ ฟื้นตัวและกลับมาเป็นเราในเวอร์ชั่นที่เราภูมิใจและรู้สึกว่ามันดีกับตัวเราและคนรอบข้าง

ซึ่งทั้งหมดนี้ เราพูดได้เต็มปากว่ามันเกิดขึ้นเพราะมีเธออยู่ตรงนี้…ข้าง ๆ เรา 

ไม่ว่าที่ผ่านมาเราจะทำตัวแย่แค่ไหน แต่เธอก็ยังไม่ปล่อยมือเรา
`;

/* 1 ย่อหน้า = 1 หน้า */
const pages = rawText.trim().split(/\n\s*\n/);

/* หน้าเปิดการ์ด */
function showStart() {
  content.textContent =
`การ์ดใบนี้
เขียนถึงคนคนเดียว

กดเพื่อเปิดอ่านการ์ด`;

  startNav.classList.remove("hidden");
  pageNav.classList.add("hidden");
}

/* เปลี่ยนหน้าแบบเฟด */
function renderPage() {
  card.classList.add("fade-out");

  setTimeout(() => {
    content.textContent = pages[pageIndex];
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
  }, 300);
}

/* เริ่มต้น */
showStart();

/* เปิดการ์ด + เล่นเพลง */
startBtn.onclick = () => {
  if (bgm) {
    bgm.volume = 0;
    bgm.play()
      .then(() => {
        let v = 0;
        const fadeIn = setInterval(() => {
          v += 0.02;
          if (v >= 1) {
            bgm.volume = 1;
            clearInterval(fadeIn);
          } else {
            bgm.volume = v;
          }
        }, 100);
      })
      .catch(() => {});
  }

  pageIndex = 0;
  startNav.classList.add("hidden");
  pageNav.classList.remove("hidden");
  renderPage();
};

nextBtn.onclick = () => {
  if (pageIndex < pages.length - 1) {
    pageIndex++;
    renderPage();
  }
};

prevBtn.onclick = () => {
  if (pageIndex > 0) {
    pageIndex--;
    renderPage();
  }
};
