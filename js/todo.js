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
const todoBox = document.querySelector(".todo_box");
let whatTodo = 1;

let toDos = [];
let weekToDos = [];
let schoolToDos = [];
let personalToDos = [];
let newTodo = "";

const TODO_KEY = "todos";
const WEEK_TODO_KEY = "weektodos";
const SCHOOL_KEY = "schooltodos";
const PERSONAL_KEY = "personaltodos";

function toDoSubmit(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector("input");
    newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    newTodoObj.text = newTodo;
    newTodoObj.id = Date.now();
    paintToDo(newTodoObj);
    if (whatTodo === 1) {
        toDos.push(newTodoObj);
    } else if (whatTodo === 2) {
        weekToDos.push(newTodoObj);
    } else if (whatTodo === 3) {
        schoolToDos.push(newTodoObj);
    } else if (whatTodo === 4) {
        personalToDos.push(newTodoObj);
    }
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
    if (whatTodo === 1) {
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    } else if (whatTodo === 2) {
        weekToDos = weekToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    } else if (whatTodo === 3) {
        schoolToDos = schoolToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    } else if (whatTodo === 4) {
        personalToDos = personalToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    }

    li.remove();
    saveToDoFunc();
}

function saveToDoFunc() {
    if (whatTodo === 1) {
        localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
    } else if (whatTodo === 2) {
        localStorage.setItem(WEEK_TODO_KEY, JSON.stringify(weekToDos));
    } else if (whatTodo === 3) {
        localStorage.setItem(SCHOOL_KEY, JSON.stringify(schoolToDos));
    } else if (whatTodo === 4) {
        localStorage.setItem(PERSONAL_KEY, JSON.stringify(personalToDos));
    }
}



function resetToDo() {
    while (todoList.firstChild) {
        todoList.firstChild.remove()
    }
}

function a() {
    const savedToDos = localStorage.getItem(TODO_KEY);
    const savedWeekToDos = localStorage.getItem(WEEK_TODO_KEY);
    const savedSchool = localStorage.getItem(SCHOOL_KEY);
    const savedPersonal = localStorage.getItem(PERSONAL_KEY);

    todoBox.classList.remove("hidden");

    if(savedToDos && whatTodo === 1) {
        resetToDo();
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    } else if(savedWeekToDos && whatTodo === 2) {
        resetToDo();
        const parsedWeekToDos = JSON.parse(savedWeekToDos);
        weekToDos = parsedWeekToDos;
        parsedWeekToDos.forEach(paintToDo);
    } else if(savedSchool && whatTodo === 3) {
        resetToDo();
        const parsedSchoolToDos = JSON.parse(savedSchool);
        schoolToDos = parsedSchoolToDos;
        parsedSchoolToDos.forEach(paintToDo);

    } else if(savedPersonal && whatTodo === 4) {
        resetToDo();
        const parsedPersonalToDos = JSON.parse(savedPersonal);
        personalToDos = parsedPersonalToDos;
        parsedPersonalToDos.forEach(paintToDo);
    } else {
        resetToDo();
    }
}

todoForm.addEventListener("submit", toDoSubmit);


const todayList = document.querySelector('.nav__link#today-list');
const weekList = document.querySelector('.nav__link#week-list');
const school = document.querySelector('.nav__link#school');
const personal = document.querySelector('.nav__link#personal');

todayList.addEventListener("click", () => {whatTodo = 1; a()});
weekList.addEventListener("click", () => {whatTodo = 2; a()});
school.addEventListener("click", () => {whatTodo = 3; a()});
personal.addEventListener("click", () => {whatTodo = 4; a()});



