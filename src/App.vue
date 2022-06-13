<template>
  <div id="app">
    <div class="app">
      <div class="title">
        <h1>Список задач</h1>
      </div>
      <TaskCreation :task="task"></TaskCreation>
      <TaskList :task="task"></TaskList>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import TaskCreation from "@/components/TaskCreation";
import TaskList from "@/components/TaskList";

export default {
  components: {TaskList, TaskCreation},
  data() {
    return {
      task: {
        name: "",
        description: "",
        completed: false,
        deleted: false
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app {
  width: 65%;
}

.title {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
