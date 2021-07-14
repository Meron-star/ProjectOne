 
const task = new TaskManager();
const taskName = document.getElementById('name');
const description = document.getElementById('description');
const assignedTo = document.getElementById('select');
const dueDate = document.getElementById('dueDate');
const status = document.getElementById('status');
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
  let statusVal = status.value;
  console.log('status :' + statusVal );

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
 } else if(statusVal === '' || statusVal === 'Open this select menu') {

   statusAlert.classList.remove('d-none');
   
   setTimeout(function(){
    statusAlert.classList.add('d-none');
  }, 3000);

 } else {

   return true;
 }
 
}   


    //   setTimeout(function(){
    //   nameAlert.classList.add('d-none');
    //   descAlert.classList.add('d-none');
    //   assignedToAlert.classList.add('d-none');
    //   dueDateAlert.classList.add('d-none');
    //   statusAlert.classList.add('d-none');


  //   // }, 3000);

  // } else {
  // }
  
//}

// on submit 
  
submit.addEventListener('click', function() {
  // call form input validation function 
 let valid = validFormFieldInput();
  if(valid){

    //task.addTask();
  task.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value);
   task.render();
  } 
  


 });
 
 
 
 
  



