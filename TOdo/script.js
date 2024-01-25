function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dueDateInput = document.getElementById("dueDateInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var dueDate = dueDateInput.value ? `Due Date: ${dueDateInput.value}` : "No due date";

    li.innerHTML = `
        <div>
            <span>${taskInput.value}</span>
            <p>${dueDate}</p>
        </div>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    // Insert the new task at the beginning of the list
    taskList.insertBefore(li, taskList.firstChild);

    // Clear the input fields after adding the task
    taskInput.value = "";
    dueDateInput.value = "";
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteList = document.getElementById("noteList");

    if (noteInput.value.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <p>${noteInput.value}</p>
        <button class="delete-button" onclick="deleteNote(this)">Delete</button>
    `;
    noteList.appendChild(li);

    // Clear the input field after adding the note
    noteInput.value = "";
}

function deleteNote(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

function switchTab(tab) {
    var todoTab = document.getElementById("todoTab");
    var notesTab = document.getElementById("notesTab");
    var todoSection = document.getElementById("todoSection");
    var notesSection = document.getElementById("notesSection");

    if (tab === "todo") {
        todoTab.classList.add("active");
        notesTab.classList.remove("active");
        todoSection.classList.add("active");
        notesSection.classList.remove("active");
    } else {
        todoTab.classList.remove("active");
        notesTab.classList.add("active");
        todoSection.classList.remove("active");
        notesSection.classList.add("active");
    }
}
