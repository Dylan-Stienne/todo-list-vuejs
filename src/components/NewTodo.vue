<template>
  <div class="new-todo">
    <form>
      <input v-model="tache" type="text" placeholder="Nouvelle tâche ..." />
      <button type="submit" class="button is-primary" @click="sendTask">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "new-todo",
  methods: {
    sendTask: function () {
      if (this.tache != "") {
        this.$emit("newTask", this.tache);
        this.tache = "";
      }
    },
  },
  data: function () {
    return {
      tache: "",
    };
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
