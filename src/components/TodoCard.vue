<template>
  <div class="todo-card">
    <div class="head">
      <b>{{ today }}</b>
      <span class="has-text-primary">{{ title }}</span>
      <b v-if="tasks.length <= 1">{{ tasks.length }} tâche</b>
      <b v-else>{{ tasks.length }} tâches</b>
    </div>
    <div class="new">
      <NewTodo @newTask="addTask" />
    </div>
    <div class="actions mb-3">
      <button class="button is-warning" @click="removeAllTasksDone">
        <i class="fas fa-trash mr-3"></i> les tâches terminées
      </button>
      <button class="button is-danger" @click="removeAllTasks">
        <i class="fas fa-trash mr-3"></i> toutes les tâches
      </button>
    </div>
    <ul class="tasks">
      <TodoList :tasks="tasks" @check="checkTask" @remover="removeTask" />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import NewTodo from "@/components/NewTodo.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "todo-card",
  components: {
    NewTodo,
    TodoList,
  },
  props: {
    title: {
      default: "",
    },
  },
  data: function () {
    return { tasks: [] };
  },
  methods: {
    addTask: function (tache) {
      this.tasks.push({ name: tache, done: false });
    },
    removeTask: function (index) {
      this.tasks.splice(index, 1);
    },
    removeAllTasks: function () {
      this.tasks = [];
    },
    removeAllTasksDone: function () {
      this.tasks = this.tasks.filter((task) => task.done === false);
    },
    checkTask: function (index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
  computed: {
    today: function () {
      return new Date().toLocaleString("fr-FR", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-card {
  width: 100%;
  max-width: 30rem;
  background-color: whitesmoke;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px rgb(136, 136, 136);
}

.todo-card .actions {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.todo-card .head {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 5px rgb(194, 193, 193);
  padding: 1rem;
}
</style>
