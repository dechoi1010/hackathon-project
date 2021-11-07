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

