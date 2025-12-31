const pages = [
`การ์ดใบนี้
เขียนถึงคนคนเดียว

กดเพื่อเปิดการ์ดปีใหม่`,

`สวัสดีปีใหม่นะงับที่รัก

ปีนี้เป็นปีที่ดีมาก ๆ สำหรับเราเลยนะ
และเราอยากบอกเธอจากใจว่า
คนที่ทำให้เรารู้สึกแบบนั้นได้ คือเธอนะ`,

`ถ้ามองย้อนกลับไป
เธอคือคนแรก และเป็นคนเดียว
ที่ทำให้เรากลับมามีพลังใจ
มีรอยยิ้ม
และค่อย ๆ รู้สึกว่าชีวิตมันเบาขึ้น`,

`เราไม่เคยคิดเลยว่า
ตัวเองจะกลับมามีความสุขได้มากขนาดนี้
หัวใจที่เคยพัง
ค่อย ๆ ฟื้นตัว
และกลับมาเป็นเราในเวอร์ชันที่ภูมิใจ`,

`ทั้งหมดนี้เกิดขึ้นได้
เพราะมีเธออยู่ตรงนี้
ไม่ว่าที่ผ่านมาเราจะทำตัวแย่แค่ไหน
เธอก็ยังไม่ปล่อยมือเรา`,

`แม้จะมีวันที่ยาก
วันที่อ่อนแอ
แต่เราก็ยังเลือกเธอ

วันนี้ พรุ่งนี้
และทุกวันที่เราจะเดินไปข้างหน้า`,

`เรายังเลือกเธอ
เสมอ

สวัสดีปีใหม่นะงับ
เรารักเธอ`
];

let index = 0;
const content = document.getElementById("content");
const card = document.getElementById("card");

function render() {
  card.classList.add("fade-out");

  setTimeout(() => {
    content.textContent = pages[index];
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
  }, 250);
}

document.getElementById("next").onclick = () => {
  if (index < pages.length - 1) {
    index++;
    render();
  }
};

document.getElementById("prev").onclick = () => {
  if (index > 0) {
    index--;
    render();
  }
};

render();
