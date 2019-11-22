"use strict";

let tasks = [];

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

const addTaskBtn = document.querySelector(".add__task-js");

const toDoList = () => {
  console.log("holiiii");
  const input = document.querySelector(".input-js");
  input.classList.remove("hiddden");
  const list = document.querySelector(".task__list-js");

  let item = input.value;
  let text = document.createTextNode(item);
  let newItem = document.createElement("li");
  newItem.appendChild(text);
  list.appendChild(newItem);
  tasks.push(newItem);
  console.log(tasks);
};

addTaskBtn.addEventListener("click", toDoList);
