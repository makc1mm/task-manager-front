<template>
  <div v-if="allTasks.length > 0">
    <Task :tasks="allTasks"></Task>
  </div>
  <h2 v-else style="color: red">Задач нет</h2>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Task from "@/components/Task";

export default {
  components: {Task},
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters(["allTasks"]),
  methods: {
    ...mapActions(["getAllTasks"])
  },
  mounted() {
    this.getAllTasks()
  }
}
</script>

<style scoped>

</style>
