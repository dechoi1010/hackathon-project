/*    
    <div class="todo_box">
      <form class="todo_form">
        <input type="text" placeholder="Write a To Do and Press Enter" required />
      </form>
      <ul class="todo_list"></ul>
    </div>
*/

const todoForm = document.querySelector(".todo_form");
const todoList = document.querySelector(".todo_list");
let toDos = [];
let newTodo = "";
const TODO_KEY = "todos";

function toDoSubmit(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector("input");
    newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDoFunc();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.classList.add("todo_li");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    li.appendChild(checkBox);

    const span = document.createElement("span");
    span.classList.add("todo_text");
    li.appendChild(span);

    const spanBtn = document.createElement("span");
    spanBtn.classList.add("material-icons");
    spanBtn.innerText="remove_circle_outline";
    li.appendChild(spanBtn);

    span.innerText = newTodoObj.text;
    li.id = newTodoObj.id;
    todoList.appendChild(li);
    
    spanBtn.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDoFunc();
}

function saveToDoFunc() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

todoForm.addEventListener("submit", toDoSubmit);


const todaysList = document.getElementsByClassName("nav__name")[0];
console.log(todaysList.text);
