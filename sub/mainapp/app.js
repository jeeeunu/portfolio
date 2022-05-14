//////////////////// 시계기능
const clock = document.querySelector("#clock")

function clockWave() {
    // 시간을 받아오는 객체
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText =  `${hours<10?`0${hours}`:hours}:${minutes}:${seconds<10?`0${seconds}`:seconds}`
}

function init () {
    clockWave();
    setInterval(clockWave,1000);
}

init();
