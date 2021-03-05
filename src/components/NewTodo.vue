<template>
  <div class="new-todo">
    <input v-model="task" type="text" placeholder="Nouvelle tâche ..." />
    <button type="submit" class="button is-primary" @click="createNewTask">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "new-todo",
  data: function () {
    return {
      task: "",
    };
  },
  methods: {
    ...mapActions(["createTask"]),
    createNewTask: function () {
      this.createTask(this.task);
      this.task = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-todo {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.new-todo input {
  height: 3rem;
  width: 15rem;
  appearance: none;
  border: none;
  border-bottom: 2px solid #00c4a7;
  background-color: transparent;
  outline: none;
  margin-right: 1rem;
}

.new-todo .button {
  width: 3rem;
  height: 3rem;
  border-radius: 999rem;
}
</style>
