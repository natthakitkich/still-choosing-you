const pages = [
  {
    type: "cover",
    html: `
      <h1>การ์ดใบนี้</h1>
      <p>เขียนถึงคนคนเดียว</p>
      <p style="margin-top:24px;">กดเพื่อเปิดการ์ดปีใหม่</p>
    `
  },

  {
    html: `
      <p>สวัสดีปีใหม่นะงับที่รัก</p>
      <p>ปีนี้เป็นปีที่ดีมาก ๆ สำหรับเราเลยนะ<br>
      และเราอยากบอกเธอจากใจว่า<br>
      คนที่ทำให้เรารู้สึกแบบนั้นได้ คือเธอนะ</p>
    `
  },

  {
    html: `
      <p>ถ้ามองย้อนกลับไป เธอคือคนแรก<br>
      และเป็นคนเดียวที่ทำให้เรากลับมามีพลังใจ<br>
      มีรอยยิ้ม<br>
      และค่อย ๆ กลับมารู้สึกว่าชีวิตมันเบาขึ้นมาก ๆ ในปีนี้</p>
    `
  },

  {
    html: `
      <p>เราไม่เคยคิดเลยว่าตัวเองจะกลับมามีความสุขได้มากขนาดนี้<br>
      กลับมาดีขึ้นได้ขนาดนี้</p>
      <p>มันเหมือนหัวใจที่เคยพังทลายและสูญเสียตัวตน<br>
      ค่อย ๆ ฟื้นตัว<br>
      และกลับมาเป็นเราในเวอร์ชันที่เราภูมิใจ</p>
    `
  },

  {
    html: `
      <p>ซึ่งทั้งหมดนี้ เราพูดได้เต็มปากว่า<br>
      มันเกิดขึ้นเพราะมีเธออยู่ตรงนี้…ข้าง ๆ เรา</p>
      <p>ไม่ว่าที่ผ่านมาเราจะทำตัวแย่แค่ไหน<br>
      แต่เธอก็ยังไม่ปล่อยมือเรา</p>
    `
  },

  {
    html: `
      <p>เรารักเธอมาก<br>
      รักเธอที่สุด</p>
      <p>วันนี้ พรุ่งนี้ และทุกวันข้างหน้า<br>
      เรายังเลือกเธอเสมอ</p>
    `
  }
];

let index = 0;
const card = document.getElementById("card");
const content = document.getElementById("content");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function render() {
  card.classList.add("fade-out");

  setTimeout(() => {
    content.innerHTML = pages[index].html;

    prev.style.visibility = index === 0 ? "hidden" : "visible";
    next.textContent = index === pages.length - 1 ? "จบแล้ว" : "ถัดไป";

    card.classList.remove("fade-out");
    card.classList.add("fade-in");
  }, 450);
}

prev.onclick = () => {
  if (index > 0) {
    index--;
    render();
  }
};

next.onclick = () => {
  if (index < pages.length - 1) {
    index++;
    render();
  } else {
    index = 0;
    render();
  }
};

render();
