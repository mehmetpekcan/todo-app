import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    newProject: false,
    newTodo: false,
    todoSpin: false,
    isCreatingNewTodo: false,
    todos: [],
    isNewTask: false,
    emptyTodos: false,
    isDelete: false,
    currentProjectID: ""
  },
  mutations: {
    SET_STATE(state, payload) {
      Object.assign(state, { ...payload })
    },
  },
  actions: {
    /*-----------------------------------
    | To get saved projects
    -----------------------------------*/
    async get_projects({ commit }) {
      const res = await axios.get("https://todo-app-11-7692e.firebaseio.com/projects.json")
      if (res.data !== null) {
        commit("SET_STATE", { projects: Object.entries(res.data) })
        return true
      }
    },
    /*-----------------------------------
    | To post new project
    -----------------------------------*/
    async post_newProject({ commit }, payload) {
      const res = await axios.post("https://todo-app-11-7692e.firebaseio.com/projects.json", {
        id: parseInt(Math.random() * 10 + Math.random() * 20),
        ...payload
      })
      if (res.name !== null) {
        commit("SET_STATE", { newProject: false })
        return true
      }
    },
    /*-----------------------------------
    |
    | To post new todo
    | @projectKey: which project you want to add new todo
    | @id: todo id for firebase key value
    |
    -----------------------------------*/
    async post_newTodo({ commit }, payload) {
      commit("SET_STATE", { isCreatingNewTodo: true })

      const projectKey = payload.projectKey
      const id = parseInt(Math.random() * 100 + Math.random() * 200)
      const res = await axios.patch(`https://todo-app-11-7692e.firebaseio.com/projects/${projectKey}/todos/${id}.json`, { 
        ...payload.data,
        completed: 0
      })
      if (res.data !== null) {
        commit("SET_STATE", { newTodo: true })
        commit("SET_STATE", { isNewTask: false })
        commit("SET_STATE", { isCreatingNewTodo: false })
      }
    },
    /*-----------------------------------
    |
    | To get todos based on project id,
    | @payload[0] represent id
    |
    -----------------------------------*/
    async get_todos({ commit }, payload) {
      const projectId = payload[0]

      commit("SET_STATE", { todoSpin: true })
      const res = await axios.get(`https://todo-app-11-7692e.firebaseio.com/projects/${projectId}/todos.json`)
      commit("SET_STATE", { currentProjectID: projectId })

      if (res.data !== null) {
        commit("SET_STATE", { todos: Object.entries(res.data) })
        commit("SET_STATE", { emptyTodos: false })
        commit("SET_STATE", { todoSpin: false })
      } else {
        commit("SET_STATE", { emptyTodos: true })
        commit("SET_STATE", { todoSpin: false })
      }
    },
    async delete_todo({ commit, state }, payload) {
      commit("SET_STATE", { isDelete: true })
      await axios.delete(`https://todo-app-11-7692e.firebaseio.com/projects/${state.currentProjectID}/todos/${payload}.json`)
      commit("SET_STATE", { isDelete: false })
    },
    async change_todoStatus({ state }, payload) {
      const { completed } = payload
      await axios.patch(`https://todo-app-11-7692e.firebaseio.com/projects/${state.currentProjectID}/todos/${payload.id}.json`, { 
        completed
      })
    }
  },

  /*----------------------------------------
  | Small size projects don't need modules
  | seperate
  ----------------------------------------*/
  modules: {}
});
