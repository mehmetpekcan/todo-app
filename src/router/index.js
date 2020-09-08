import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/layouts/Home"

Vue.use(VueRouter)

const routes = [
  { name: 'Home', path: '/', component: Home }
]

export default new VueRouter({
  mode: "history",
  routes
})