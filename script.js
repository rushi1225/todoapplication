
const todoInput = document.getElementById("todo-input");
const todosContainer = document.querySelector(".todos");

function addTodo() {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoPara = document.createElement("p");
  todoPara.innerText = todoInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.setAttribute("onclick", "deleteTodo(this)");
  // add delete functionality to btn

  todoDiv.append(todoPara, deleteBtn);

  todosContainer.append(todoDiv);

  todoInput.value = "";
}

function deleteTodo(btn) {
  const todoDiv = btn.parentElement;
  todosContainer.removeChild(todoDiv);
}


