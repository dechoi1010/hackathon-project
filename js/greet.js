const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login_box");
const greetMessage = document.querySelector(".greeting");
const todo = document.querySelector(".todo_box");
const logout_btn = document.querySelector("#logout_btn");

const HIDDEN_CLASS = "hidden";
const USER_KEY = "username";

function formSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USER_KEY, username);
  paintGreet(username);
}

function paintGreet(username) {
  greetMessage.innerText = `안녕하세요, ${username} 님!`;
  greetMessage.classList.remove(HIDDEN_CLASS);
  //todo.classList.remove(HIDDEN_CLASS);
}

const savedUser = localStorage.getItem(USER_KEY);

if (savedUser === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", formSubmit);
} else {
  //show the greet
  paintGreet(savedUser);
}

function logout(event) {
  localStorage.removeItem(USER_KEY);
  location.reload();
}
logout_btn.addEventListener("click", logout);