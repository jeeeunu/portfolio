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









//////////////////// 투두리스트
const todolistForm = document.querySelector(".todolist_form"),
    todolistInput = document.querySelector("#todolist"),
    todolistBtnAdd = document.querySelector(".btn_add"),
    todolistBtnRemove = document.querySelector(".btn_delete"),
    todolistUL = document.querySelector(".todolist_UL");
todolistBtn = document.querySelector("button");



// 투두리스트 저장 스토리지 설정
const TODOBOX = "todoList";
// array 박스
const todoArray = [];


// 투두리스트 작성
function todolistWrite(e) {
    e.preventDefault();
    const todolistVal = todolistInput.value;


    // 입력 검사
    if (todolistVal.length === 0) {
        alert("입력해주십셔");
    } else {
        // 값 스토리지에 저장
        saveTodoList(todolistVal);
        // li 만들기
        paint(todolistVal);
        // input 입력칸 초기화
        todolistInput.value = ``;
    }

}

function paint(text) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const todolistVal = todolistInput.value;
    // const newid = todoArray.length +1;


    // todoarray에 추가
    const toDoObj = {
        text: text,
        // id: newid
    };
    todoArray.push(toDoObj)

    // li 텍스트
    li.innerText = `${text}`
    // btn 만들기
    btn.innerText = `삭제`;
    // li,btn 태그 추가하기
    todolistUL.appendChild(li);
    li.appendChild(btn);
}

// 버튼 클릭시삭제
// function todolistDelete() {
//     const liRemove = btn.parentNode;
//     todolistUL.removeChild(liRemove);
// }

// 스토리지 저장
function saveTodoList() {
    localStorage.setItem(TODOBOX, JSON.stringify(todoArray));
}

//스토리지 값에 따른 나타내기
function showTODO() {
    const TODOBOX_LIST = localStorage.getItem(TODOBOX);
    const TODOBOX_LIST_SHOW = JSON.parse(TODOBOX_LIST);

    console.log(TODOBOX_LIST)
    if (TODOBOX_LIST === null) {
        alert("할일이 없어요");
    } else {
        TODOBOX_LIST_SHOW.forEach(function(todoArray) {
            paint(todoArray.text)
        });
    }
}

// form submit
todolistForm.addEventListener("submit", todolistWrite);
// todolistBtn.addEventListener("click", todolistDelete);

// 스토리지 값 보이기
showTODO();









//////////////////// 날씨
