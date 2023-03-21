const baseUrl = "https://crudcrud.com/api/";
const apiKey = "2dfca93e680e4aa9841d8da322243239";
const url = baseUrl + apiKey + "/todoList";

// mendapatkan data todoList dari REST API
function getTodoList() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      todoList = data;
      isiTodoList();
    });
}

// mengisi data todo list ke dalam html
function isiTodoList() {
  const listElement = document.getElementById("todoList");
  listElement.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];
    const todoElement = document.createElement("li");
    todoElement.innerHTML = item.todoText;
    if (item.done) {
      todoElement.style.textDecoration = "line-through";
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.addEventListener("click", function () {
      hapusTodoList(i);
    });
    todoElement.appendChild(deleteButton);
    todoElement.addEventListener("click", function () {
      toggleTodoList(i);
    });
    listElement.appendChild(todoElement);
  }
}

// menambahkan todo list
function tambahTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value;
  if (todoText) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todoText: todoText, done: false })
    })
      .then(response => response.json())
      .then(data => {
        todoList.push(data);
        isiTodoList();
      });
    todoInput.value = "";
  }
}

// menghapus todo list
function hapusTodoList(index) {
  const id = todoList[index]._id;
  fetch(url + "/" + id, {
    method: "DELETE"
  })
    .then(response => {
      todoList.splice(index, 1);
      isiTodoList();
    });
}

// menandai todo list selesai
function toggleTodoList(index) {
  const item = todoList[index];
  const id = item._id;
  const todoText = item.todoText;
  const done = !item.done;
  fetch(url + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todoText: todoText, done: done })
  })
    .then(response => {
      todoList[index].done = done;
      isiTodoList();
    });
}

getTodoList(); // panggil fungsi getTodoList() untuk mendapatkan data todo list dari REST API saat halaman pertama kali dibuka
