const loginForm = document.querySelector(".login_form");
const IDinput = document.querySelector("#id");
const PWinput = document.querySelector("#pw");
const PWcheckinput = document.querySelector("#pw_check");

// 아이디 정규식
function idCheck(text) {
    // 영문 + 숫자 정규식
    const regId = /^[A-Za-z0-9]{8,12}$/;

    // 검사진행
    if(regId.test(text)){
        console.log("아이디 패스")
        return true;
    } else if (text.length < 8){
        alert("아이디는 8글자 이상입니다.");
        IDinput.focus();
        return false;
    } else {
        alert("아이디 영문+숫자 8글자 이상 입력하세요.");
        IDinput.focus();
        return false;
    }

}

// 비밀번호 정규식
function pwCheck(text) {
    // 영문+숫자+특수문자 (8~20자)
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if(passwordRule.test(text)) {
        console.log("비밀번호 패스");
        return true;
    }else {
        alert("비밀번호를 다시 확인하세요..");
        return false;
    }

}

// 비밀번호 재확인
const pwDoubleCheckBtn = document.querySelector(".pw_check_btn")

function pwDoubleCheck(pwtext) {
    const PWinputVal = PWinput.value;
    if (PWinputVal===(pwtext)) {
    } else {
        alert("위의 비밀번호와 같은 값을 입력하세요.")
    }
}

function pwDoubleCheckOn(e) {
    const PWcheckinputVal = PWcheckinput.value;

    e.preventDefault();
    pwDoubleCheck(PWcheckinputVal);

}

pwDoubleCheckBtn.addEventListener("click",pwDoubleCheckOn);

// 생년월일


// 로그인 submit하기
function login(e) {
    const IDinputVal = IDinput.value;
    const PWinputVal = PWinput.value;

    e.preventDefault();

    idCheck(IDinputVal);
    pwCheck(PWinputVal);

}


loginForm.addEventListener("submit",login);

