const inputText = document.querySelector("#tracker");
const button = document.querySelector(".btn");
const subContainer = document.querySelector(".sub-container");

const addTask = ()=> {
  if (inputText.value === "") {
    alert("input a task");
    return;
  }
    subContainer.style.display = "flex";
  const task = document.createElement("div");
  task.classList.add("task");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskTextContainer = document.createElement("div");
  taskTextContainer.classList.add("task-text-container");

  const taskText = document.createElement("span");
  taskText.innerText = inputText.value;
  taskTextContainer.appendChild(taskText);
  
  
  const refuse = document.createElement("div");
  refuse.classList.add("refuse");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");
  refuse.appendChild(trashIcon);
  refuse.addEventListener("click", ()=> {
    task.remove();
  })

  task.appendChild(checkbox);
  task.appendChild(taskText);
  task.appendChild(refuse);
  

  subContainer.appendChild(task);
    inputText.value = ""; 

    checkbox.addEventListener("change", ()=> {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }
    })

    };

    button.addEventListener("click", addTask)

    inputText.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    })

  