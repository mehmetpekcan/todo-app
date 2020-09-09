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
    todos: [],
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
      commit("SET_STATE", { projects: Object.entries(res.data) })
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
      const id = parseInt(Math.random() * 100 + Math.random() * 200)
      const res = await axios.patch(`https://todo-app-11-7692e.firebaseio.com/projects/${payload.projectKey}/todos/${id}.json`, { 
        ...payload.data
      })
      if (res.data !== null) {
        commit("SET_STATE", { newTodo: true })
      }
    },
    async get_todos({ commit }, payload) {
      commit("SET_STATE", { todoSpin: true })
      const res = await axios.get(`https://todo-app-11-7692e.firebaseio.com/projects/${payload[0]}/todos.json`)
      
      commit("SET_STATE", { todos: Object.entries(res.data) })
      commit("SET_STATE", { todoSpin: false })
      
    }
  },

  /*----------------------------------------
  | Small size projects don't need modules
  | seperate
  ----------------------------------------*/
  modules: {}
});
