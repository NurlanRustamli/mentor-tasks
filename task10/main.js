const addTodo = document.querySelector('input');
const addButton = document.querySelector('button');
const todos = document.querySelector('.todos');
let todosArr = [];


checkTodosFromStorage();

function addToDo(e) {
    e.preventDefault();
    todosArr.push(addTodo.value);
    checkTodosFromStorage();
    localStorage.setItem("todosArr", JSON.stringify(todosArr));
    getCards();
    addTodo.value = '';
}

function getCards() {
    todos.innerHTML = "";
    todosArr.forEach((item, index) => {
        if (item !== "") {
            todos.innerHTML += `<div class='todoCard'>
        <input type="text" value="${item}" disabled>
        <button onclick='deleteToDo(${index})'>Delete</button>
        <button onclick='doneToDo(this)'>Done</button>
        <button onclick='editToDo(this)'>Edit</button>
        <button onclick='okToDo(this)' style="display: none;">OK</button>
        </div>`;
        }
    });
}

function deleteToDo(indexOfArray) {
    todosArr.splice(indexOfArray, 1);
    getCards();
}

function doneToDo(element) {
    element.parentNode.style.background = 'green';
    element.previousElementSibling.previousElementSibling.style.background = "green";
    element.previousElementSibling.previousElementSibling.style.color = "white";
}

function editToDo(element) {
    element.previousElementSibling.previousElementSibling.previousElementSibling.disabled = false;
    element.style.display = 'none';
    element.nextElementSibling.style.display = "inline-block";
}

function okToDo(element) {
    element.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.disabled = true;
    element.style.display = 'none';
    element.previousElementSibling.style.display = "inline-block";
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todosArr") === null) {
        todosArr = [];
    } else {
        todosArr = JSON.parse(localStorage.getItem("todosArr"));
    }
}

checkTodosFromStorage();