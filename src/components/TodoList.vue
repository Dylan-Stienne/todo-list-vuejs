<template>
  <ul class="todo-list">
    <li class="task" v-for="(task, index) in tasks" :key="index">
      <div class="is-flex align-item-center">
        <input type="checkbox" @click="checkTask(index)" v-model="task.done" />
        <span class="ml-3" :class="{ checked: task.done }">
          {{ task.name }}
        </span>
      </div>
      <button class="button is-danger" @click="removeTask(index)">
        <i class="fas fa-trash"></i>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "todo-list",
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["removeTask", "checkTask"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  width: 100%;
}
.todo-list .task {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.todo-list input {
  width: 1.5rem;
  height: 1.5rem;
}

.todo-list span.checked {
  text-decoration: line-through;
}

.todo-list button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999rem;
}
</style>
