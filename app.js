"use strict"

const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

const filterTodos = term => {

  // add filtered class
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// add todos event
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});

// delete todos event
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});

// const employeenNames = [
//   'Kristin Grenan',
//   'Kristian Tangen',
//   'Espen Øverbye',
//   'Marianne Amble'
// ]

// const list_employee = querySelector(".list-group-item");

// const displayEmployee = function(display) {
//   list-group-item.forEach( function(names) {
//     html = `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <img src="" style="border-radius: 50%; width: 20%;" alt="employ" />
//       <span>${names}</span>
//       <i class="far fa-trash-alt delete"></i>
//     </li>`;
//     list-group-item.insertAdjacentHTML('afterbegin', html);
//   });
// }
// displayEmployee(employeenNames)