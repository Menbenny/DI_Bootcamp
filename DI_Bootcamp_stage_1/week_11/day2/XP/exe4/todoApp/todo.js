// ! create a class of methods that complete tasks
// ! Call the class in a different file to call the tasks
// ! after creating a list of tasks, 
// ! Mark the tasks as completed 



class TodoList {
    constructor(description) {
        // this.name = name
       this.description = description
       this.completed = false;
    }
    // local function
    /**
     * @description : Marks task as completed 
     * @created : 16/7/24 - 17:20
     * @author : Menac_B
     */

    markAsCompleted() {
        this.completed = true;
    }
}

// global function

