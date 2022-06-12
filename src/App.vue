<template>
  <div id="app">
    <TaskCreation :task="task"></TaskCreation>
    <TaskList :task="task"></TaskList>
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

.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin-left: 15px;
}
</style>
