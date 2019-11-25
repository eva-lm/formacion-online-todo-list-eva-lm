"use strict";

let tasks = [];

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
  const input = document.querySelector(".input-js");
  let task = input.value;
  tasks.push({
    task: task,
    isChecked: false
  });
  console.log(tasks);
  renderTask();
};
const renderTask = () => {
  const list = document.querySelector(".task__list-js");
  // let i;
  // for (i = 0; i < tasks.length; i++) {
  //   list.innerHTML += `<li class="task__item"><input class="task__input" type="checkbox" id="${i}" onclick="completedTask(this)"  /> ${tasks[i].task} </li>`;
  // }

  list.innerHTML = "";
  let isChecked;

  tasks.forEach((element, index) => {
    isChecked = element.isChecked == true ? "checked" : "";
    list.innerHTML += `<li class="task__item">
    <input class="task__input" type="checkbox" ${isChecked} id="id__${index}" value="${index}" onclick="completedTask(this)" />
    <label name="id__${index}" class="task__label">${element.task}</label>
    </li>`;
  });
};

const completedTask = checkbox => {
  const taskLabel = document.querySelector(".task__label");
  if (checkbox.checked == true) {
    console.log("Check el value =>", checkbox.value);
    tasks[checkbox.value].isChecked = true;
    checkbox.classList.add("line");
  } else {
    console.log("Uncheck el value =>", checkbox.value);
    tasks[checkbox.value].isChecked = false;
    checkbox.classList.remove("line");
  }
};

addTaskBtn.addEventListener("click", toDoList);
