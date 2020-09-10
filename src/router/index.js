import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/layouts/Home"

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    redirect: "/project",
    component: Home,
    children: [
      {
        path: "/project",
        component: () => import("@/views/Welcome")
      },
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