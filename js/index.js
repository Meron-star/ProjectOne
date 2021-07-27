
 // instantiating taskManager
const taskManager = new TaskManager(0);
// call load function
taskManager.load();
// render
taskManager.render();

 

const taskName = document.getElementById('name');
const description = document.getElementById('description');
const assignedTo = document.getElementById('select');
const dueDate = document.getElementById('dueDate');



const submit = document.getElementById('send');
const cardDiv = document.getElementById('jsCard');








 // alert message access variables 

const nameAlert = document.getElementById('alertMsg');
const descAlert = document.getElementById('alertDesc');
const assignedToAlert = document.getElementById('alertAssigned');
const dueDateAlert = document.getElementById('alertdueDate');
const statusAlert = document.getElementById('alertStatus');



// form validation 
const validFormFieldInput = () => {
  let nameTaskVal = taskName.value;
  console.log('name :' + nameTaskVal );
  let descVal = description.value;
  console.log('desc :' + descVal)
  let assignedToVal = assignedTo.value;
  console.log('assign :' + assignedToVal)
  let dueDateVal = dueDate.value;
  console.log('dueDate :' + dueDateVal )

 


 if(nameTaskVal === '' ){

   nameAlert.classList.remove('d-none');
   setTimeout(function(){
    nameAlert.classList.add('d-none');
  }, 3000);
 } else if(descVal === ''){

   descAlert.classList.remove('d-none');
   setTimeout(function(){
    descAlert.classList.add('d-none');
  }, 3000);
 } else if(assignedToVal=== '' || assignedToVal==='Open this select menu'){

   assignedToAlert.classList.remove('d-none');
   setTimeout(function(){
    assignedToAlert.classList.add('d-none');
  }, 3000);
 } else if(dueDateVal === '' ){


  dueDateAlert.classList.remove('d-none');
   setTimeout(function(){
    dueDateAlert.classList.add('d-none');
  }, 3000);
 } 


 else {

   return true;
 }
 
}   





// add task 
 

submit.addEventListener('click', function() {
  // call form input validation function 
 let valid = validFormFieldInput();
  if(valid){

    //task.addTask();
  taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value);
   taskManager.render();
  } else {
    return true;
  }

  
});
  
  

// Select task list 
const taskList = document.querySelector('#jsCard')
taskList.addEventListener('click', (event) => { 

  if(event.target.classList.contains('done-button') ){

    // get parent task 
  const parentTask = event.target.parentElement.parentElement;
  // get the taskId of the parent task
  const taskId = Number(parentTask.dataset.taskId);
  //get the task from the TaskManager using the taskId
  const task = taskManager.getTaskById(taskId);
  //update the task status to 'DONE'
  task.status = 'DONE';
  //Render the new tasks 
  taskManager.save();
  taskManager.render();
  };

});










  

  
});
  

// Select task list 
const taskList = document.querySelector('#jsCard')
taskList.addEventListener('click', (event) => { 

  if(event.target.classList.contains('done-button') ){

    // get parent task 
  const parentTask = event.target.parentElement.parentElement;
  // get the taskId of the parent task
  const taskId = Number(parentTask.dataset.taskId);
  //get the task from the TaskManager using the taskId
  const task = taskManager.getTaskById(taskId);
  //update the task status to 'DONE'
  task.status = 'DONE';
  //Render the new tasks 
  taskManager.render();
  };


});

  
  


  
 
 
 
 
  



