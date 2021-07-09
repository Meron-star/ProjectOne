
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
return `<div class="card col-lg-4 col-md-6 col-sm-12 px-0">
<div class="row cardimage">
<img
  src="../ProjectOne/images/istockphoto-1153700372-612x612.jpg"
  class="card-img-top "
  alt="..."
/>
</div>
<div class="card-header bg-secondary row justify-content-center">
//   <h5 class="card-title cardtitle">${name}</h5>
</div>
<div class="card-body cardgreen row justify-content-center my-0 py-0">
<ul class="list-group list-group-flush ">
  <li class="list-group-item cardgreen border-0 " >${name}</li>
  <li class="list-group-item cardgreen border-0  ">Description : ${description} </li>
  <li class="list-group-item cardgreen border-0  ">AssignedTo : ${assignedTo}</li>
  <li class="list-group-item cardgreen border-0 ">Due Date : ${dueDate}</li>
  <li class="list-group-item cardgreen border-0 ">Status : ${status}</li>
</ul>
</div>
<div class="card-footer bg-secondary row ">
  <div class="col">
  <input type="checkbox" class="btn-check " id="btn-check-1" checked autocomplete="off">
  <label class="btn btn-light  " for="btn-check-1">Done</label>
</div>
<div class="col ">
  <input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
  <label class="btn btn-light" for="btn-check-2">Delete</label>
</div>
 <!-- <a href="#" class="card-link text-left">Done</a> -->
 <!-- <a href="#" class="card-link text-left">Delete</a> -->
</div>
</div>`;

};




class TaskManager {
    constructor (crurentId = 0) {
        this.crurentId = crurentId;
        this.tasks = [];
    }

    addTask(name, description, assignedTo, dueDate, status = 'To Do') {
        const id = this.crurentId++;
        this.tasks.push({id : id, name, description, assignedTo, dueDate, status});
    }


};



















