<template>
  <form @submit.prevent>
    <h4>Создание задачи</h4>
    <input
        class="input"
        type="text"
        placeholder="Название"
        v-model="task.name">
    <input
        class="input"
        type="text"
        placeholder="Описание"
        v-model="task.description">
    <button
        class="btn"
        type="submit"
        style="margin-top: 15px; margin-right: 15px;"
        @click="createTask(task)">
      Создать
    </button>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["postTask"]),
    createTask(task) {
      this.postTask(task)
      this.task.name = ""
      this.task.description = ""
    }
  }

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
