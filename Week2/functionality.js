const enter = document.querySelector('#form');
const task = document.querySelector('#new');
const list = document.querySelector('#list');

enter.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const li = document.createElement('li');
  const check = document.createElement("INPUT");
  check.setAttribute("type", "checkbox");
  li.appendChild(check);
  li.appendChild(document.createTextNode(`  ${task.value}`));
  list.appendChild(li);
  task.value = '';
}