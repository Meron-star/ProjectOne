
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
let html = `<div data-task-id=${id} class="card col-lg-4 col-md-6 col-sm-12 px-4 my-2">
<div class="row cardimage">
<img
  src="../ProjectOne/images/istockphoto-1153700372-612x612.jpg"
  class="card-img-top "
  alt="..."
/>
</div>
<div  id = 'resetUse' class="card-header bg-secondary row justify-content-center">
<h5 class="card-title cardtitle">Task: ${id}</h5>
</div>
<div class="card-body cardgreen row justify-content-center my-0 py-0">
<ul class="list-group list-group-flush ">
  
  <li class="list-group-item cardgreen border-0  ">Description : ${description} </li>
  <li class="list-group-item cardgreen border-0  ">AssignedTo : ${assignedTo}</li>
  <li class="list-group-item cardgreen border-0 ">Due Date : ${dueDate}</li>
  <li class="badge list-group-item cardgreen border-0 ${status === 'TODO'? 'badge-primary': 'badge-success'} ">Status:${status}</li>
</ul>
</div>

<button class="btn btn-success done-button   ${status === 'TODO' ? 'visible' : 'invisible'}" type="button">Mark As Done</button>
<button  class="btn  btn-danger delete-button" id="btn-2" >Delete</button>
</div>`;
  return html;
};



// class TaskManager object and methods 

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


// Create the Delete task method 
    deleteTask(taskId){
      // Create an empty array and store it in a new variable, new tasks 
      let newTasks = [];
      //loop over the tasks 
      for(let i = 0; i < this.tasks.length; i++){
        // get the current task in the loop
        let task = this.tasks[i];
        // check if the task id is not the task id passed as a parameter 
        if(task.id !== taskId){

          // push the task to the newTasks array
          newTasks.push(task);
        }

        
      }
      this.tasks = newTasks;
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
       



