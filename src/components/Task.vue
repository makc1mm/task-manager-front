<template>
  <div>
    <div class="task" v-for="task in tasks" :key="task.id">
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
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(["deleteTask", "completeTask"]),
    crossOutTask(task) {
      return task.completed ? "text-decoration: line-through" : "text-decoration: none"
    }
  }
}
</script>

<style scoped>
.task {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
