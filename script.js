document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskText) {
        // Create a new task item
        const li = document.createElement('li');
        li.className = 'task-item';

        // Create a span element for task text
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        // Append elements to the task item
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Append the task item to the task list
        taskList.appendChild(li);
    }

    // Event listener for form submission
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task.');
        }
    });
});
