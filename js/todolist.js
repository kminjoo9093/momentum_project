const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list-board');

const TODO_KEY = "todos"
let todos = [];

function saveTodos(){
  localStorage.setItem("TODO_KEY", JSON.stringify(todos));
}

function deleteTodo(e){
  clickedLi = e.target.parentElement;
  clickedLi.remove();

  todos = todos.filter(todo => todo.id !== parseInt(clickedLi.id));
  saveTodos();
}


function paintTodo(newTodoObject){
  const li = document.createElement("li");
  li.id = newTodoObject.id;
  const span = document.createElement("span");
  span.innerText = newTodoObject.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  deleteBtn.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObject = {text: newTodo, id: Date.now()}
  todoInput.value = '';
  todos.push(newTodoObject);
  saveTodos();
  paintTodo(newTodoObject);
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem("TODO_KEY");
const parsedTodos = JSON.parse(savedTodos);
if(parsedTodos){
  parsedTodos.forEach(paintTodo);
  todos = parsedTodos;
}
