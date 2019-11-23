"use strict";

let tasks = [];
let allTasks = [];

//Date:
const months = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);
const dayWeek = new Array(
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
);
const dateContent = document.querySelector(".date-js");

const f = new Date();
dateContent.innerHTML =
  dayWeek[f.getDay()] +
  ". " +
  f.getDate() +
  " de " +
  months[f.getMonth()] +
  " de " +
  f.getFullYear();

//List:
const addTaskBtn = document.querySelector(".add__task-js");

const toDoList = () => {
  tasks = [];
  const input = document.querySelector(".input-js");
  let task = input.value;
  tasks.push(task);
  allTasks.push(task);

  renderTask();
};
const renderTask = () => {
  const list = document.querySelector(".task__list-js");
  let i;
  for (i = 0; i < tasks.length; i++) {
    list.innerHTML += `<li class="task__item"><input type="checkbox" id="item" value="${i}" /> ${tasks[i]} </li>`;
  }
  console.log(tasks);
};

addTaskBtn.addEventListener("click", toDoList);
