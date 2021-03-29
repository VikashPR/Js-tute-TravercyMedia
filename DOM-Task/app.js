// Defining Var 
const task = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
filter.value = ""

// Load all event listners
loadEventListners();

function loadEventListners() {
    // Adding Task 
    form.addEventListener('submit', addTask);
    // Remove Task
    taskList.addEventListener('click', removeTask);
    // Clear Tasks
    clearBtn.addEventListener('click', clearTask )
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

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are You Sure")){
            e.target.parentElement.parentElement.remove();
        }
    }
}
function clearTask(){
        // taskList.innerHTML = "";
        while(taskList.firstChild)
        {
            taskList.removeChild(taskList.firstChild);
        }
}