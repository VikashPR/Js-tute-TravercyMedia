// Defining Var 
const task = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');

// Load all event listners
loadEventListners();

function loadEventListners() {
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if (task.value === '') {
        alert('Add a task')
    } else {
        let li = document.createElement("li");
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task.value));
        let link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link)
        taskList.appendChild(li);
        task.value = "";
        e.preventDefault();
    }

}