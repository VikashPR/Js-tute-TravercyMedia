const task = document.querySelector('#task');
const taskList = document.querySelector('.collection');

function addTask(){
    let li = document.createElement("li");
    li.value = task.value;
    console.log(li.value);
}