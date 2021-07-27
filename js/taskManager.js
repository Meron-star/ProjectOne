
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
let html = `<div data-task-id=${id} class="card col-lg-4 col-md-6 col-sm-12 px-0">
<div class="row cardimage">
<img
  src="../ProjectOne/images/istockphoto-1153700372-612x612.jpg"
  class="card-img-top "
  alt="..."
/>
</div>
<div class="card-header bg-secondary row justify-content-center">
<h5 class="card-title cardtitle">${name}</h5>
</div>
<div class="card-body cardgreen row justify-content-center my-0 py-0">
<ul class="list-group list-group-flush ">
  <li class="list-group-item cardgreen border-0 " >${id}</li>
  <li class="list-group-item cardgreen border-0  ">Description : ${description} </li>
  <li class="list-group-item cardgreen border-0  ">AssignedTo : ${assignedTo}</li>
  <li class="list-group-item cardgreen border-0 ">Due Date : ${dueDate}</li>
  <li class="badge list-group-item cardgreen border-0 ${status === 'TODO'? 'badge-danger': 'badge-success'} ">Status:${status}</li>
</ul>
</div>

<div class="d-flex w-100 justify-content-end">
  <button class="btn btn-info done-button ${status === 'TODO' ? 'visible' : 'invisible'}" type="button">Mark As Done</button>
</div>


<div class="col">
  <input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
  <label class="btn btn-light" for="btn-check-2">Delete</label>
</div>
 <!-- <a href="#" class="card-link text-left">Done</a> -->
 <!-- <a href="#" class="card-link text-left">Delete</a> -->
</div>
</div>`;
  return html;
};


class TaskManager {
    constructor (crurentId = 0) {
        this.crurentId = crurentId;
        this.tasks = [];
    }

    addTask(name, description, assignedTo, dueDate) {
        //const id = this.crurentId++;
        const task = {
          id:this.crurentId++,
          name:name,
          description: description,
          assignedTo: assignedTo,
          dueDate:dueDate,
          status:'TODO'
        }
        this.tasks.push(task);
    }

    getTaskById(taskId){
      //create a variable to store the found task
      let foundTask;
      // loop over the tasks and find the task with the id passed as a parameter
      for(let i = 0 ; i < this.tasks.length; i++){
        // get the current task in the loop 
        const task = this.tasks[i];
        // check if its the right task by comparing the task's id to the id passed as a parameter
        if(task.id === taskId){
          // store task in the found task variable
          foundTask = task;
        }
      }
      return foundTask;
    }
 

    //render method
  render(){
    let tasksHtmlList = [];
    for(let i = 0; i < this.tasks.length; i++){
      let currentTask = this.tasks[i];
      let date = new Date(currentTask.dueDate);
      //let formattedDate = date.toString();
     const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      // Pass the task id as a parameter 
      let taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate , currentTask.status);
      tasksHtmlList.push(taskHtml);
    }
     
   
      const  tasksHtml = tasksHtmlList.join('\n');
      const taskList = document.querySelector('#jsCard');
      taskList.innerHTML = tasksHtml;

    
  
  }
};
       
         

    
  
  }

  save(){
    let tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    let currentId = JSON.stringify(this.crurentId);
    localStorage.setItem('currentId', currentId);
  }

  load(){
    // check if any tasks are saved in localStorage
    if(localStorage.getItem('tasks')){
      // get the JSON string of tasks in localStorage
     let tasksJson =  localStorage.getItem('tasks');
     // Convert it to an array and store it in our TaskManager
      this.tasks = JSON.parse(tasksJson);
    }
    // check if the currentId is saved in loaclStorage
    if(localStorage.getItem('currentId')){
      // get the JSON string currentId in localStorage
     let currentId = localStorage.getItem('currentId');
     // convert currentId to a number and store it in our TaskManager 
      this.currentId = JSON.parse(currentId)
    }
  }
};

