// Selectors
const taskCtn = document.querySelector('.task-list');
const addTaskBtn = document.querySelector('#new-taskBtn');
const taskInput  = document.querySelector('#new-task');
const button = document.querySelector('.edit');
// Save task to localstorage
const saveLocalTasks = (task) => {
    // Initialize tasks
    let tasks;
    // If localstorage doesnt contain task data
    if(localStorage.getItem('tasks') === null) {
        // Tasks = empty array 
        tasks = [];
        // If tasks isnt empty
    } else {
        // Set tasks = to localstorage tasks
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // Add new task to tasks array
    tasks.push(task);
    // Update localstorage with new task
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Delete task from localstorage
const deleteLocalTask = (task) => {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    const taskIndex = task.value;
    tasks.splice(tasks.indexOf(taskIndex), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
// Load localstorage tasks
const loadLocalTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task) => {
        // Creating elements for single task and adding classes
        const task_el = document.createElement('div');
        task_el.classList.add('tasks-ctn');
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('task');
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('task-text');
        task_input_el.type = 'text';
        task_input_el.setAttribute('readonly', 'readonly');
        task_input_el.value = task;
        // Saveing task to localstorage
        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_content_el);
        const task_action_el = document.createElement('div');
        task_action_el.classList.add('task-actions');
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';
        // Appending elements to page
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        task_content_el.appendChild(task_action_el);
        taskCtn.appendChild(task_el);
        // Adding event handling to edit button
        task_edit_el.addEventListener('click', () => {
            // If the buttons text is 'edit'
            if(task_edit_el.innerText.toLowerCase() == 'edit') {
                // Remove readonly attr
                task_input_el.removeAttribute('readonly')
                // Auto focus on input
                task_input_el.focus();
                // Replace text from 'edit' to 'save'
                task_edit_el.innerText = 'Save';
                // Else text shoulbe be == 'save'; then run
            } else {
                // Add readonly attr
                task_input_el.setAttribute('readonly', 'readonly');
                // Replace text from 'save' to 'edit'
                task_edit_el.innerText = 'Edit';
            }
        });
        // Adding event handling to delete button
        task_delete_el.addEventListener('click', (e) => {
            // Remove task from task container
            taskCtn.removeChild(task_el);
            deleteLocalTask(task_input_el);
        });
    })
}
// Function to create task with enter keypress
const createTask = (e) => {
    if(e.keyCode == 13) {
        // Returning if input value is empty
        if(!taskInput.value || taskInput.value === ' ') {
            return;
        }
        // Creating elements for single task and adding classes
        const task_el = document.createElement('div');
        task_el.classList.add('tasks-ctn');
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('task');
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('task-text');
        task_input_el.type = 'text';
        task_input_el.setAttribute('readonly', 'readonly');
        task_input_el.value = taskInput.value;
        // Saveing task to localstorage
        saveLocalTasks(taskInput.value);
        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_content_el);
        const task_action_el = document.createElement('div');
        task_action_el.classList.add('task-actions');
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';
        // Appending elements to page
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        task_content_el.appendChild(task_action_el);
        taskCtn.appendChild(task_el);
        // Reseting input value to be empty after submit
        taskInput.value = ' ';
        // Adding event handling to edit button
        task_edit_el.addEventListener('click', () => {
            // If the buttons text is 'edit'
            if(task_edit_el.innerText.toLowerCase() == 'edit') {
                // Remove readonly attr
                task_input_el.removeAttribute('readonly')
                // Auto focus on input
                task_input_el.focus();
                // Replace text from 'edit' to 'save'
                task_edit_el.innerText = 'Save';
                // Else text shoulbe be == 'save'; then run
            } else {
                // Add readonly attr
                task_input_el.setAttribute('readonly', 'readonly');
                // Replace text from 'save' to 'edit'
                task_edit_el.innerText = 'Edit';
            }
        });
        // Adding event handling to delete button
        task_delete_el.addEventListener('click', (e) => {
            console.log(e.target);
            // Remove task from task container
            taskCtn.removeChild(task_el)
            deleteLocalTask(task_input_el);
        });
    }
}
// Start of eventListeners
// Load localstorage data on page load
document.addEventListener('DOMContentLoaded', loadLocalTasks);
// Listening to enter keypress on task input
taskInput.addEventListener('keyup', (e) => {
    createTask(e);
});
// Listening to click on add task button
addTaskBtn.addEventListener('click', () => {
    // Returning if input value is empty
    if(!taskInput.value || taskInput.value === ' ') {
        return;
    }
    // Creating elements for single task and adding classes
    const task_el = document.createElement('div');
    task_el.classList.add('tasks-ctn');
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('task');
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('task-text');
    task_input_el.type = 'text';
    task_input_el.setAttribute('readonly', 'readonly');
    task_input_el.value = taskInput.value;
    // Saving task to localstroage
    saveLocalTasks(taskInput.value);
    task_content_el.appendChild(task_input_el);
    task_el.appendChild(task_content_el);
    const task_action_el = document.createElement('div');
    task_action_el.classList.add('task-actions');
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';
    // Appending elements to page
    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);
    task_content_el.appendChild(task_action_el);
    taskCtn.appendChild(task_el);
    // Reseting input value to be empty after submit
    taskInput.value = ' ';
    // Adding event handling to edit button
    task_edit_el.addEventListener('click', () => {
        // If the buttons text is 'edit'
        if(task_edit_el.innerText.toLowerCase() == 'edit') {
            // Remove readonly attr
            task_input_el.removeAttribute('readonly')
            // Auto focus on input
            task_input_el.focus();
            // Replace text from 'edit' to 'save'
            task_edit_el.innerText = 'Save';
            // Else text shoulbe be == 'save'; then run
        } else {
            // Add readonly attr
            task_input_el.setAttribute('readonly', 'readonly');
            // Replace text from 'save' to 'edit'
            task_edit_el.innerText = 'Edit';
        }
    });
    // Adding event handling to delete button
    task_delete_el.addEventListener('click', () => {
        // Remove task from task container
        taskCtn.removeChild(task_el);
        deleteLocalTask(task_input_el);
    });
});