// public/app.js
const appContainer = document.getElementById('app');

// Fetch tasks from the server
function fetchTasks() {
    fetch('/tasks')
    .then(response => response.json())
    .then(tasks => renderTasks(tasks));
}

// Render tasks in the UI
function renderTasks(tasks) {
    appContainer.innerHTML = '';
    init();
    tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <p>${task.title}</p>
        <button onclick="updateTask('${task.id}')">Update</button>
        <button onclick="deleteTask('${task.id}')">Delete</button>
    `;
    appContainer.appendChild(taskElement);
    });
}

function init() {
    // Handle task creation form
    const createTaskForm = document.createElement('form');
    createTaskForm.innerHTML = `
        <input type="text" id="newTaskTitle" placeholder="Task title" required>
        <button type="submit">Create Task</button>
    `;

    appContainer.appendChild(createTaskForm);
    createTaskForm.addEventListener('submit', submitForm);
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

function submitForm(event) {
    event.preventDefault();
    const title = document.getElementById('newTaskTitle').value;

    // Send a POST request to create a new task
    fetch('/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, "id": uuidv4()}),
    })
    .then(response => response.json())
    .then(() => {
        fetchTasks();
        document.getElementById('newTaskTitle').value = '';
    });
}

// Fetch tasks on page load
fetchTasks();

// Handle task update
function updateTask(id) {
    const updatedTitle = prompt('Enter updated title:');
    if (updatedTitle !== null) {
        // Send a PUT request to update the task
        fetch(`/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, title: updatedTitle }),
        })
        .then(response => response.json())
        .then(fetchTasks);
    }
}

// Handle task deletion
function deleteTask(id) {
    const confirmDeletion = confirm('Are you sure you want to delete this task?');
    if (confirmDeletion) {
    // Send a DELETE request to delete the task
    fetch(`/tasks/${id}`, {
        method: 'DELETE',
    })
        .then(() => fetchTasks());
    }
}
