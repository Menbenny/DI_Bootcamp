const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    addTask();
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    
    const task = {
        task_id: tasks.length, 
        text: taskText,
        done: false
    };

    tasks.push(task);

    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.setAttribute('data-task-id', task.task_id);

    taskDiv.innerHTML = `
        <button class="delete-btn" onclick="deleteTask(${task.task_id})">
            <i class="fas fa-times"></i>
        </button>
        <input type="checkbox" id="task-${task.task_id}" onchange="doneTask(${task.task_id})">
        <label for="task-${task.task_id}">${task.text}</label>
    `;

    document.querySelector('.listTasks').appendChild(taskDiv);

    
    input.value = '';
}


function doneTask(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done; 
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (task.done) {
            taskElement.classList.add('done');
        } else {
            taskElement.classList.remove('done');
        }
    }
}


function deleteTask(taskId) {
    
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }

    
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
    }
}