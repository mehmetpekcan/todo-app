<template>
  <div style="overflow-y: scroll !important;">
    <a-modal v-model="isNewTask" title="Add New Task" :footer="null">
      <new-task />
    </a-modal>

    <div class="d-flex justify-content-between align-items-center">
      <div class="title">
        <p class="mb-1 font-size-16 text-dark text-uppercase font-weight-bold">{{ project[0].project_name }}</p>
        <p class="mb-0 font-size-12 w-50 text-secondary">{{ project[0].project_description }}</p>
      </div>
      <div 
        @click="newTask"
        class="d-flex align-items-center bg-success text-white px-3 py-2 rounded"
        style="box-shadow: 0 5px 10px -8px rgb(6, 127, 22); cursor: pointer;"
        >
        <i class="fas fa-plus mr-2" />
        <span>Add New Task</span>
      </div>
    </div>
    <div class="todos--wrapper mt-5">
      <div class="d-flex align-items-center justify-content-between border-gray-3 pb-3 border-bottom">
        <div class="todos--title d-flex justify-content-between align-items-center">
          <p class="font-size-24 mb-0" style="font-weight: 600;">All</p>
        </div>
        <a-dropdown :trigger="['click']">
          <a @click="e => e.preventDefault()">
            Filter Workspace <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              All
            </a-menu-item>
            <a-menu-item key="1">
              Completed
            </a-menu-item>
            <a-menu-item key="2">
              Active
            </a-menu-item>
            <a-menu-item key="3">
              Deleted
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="todos--content-wrapper">
        <div class="todo my-4" v-for="(item, key) in 4" :key="key">
          <todo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo"
import NewTask from "@/views/NewTask"

export default {
  data() {
    return {
      isNewTask: false
    }
  },
  computed: {
    project() {
      return this.$store.state.projects.filter(item => item.project_shortname === this.$route.params.name)
    }
  },
  methods: {
    newTask() {
      this.isNewTask = true
    }
  },
  components: { Todo, NewTask },
}  
</script>
