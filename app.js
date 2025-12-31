const content = document.getElementById("content");
const card = document.getElementById("card");

const startNav = document.getElementById("startNav");
const pageNav = document.getElementById("pageNav");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const bgm = document.getElementById("bgm");

let pageIndex = -1;
let isTransitioning = false;

/* ===== ข้อความจดหมาย (ครบ 100%) ===== */
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

ปีนี้เราเดินมาด้วยกันหลายช่วงเวลามาก
เดือนมีนาคมมันยังชัดอยู่ในความทรงจำของเรา

วันที่เธอบินมาหาเราตามสัญญาที่เคยให้กันไว้
วันเกิดปีนี้ของเราทั้งคู่ เป็นวันที่เรามีความสุขมากจริง ๆ

เราได้ใช้เวลา 

ได้หัวเราะ 

ได้อยู่ด้วยกันแบบไม่ต้องรีบ

มันเป็นความเรียบง่าย แต่เต็มไปด้วยความสุข

และมันทำให้เรารู้ว่า...

ความรักของเรามันมีตัวตนจริง ๆ

หลังจากนั้นเราก็ตั้งใจทำตามสัญญาของเราเหมือนกัน

ด้วยการบินไปหาเธอที่อินโดฯ

มันเป็นการเดินทางไกลที่สุดในชีวิตเรา
และก็เป็นการเดินทางที่มีความสุขที่สุดเหมือนกัน

ตลอดเดือนตุลาคมที่เราได้อยู่กับเธอทั้งที่จาการ์ตาและบาหลี
มันเป็นช่วงเวลาที่มีความหมายมากสำหรับเรา

แม้เธอจะงานยุ่ง แต่เธอก็ยังทำให้เรารู้สึกว่าเราถูกเลือก

ถูกใส่ใจ 

และถูกรัก 

เรามีความสุขมากจริง ๆ

และเราภูมิใจในตัวเองมาก ที่เราทำตามสัญญานั้นได้

เรารักเธอมาก
รักเธอที่สุด

นักการทูตคนเก่งของชั้น
`;

const pages = rawText.trim().split(/\n\s*\n/);

/* ===== หน้าแรก ===== */
function showStart() {
  pageIndex = -1;
  content.textContent = `การ์ดใบนี้
เขียนถึงคนคนเดียว

กดเพื่อเปิดอ่านการ์ด`;
  startNav.classList.remove("hidden");
  pageNav.classList.add("hidden");
  nextBtn.textContent = "ถัดไป";
}

/* ===== เปลี่ยนหน้า (เฟดแบบเดิม + เว้น 3 วิ) ===== */
function changePage(text) {
  if (isTransitioning) return;
  isTransitioning = true;

  card.classList.add("hidden");

  setTimeout(() => {
    content.textContent = text;
    card.classList.remove("hidden");
    isTransitioning = false;
  }, 3000);
}

/* ===== Init ===== */
showStart();

/* ===== Events ===== */
startBtn.onclick = () => {
  bgm.volume = 0;
  bgm.play().catch(() => {});
  let v = 0;
  const fadeAudio = setInterval(() => {
    v += 0.05;
    bgm.volume = Math.min(v, 1);
    if (v >= 1) clearInterval(fadeAudio);
  }, 100);

  pageIndex = 0;
  startNav.classList.add("hidden");
  pageNav.classList.remove("hidden");
  changePage(pages[pageIndex]);
};

nextBtn.onclick = () => {
  if (pageIndex < pages.length - 1) {
    pageIndex++;
    changePage(pages[pageIndex]);
    if (pageIndex === pages.length - 1) {
      nextBtn.textContent = "จบแล้ว";
    }
  } else {
    showStart();
  }
};

prevBtn.onclick = () => {
  if (pageIndex > 0) {
    pageIndex--;
    nextBtn.textContent = "ถัดไป";
    changePage(pages[pageIndex]);
  }
};
