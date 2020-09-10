import Vue from "vue"

/** Ant Design Component Library */
import {
  Button, Dropdown,
  Input, Form,Select,
  Tag, Spin, Checkbox, notification,
  Modal, message, Popconfirm, Statistic,
  Tooltip, TimePicker
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Statistic)
Vue.use(Popconfirm)
Vue.use(Modal)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Form)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Spin)
Vue.use(Checkbox)

Vue.prototype.$notification = notification
Vue.prototype.$message = message
