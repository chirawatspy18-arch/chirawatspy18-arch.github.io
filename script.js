// โค้ด JavaScript ของเว็บ
let count = 0;
const num = document.getElementById("num");

document.getElementById("plus").addEventListener("click", () => {
  count++;
  num.textContent = count;
  console.log("กดแล้ว", count, "ครั้ง");
});
