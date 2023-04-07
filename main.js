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
        addTask: function() {
            if (this.newTask.trim() === '') return;

            this.tasks.push({
                title: this.newTask,
                completed: false
            });

            this.newTask = '';
            this.saveTasks();
        },
        toggleTask: function(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.saveTasks();
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        },
        saveTasks: function() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
})