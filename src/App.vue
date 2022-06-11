<template>
  <div id="app">

    <!-- Task creation -->
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

    <!-- Task list -->
    <div v-if="allTasks.length > 0">
      <div class="task" v-for="task in allTasks" :key="task.id">
        <div :style="crossOutTask(task)">
          <div><strong>Название:</strong>{{ task.name }}</div>
          <div><strong>Описание:</strong>{{ task.description }}</div>
        </div>
        <div>
          <button
              class="btn"
              @click="completeTask(task)">
            Завершить
          </button>
          <button
              class="btn"
              @click="deleteTask(task)">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <h2 v-else style="color: red">Задач нет</h2>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  data() {
    return {
      task: {
        name: "",
        description: "",
        completed: false,
        deleted: false
      }
    }
  },
  computed: mapGetters(["allTasks"]),
  methods: {
    ...mapActions(["getAllTasks", "postTask", "deleteTask", "completeTask"]),
    createTask(task) {
      this.postTask(task)
      this.task.name = ""
      this.task.description = ""
    },
    crossOutTask(task) {
      return task.completed ? "text-decoration: line-through" : "text-decoration: none"
    }
  },
  mounted() {
    this.getAllTasks()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin-left: 15px;
}

.task {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
