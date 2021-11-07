const clock = document.querySelector(".time");

function paintClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${year}년 ${month}월 ${day}일, ${hours}:${minutes}:${seconds}`;
}

paintClock();
setInterval(paintClock, 1000);