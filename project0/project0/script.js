const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

let countTodo = 0;

window.addEventListener("change", function (e) {
  if (e.target.checked) {
    if(uncheckedCountSpan.textContent == 0){
      uncheckedCountSpan.textContent = 0;
    }
    else{
      uncheckedCountSpan.textContent--;
    }
  } else {
    uncheckedCountSpan.textContent++;
  }
});

function createTodo() {
  //Creating elements for the todo component
  const todoItem = document.createElement("div");
  const textItem = document.createElement("input");
  const checkItem = document.createElement("input");
  const deleteItem = document.createElement("button");
  const itemItself = document.createElement("li");

  //Setting atributes for elements

  todoItem.setAttribute("class", classNames.TODO_ITEM);
  todoItem.setAttribute("id", "containerTodo");

  textItem.setAttribute("type", "text");
  textItem.setAttribute("class", classNames.TODO_TEXT);
  textItem.setAttribute("id", "textTodo");

  checkItem.setAttribute("type", "checkbox");
  checkItem.setAttribute("class", classNames.TODO_CHECKBOX);
  checkItem.setAttribute("id", "checkboxId");

  deleteItem.setAttribute("class", classNames.TODO_DELETE);
  deleteItem.setAttribute("id", "buttonDelete");

  itemItself.setAttribute("id", "itemItself");

  deleteItem.addEventListener("click", function () {
    list.removeChild(itemItself);
    itemCountSpan.textContent--;
    if(checkItem.checked){
      uncheckedCountSpan.textContent = uncheckedCountSpan.textContent;
    }else{
      uncheckedCountSpan.textContent--;
    }
  });

  //Adding elements to the parent div
  todoItem.appendChild(textItem);
  todoItem.appendChild(checkItem);
  todoItem.appendChild(deleteItem);

  //Ibidem but for de li created
  itemItself.appendChild(todoItem);

  //To the list
  list.appendChild(itemItself);

  //console.log("Se ha creado todo");
}

function newTodo() {
  this.createTodo();
  //countTodo += 1;

  itemCountSpan.textContent++;
  uncheckedCountSpan.textContent++;

  //console.log(countTodo);
}
