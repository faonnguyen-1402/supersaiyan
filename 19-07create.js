function createTodoElement(todo) {
  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  liElement.dataset.id = todo.id;

  return liElement;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;

  console.log('object');
  const ulElement = document.getElementById(ulElementId);
  if (!ulElement) return;

  for (const todo of todoList) {
    const liElement = createTodoElement(todo); // return li
    ulElement.appendChild(liElement);
  }
}

(() => {
  const todoList = [
    { id: 1, title: 'learn javascript' },
    { id: 2, title: 'learn reactjs' },
    { id: 3, title: 'learn nextjs' },
  ];

  renderTodoList(todoList, 'listtodo_2');
  //  do something else
})();
