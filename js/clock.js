
const clock = document.querySelector(".greet_message");
console.log(clock);

function paintClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //clock.innerText = `${hours}:${minutes}:${seconds}`;
    console.log(`${hours}:${minutes}:${seconds}`);
}

paintClock();
setInterval(paintClock, 1000);