import axios from "axios";

export default {
    state: {
        tasks: []
    },
    getters: {
        allTasks(state) {
            return state.tasks
        }
    },
    mutations: {
        get(state, tasks) {
            state.tasks = tasks
        },
        create(state, task) {
            state.tasks.push(task)
        },
        delete(state, task) {
            const index = state.tasks.findIndex(t => t.id === task.id)
            state.tasks[index] = task
            state.tasks = state.tasks.filter(t => t.deleted === false)
        },
        update(state, task) {
            Object.assign(
                state.tasks.find(t => t.id === task.id),
                task
            )
        }
    },
    actions: {
        getAllTasks(ctx) {
            axios.get("/api/actual").then(response =>
                ctx.commit("get", response.data)
            )
        },
        postTask(ctx, task) {
            axios.post("/api/create", task).then(response =>
                ctx.commit("create", response.data)
            )
        },
        deleteTask(ctx, task) {
            axios.delete(`/api/delete/${task.id}`).then(response =>
                ctx.commit("delete", response.data)
            )
        },
        completeTask(ctx, task) {
            axios.put(`/api/complete/${task.id}`).then(response =>
                ctx.commit("update", response.data)
            )
        }
    }
}
