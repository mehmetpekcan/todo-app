import Vue from "vue"

/** Ant Design Component Library */
import {
  Avatar, TreeSelect, Rate, Breadcrumb, InputNumber, Steps,
  Upload, Button, Layout, Table, Icon, Progress, Radio, Dropdown, Menu,
  Carousel, Input, Calendar, Badge, Slider, Form, Tooltip, Select, Switch,
  Tag, Affix, Spin, Alert, Checkbox, Tabs, Pagination, notification, Drawer,
  Cascader, DatePicker, TimePicker, Divider, Anchor, AutoComplete, BackTop, Collapse, Card, List, Popover,
  Tree, Timeline, Row, Col, Transfer, Modal, message, Popconfirm, Skeleton, ConfigProvider, Comment,
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


Vue.use(Skeleton)
Vue.use(Avatar)
Vue.use(Popconfirm)
Vue.use(Transfer)
Vue.use(Modal)
Vue.use(Divider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Timeline)
Vue.use(Tree)
Vue.use(Popover)
Vue.use(List)
Vue.use(Card)
Vue.use(Button)
Vue.use(Rate)
Vue.use(TreeSelect)
Vue.use(Breadcrumb)
Vue.use(Layout)
Vue.use(Table)
Vue.use(Icon)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(Calendar)
Vue.use(Badge)
Vue.use(Slider)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Affix)
Vue.use(Spin)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Tabs)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Steps)
Vue.use(InputNumber)
Vue.use(Drawer)
Vue.use(Switch)
Vue.use(Cascader)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Anchor)
Vue.use(AutoComplete)
Vue.use(Collapse)
Vue.use(BackTop)
Vue.use(ConfigProvider)
Vue.use(Comment)

Vue.prototype.$notification = notification
Vue.prototype.$message = message
