<template>
  <ul class="todo-list">
      <li class="task" v-for="(task, index) in tasks" :key="index">
        <div class="is-flex align-item-center">
          <input type="checkbox" @click="check(index)" v-model="task.done" />
          <span class="ml-3" :class="{ checked: task.done }">{{
            task.name
          }}</span>
        </div>
        <button class="button is-danger" @click="remover(index)">
          <i class="fas fa-trash"></i>
        </button>
      </li>
  </ul>
</template>

<script>

export default {
  name: "todo-list",
  props: {
    tasks: { default: [] },
  },
  methods: {
    check: function (index) {
      this.$emit("check", index);
    },
    remover: function (index) {
      this.$emit("remover", index);
    },
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
