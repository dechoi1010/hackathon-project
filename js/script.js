// script.js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login_box");
const greet = document.querySelector(".greeting");
const greetMessage = greet.querySelector(".greet_message");

const HIDDEN_CLASS = "hidden";
const USER_KEY = "username";

function formSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USER_KEY, username);
    paintgGreet(username);
}

function paintgGreet(username) {
    greetMessage.innerText = `hello ${username}`;
    greet.classList.remove(HIDDEN_CLASS);
}

const savedUser = localStorage.getItem(USER_KEY);

if(savedUser === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", formSubmit);
} else {
    //show the greet
    paintgGreet(savedUser);
}

/*
- 투두리스트 : 태스크 등록+수정[+상세설명] : 완료/미룸/삭제
- 카테고리별 + 우선순위 + 달성기한 (아 기간 어떻게하지? 그럼 task 추가할 때 기간도 받아야 하나)
- 1. 학교 일정 : 과제 시험 일정, 공부 등
  2. 개인 일정: 운동 쇼핑 독서 영화
  3. 또? (카테고리를 스스로 추가할 수 있으면? 좋을 듯? 근데 그게 될까?ㅠ)

-로그인 기능? : 학교 일정과 연동? 어려울듯함 (파이어베이스 쓰면 될지도...)
-달력으로 한눈에보기 + 디데이나 남은시간 표시 (API로 달력 끌어오면 될 것 같은데 디데이.... 모듈이 있을지도)
 */