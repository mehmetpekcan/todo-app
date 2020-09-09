import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/layouts/Home"

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    children: [
      {
        name: "Project",
        path: "/project/:name",
        component: () => import("@/views/ProjectContent")
      },
    ]
  },
]

export default new VueRouter({
  mode: "history",
  routes
})