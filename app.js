// Selectors
const taskCtn = document.querySelector('.task-list');
const addTaskBtn = document.querySelector('#new-taskBtn');
const taskInput  = document.querySelector('#new-task');
const button = document.querySelector('.edit');

addTaskBtn.addEventListener('click', (e) => {
    if(!taskInput.value || taskInput.value === ' ') {
        return;
    }
    const task_el = document.createElement('div');
    task_el.classList.add('tasks-ctn');
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('task');
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('task-text');
    task_input_el.type = 'text';
    task_input_el.setAttribute('readonly', 'readonly');
    task_input_el.value = taskInput.value;
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
    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);
    task_content_el.appendChild(task_action_el);
    taskCtn.appendChild(task_el);
    taskInput.value = ' ';
    task_edit_el.addEventListener('click', () => {
        if(task_edit_el.innerText.toLowerCase() == 'edit') {
            console.log('edit button pressed')
            task_input_el.removeAttribute('readonly')
            task_input_el.focus();
            task_edit_el.innerText = 'Save';
        } else {
            task_input_el.setAttribute('readonly', 'readonly');
            task_edit_el.innerText = 'Edit';
        }
    });
    task_delete_el.addEventListener('click', () => {
        taskCtn.removeChild(task_el)
    });
});