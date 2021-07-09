class TaskManager {
    constructor (crurentId = 0) {
        this.crurentId = crurentId;
        this.tasks = [];
    }

    addTask(name, description, assignedTo, dueDate, status = 'To Do') {
        const id = this.crurentId++;
        this.tasks.push({id : id, name, description, assignedTo, dueDate, status});
    }


}
















