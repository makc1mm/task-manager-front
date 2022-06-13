<template>
  <div>
    <button class="btn" @click="showCreation">Создать задачу</button>

    <div class="dialog" v-if="creationVisible" @click="hideCreation">
      <div @click.stop class="content">
        <form @submit.prevent>
          <h4>Создание задачи</h4>
          <input
              type="text"
              placeholder="Название"
              v-model="task.name">
          <input
              type="text"
              placeholder="Описание"
              v-model="task.description">
          <button
              class="btn"
              type="submit"
              style="margin-top: 15px;"
              @click="createTask(task)">
            Создать
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      creationVisible: false
    }
  },
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
      this.creationVisible = false
    },
    showCreation() {
      this.creationVisible = true
    },
    hideCreation() {
      this.creationVisible = false
    }
  }

}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.content {
  margin: auto;
  background: white;
  border-radius: 10px;
  padding: 20px;
  min-height: 70px;
  min-width: 550px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
