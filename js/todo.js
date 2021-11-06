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

let newTodo = "";

function toDoSubmit(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector("input");
    newTodo = todoInput.value;
    todoInput.value = "";
    paintToDo(newTodo);
}

function paintToDo(text) {
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

    span.innerText = text;
    todoList.appendChild(li);
    
    spanBtn.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}


todoForm.addEventListener("submit", toDoSubmit);
