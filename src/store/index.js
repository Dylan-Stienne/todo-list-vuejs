import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    CHECK_TASK(state, index) {
      state.tasks[index].done = !state.tasks[index].done;
    },
    CREATE_TASK(state, task) {
      state.tasks.push(task);
    },
    REMOVE_ALL_TASKS(state) {
      state.tasks = [];
    },
    REMOVE_ALL_TASKS_DONE(state) {
      state.tasks = state.tasks.filter((task) => task.done === false);
    },
  },
  actions: {
    removeTask(context, index) {
      context.commit('REMOVE_TASK', index);
    },
    checkTask(context, index) {
      context.commit('CHECK_TASK', index);
    },
    createTask(context, task) {
      if (task != "") {
        let newTask = { name: task, done: false };
        context.commit('CREATE_TASK', newTask);
      }
    },
    removeAllTasks(context) {
      context.commit('REMOVE_ALL_TASKS');
    },
    removeAllTasksDone(context) {
      context.commit('REMOVE_ALL_TASKS_DONE');
    },
  },
  modules: {
  }
})