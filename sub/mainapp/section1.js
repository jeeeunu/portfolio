//////////////////// 시계기능
const clock = document.querySelector("#clock")

function clockWave() {
    // 시간을 받아오는 객체
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    clockWave();
    setInterval(clockWave, 1000);
}

init();


//////////////////// userName 나타내기
const userForm = document.querySelector(".userName_form"),
    userInput = document.querySelector("#userName"),
    userNameArea = document.querySelector(".userName_on"),
    userNameP = document.querySelector(".userName_cont"),
    userNameCont = document.querySelector(".userName_cont");

// 저장소
const USER_LS = "currentUser"

//이름 저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
};

// form 서밋
function handleSubmit(e) {
    nameVal = userInput.value,
        e.preventDefault();
    saveName(nameVal);
    showUser();
}

// 값출력
function showUser() {
    const currentUser = localStorage.getItem(USER_LS);


    if (currentUser === null) {
        // userNameP.innerText = `${nameVal}`;
        // userNameArea.classList.remove("hide");
    } else {
        // 저장된 이름이 있으면 출력하기
        userNameArea.classList.remove("hide");
        userForm.classList.add("hide");
        userNameP.innerText = `${currentUser}`;
    }
}

userForm.addEventListener("submit", handleSubmit);
showUser();