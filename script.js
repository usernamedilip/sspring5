document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("Input");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("List");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== " ") {
            const li = document.createElement("li");
            li.textContent = taskText;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    li.style.textDecoration = "line-through";
                } else {
                    li.style.textDecoration = "none";
                }
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function() {
                taskList.removeChild(li);
            });

            li.appendChild(checkbox);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});
