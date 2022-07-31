const API_URL = "https://my-json-server.typicode.com/saramu01/M3U2TrelloApp_SaraMunoz"

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  let newTask = document.createElement("article");
  newTask.classList.add("card-task");

  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("card-task__title");
  taskTitle.innerText = task.title;

  let taskResponsible = document.createElement("p");
  taskResponsible.classList.add("card_task__responsible");
  taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator"><strong>Responsible:</strong></span> ${task.person}`;

  let taskDetails = document.createElement("p");
  taskDetails.classList.add("card-task__details");
  taskDetails.innerHTML = `<span class="card-task__details--task-details"><strong>Description:</strong></span> ${task.details} `;

  let taskDate = document.createElement("p");
  taskDate.classList.add("card-task__date");
  taskDate.innerHTML = `<span class="card-task__date--tag-date"><strong>Deadline Task:</strong></span> ${dateFormat(
    task.deadline
  )}`;

  let taskCreate = document.createElement("p");
  taskCreate.classList.add("card-task__date");
  taskCreate.innerHTML = `<span class="card-task__date--tag-date"><strong>Creation Date:</strong></span> ${dateFormat(
    task.created
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);

  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#progressTasks");
  let columnDone = document.querySelector("#doneTasks");

  if (task.state === "Por hacer") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "En Progreso") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "Finalizadas") {
    columnDone.appendChild(newTask);
  }
};
