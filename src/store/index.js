import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    newProject: false,
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
    async post_newTodo({ commit }, payload) {
      const id = parseInt(Math.random() * 100 + Math.random() * 200)
      const res = await axios.patch(`https://todo-app-11-7692e.firebaseio.com/projects/${payload.projectKey}/todos/${id}.json`, { 
        ...payload.data
      })
      commit("SET_STATE")
      console.log("bu res", res)
    }
  },

  /*----------------------------------------
  | Small size projects don't need modules
  | seperate
  ----------------------------------------*/
  modules: {}
});
