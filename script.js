function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;

    taskList.appendChild(li);
    taskInput.value = ""; 
}

function removeTask(button) {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
