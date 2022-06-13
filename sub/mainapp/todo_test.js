const todolistForm = document.querySelector(".todolist_form"),
    todolistInput = document.querySelector("#todolist"),
    todolistBtnAdd = document.querySelector(".btn_add"),
    todolistBtnRemove = document.querySelector(".btn_delete"),
    todolistUL = document.querySelector(".todolist_UL");



// 투두리스트 저장 스토리지 설정
const TODOBOX = "todoList";
// array 박스
let todoArray = [];

// 투두리스트 작성
function todolistWrite(e,text) {
    e.preventDefault();``

    // 값 스토리지에 저장
    saveTodoList(text);
    // li 만들기
    paint(text);
    // input 입력칸 초기화
    todolistInput.value = ``
}

function paint(text) {
    const btn = document.createElement("button");
    const li = document.createElement("li");
    const todolistVal = todolistInput.value;
    text = todolistVal;

    // todoarray에 추가
    const toDoObj = {
        text: text,
        id: Date.now()
    };

    todoArray.push(toDoObj)

    li.id = toDoObj.id
    // li 텍스트
    li.innerText = `${text}`
    // btn 만들기
    btn.innerText = `X`;
    // li,btn 태그 추가하기
    li.appendChild(btn);
    todolistUL.appendChild(li);

    btn.addEventListener("click",DeleteTodo)
}

// 버튼 클릭시삭제
function DeleteTodo(e) {
    e.preventDefault;
    const liRemove = e.target.parentElement;
    liRemove.remove();
}

// 스토리지 저장
function saveTodoList() {
    localStorage.setItem(TODOBOX, JSON.stringify(todoArray));
}

//스토리지 값에 따른 나타내기
function showTODO() {
    const TODOBOX_LIST = localStorage.getItem(TODOBOX);
    const TODOBOX_LIST_SHOW = JSON.parse(TODOBOX_LIST);


    if (TODOBOX_LIST !== null) {
        todoArray = TODOBOX_LIST_SHOW
        TODOBOX_LIST_SHOW.forEach(function () {
            paint(todoArray.text)
        });
    }
}


// form submit
todolistForm.addEventListener("submit", todolistWrite);
// 스토리지 값 보이기
showTODO();