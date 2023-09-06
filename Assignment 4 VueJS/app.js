const app = Vue.createApp({
  data() {
    return {
      enteredTasksValue: '',
      tasks: [],
      taskListIsVisible: true
    };
  },
  methods:{
    addTask() {
      this.tasks.push(this.enteredTasksValue);
    },
    hideList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  }

});

app.mount('#assignment');