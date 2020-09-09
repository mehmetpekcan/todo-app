import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

/** Ant Design Component Library */
import "@/Antd"

/**
 * 
 * Project general css files.
 * Change here if you want to
 * change presets.
 * 
 */
import "@/assets/styles/style.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
