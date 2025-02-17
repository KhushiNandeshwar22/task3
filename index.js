document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Add task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    // Add task on Enter key press
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });
  
    // Function to add a new task
    function addTask(taskText) {
      const taskItem = document.createElement("li");
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
    }
  });