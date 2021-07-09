 
const task = new TaskManager();
const taskName = document.getElementById('name');
const description = document.getElementById('description');
const assignedTo = document.getElementById('select');
const dueDate = document.getElementById('dueDate');
const status = document.getElementById('status');
const submit = document.getElementById('send');
const cardDiv = document.getElementById('jsCard');


//submit.addEventListener('click', )

submit.addEventListener('click', function() {
    //task.addTask();
  task.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value);
   task.render();

   //console.log(task.tasks)
//     //console.log(dueDate.value);

//     let newDiv = document.createElement("div");

//     newDiv.innerHTML = `<div class="card col-lg-4 col-md-6 col-sm-12 px-0">
//     <div class="row cardimage">
//     <img
//       src="../ProjectOne/images/istockphoto-1153700372-612x612.jpg"
//       class="card-img-top "
//       alt="..."
//     />
//   </div>
//     <div class="card-header bg-secondary row justify-content-center">
//       <h5 class="card-title cardtitle">${task.tasks[0].name}</h5>
//     </div>
//     <div class="card-body cardgreen row justify-content-center my-0 py-0">
//     <ul class="list-group list-group-flush ">
//       <li class="list-group-item cardgreen border-0 " >${task.tasks[0].name}</li>
//       <li class="list-group-item cardgreen border-0  ">Description : ${task.tasks[0].description} </li>
//       <li class="list-group-item cardgreen border-0  ">AssignedTo : ${task.tasks[0].assignedTo}</li>
//       <li class="list-group-item cardgreen border-0 ">Due Date : ${task.tasks[0].dueDate}</li>
//       <li class="list-group-item cardgreen border-0 ">Status : ${task.tasks[0].status}</li>
//     </ul>
//   </div>
//     <div class="card-footer bg-secondary row ">
//       <div class="col">
//       <input type="checkbox" class="btn-check " id="btn-check-1" checked autocomplete="off">
//       <label class="btn btn-light  " for="btn-check-1">Done</label>
//     </div>
//     <div class="col ">
//       <input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
//       <label class="btn btn-light" for="btn-check-2">Delete</label>
//     </div>
//      <!-- <a href="#" class="card-link text-left">Done</a> -->
//      <!-- <a href="#" class="card-link text-left">Delete</a> -->
//     </div>
//     </div>`

//     cardDiv.append(newDiv);
 });

// const taskHtml = createTaskHtml('Momo', 'Make a Website', 'seble', '07/10/2021', 'Pending');

// console.log(taskHtml);

