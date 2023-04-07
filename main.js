var app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    mounted() {
        if(localStorage.getItem('tasks')) {
            try {
                this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } catch(e) {
                localStorage.removeItem('tasks');
            }
        }
    },
    methods: {
        // Add the task
        addTask: function() {
            if (this.newTask.trim() === '') return;

            this.tasks.push({
                title: this.newTask,
                completed: false
            });

            this.newTask = '';
            this.saveTasks();
        },

        // Toggle the task when it's completed
        toggleTask: function(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.saveTasks();
        },

        // Delete the task
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        },

        // Save the task in the local storage
        saveTasks: function() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
})