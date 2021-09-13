let start = true;
document.querySelector('#push').onclick = function(){
    addNewTusk();
    deleteTask();
    completeTask();
    document.querySelector("#newtask input").value = "";
}

function addNewTusk() {

    if(document.querySelector('#newtask input').value.length == 0){
        alert("You cannot add an empty task :)");
    }
    else{
        allTaskDiv = document.querySelector("#all_tasks");
        if (allTaskDiv != null) {
            allTaskDiv.id = "tasks";   
        }   

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
} 

function deleteTask() {
    let currenTasks = document.querySelectorAll(".delete");

    for (let i = 0; i < currenTasks.length; i++) {
        currenTasks[i].onclick = function() {
            this.parentNode.remove();
            if (childElementAmount.length === 1) {
                allTaskDiv = document.querySelector("#tasks");
                allTaskDiv.id = "all_tasks";
            }
        }
    }
}

function completeTask() {
    let tasks = document.querySelectorAll(".task");

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function() {
            this.classList.toggle('completed');
        }
    }
}

