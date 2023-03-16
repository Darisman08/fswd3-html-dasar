// mendefinisikan variabel global
let todoList = [];

// mendapatkan data todoList dari local storage
if(localStorage.getItem('todoList')){
  todoList = JSON.parse(localStorage.getItem('todoList'));
}

// mengisi data todo list ke dalam html
function isiTodoList() {
  const listElement = document.getElementById("todoList");
  listElement.innerHTML = "";
  for(let i=0; i<todoList.length; i++){
    const item = todoList[i];
    const todoElement = document.createElement("li");
    todoElement.innerHTML = item.todoText;
    if(item.done){
      todoElement.style.textDecoration = "line-through";
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.addEventListener("click", function(){
      hapusTodoList(i);
    });
    todoElement.appendChild(deleteButton);
    todoElement.addEventListener("click", function(){
      toggleTodoList(i);
    });
    listElement.appendChild(todoElement);
  }
}

// menambahkan todo list
function tambahTodo(){
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value;
  if(todoText){
    todoList.push({todoText: todoText, done: false});
    todoInput.value = "";
    isiTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}

// menghapus todo list
function hapusTodoList(index){
  todoList.splice(index, 1);
  isiTodoList();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// menandai todo list selesai
function toggleTodoList(index){
  todoList[index].done = !todoList[index].done;
  isiTodoList();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

isiTodoList(); // panggil fungsi isiTodoList() untuk mengisi data todo list ke dalam html saat halaman pertama kali dibuka
