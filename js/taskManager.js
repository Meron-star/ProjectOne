class TaskManager {
    constructor (crurentId = 0) {
        this.crurentId = crurentId;
        this.tasks = [];
    }

    addTask(name, description, assignedTo, dueDate, status = 'To Do') {
        this.crurentId++;
    this.tasks.push(name, description, assignedTo, dueDate, status);
    }


}
















