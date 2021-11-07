
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
let whatTodo = true;

let toDos = [];
let weekToDos = [];
let newTodo = "";
const TODO_KEY = "todos";
const WEEK_TODO_KEY = "weektodos";

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
    if (whatTodo) {
        toDos.push(newTodoObj);
    } else {
        weekToDos.push(newTodoObj);
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
    if (whatTodo) {
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    } else {
        weekToDos = weekToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    }
    li.remove();
    saveToDoFunc();
}

function saveToDoFunc() {
    if (whatTodo) {
        localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
    } else {
        localStorage.setItem(WEEK_TODO_KEY, JSON.stringify(weekToDos));
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
    todoForm.classList.remove("hidden");
    if(savedToDos && whatTodo) {
        // 위에 textspan 추가하든가 해야하네 아님 추가해놓고 text를 바꾸든가
        //아 박스도 block 시켜야 하네... alclrpTek
        
        resetToDo();
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        console.log(toDos);
        parsedToDos.forEach(paintToDo);
    } else if(savedWeekToDos) {
        resetToDo();
        const parsedWeekToDos = JSON.parse(savedWeekToDos);
        weekToDos = parsedWeekToDos;
        parsedWeekToDos.forEach(paintToDo);
    } else {
        resetToDo();
    }
}

todoForm.addEventListener("submit", toDoSubmit);


const todayList = document.querySelector('.nav__link#today-list');
const weekList = document.querySelector('.nav__link#week-list');
console.log(todayList);
console.log(weekList);


todayList.addEventListener("click", () => {whatTodo = true; a()});
weekList.addEventListener("click", () => {whatTodo = false; a()});





