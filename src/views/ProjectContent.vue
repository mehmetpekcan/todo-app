<template>
  <div style="overflow-y: scroll !important;">
    <a-modal v-model="$store.state.isNewTask" title="Add New Task" :footer="null" :destroyOnClose="true">
      <new-task :projectKey="project[0]" />
    </a-modal>

    <div class="d-flex justify-content-between align-items-center">
      <div class="title" v-if="project.length > 0">
        <p class="mb-1 font-size-16 text-dark text-uppercase font-weight-bold">{{ project[0][1].project_name }}</p>
        <p class="mb-0 font-size-12 text-secondary">{{ project[0][1].project_description }}</p>
      </div>
      <div 
        @click="$store.commit('SET_STATE', { isNewTask: true })"
        class="d-flex align-items-center bg-success text-white px-3 py-2 rounded"
        style="box-shadow: 0 5px 10px -8px rgb(6, 127, 22); cursor: pointer;"
        >
        <i class="fas fa-plus mr-2" />
        <span>Add New Task</span>
      </div>
    </div>
    <div class="todos--wrapper mt-5" v-if="$store.state.todos.length > 0">
      <div class="d-flex align-items-center justify-content-between border-gray-3 pb-3 border-bottom">
        <div class="todos--title d-flex justify-content-between align-items-center">
          <p class="font-size-24 mb-0" style="font-weight: 600;">{{ activeTasksTitle }}</p>
        </div>
        
        <a-select default-value="All" style="width: 10rem" @change="filterChange">
          <a-select-option value="All">
            All
          </a-select-option>
          <a-select-option value="Actives">
            Actives
          </a-select-option>
          <a-select-option value="Completed">
            Completed
          </a-select-option>
        </a-select>
      </div>
      <div class="todos--content-wrapper">
        <a-spin :spinning="$store.state.todoSpin" tip="Todos fetching...">
          <div class="todo my-4" v-for="(item, key) in $store.state.todos" :key="key">
            <todo :project="item" />
          </div>
        </a-spin>
      </div>
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <div class="width-500" style="margin-top: 10rem;">
        <img class="w-100" src="@/assets/images/no-data.svg" alt="No todos">
      </div>
      <p class="font-weight-bold font-size-32 mt-3 mb-0">Currently, you don't have any todos.</p>
      <p>Create your first todo!</p>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo"
import NewTask from "@/views/NewTask"

export default {
  data() {
    return {
      project: "",
      activeTasksTitle: "All"
    }
  },
  computed: {
    newTodo() {
      return this.$store.state.newTodo
    },
    isDelete() {
      return this.$store.state.isDelete
    },
  },
  mounted() {
    const getProjects = setInterval(() => {
      if (this.$store.state.projects.length > 0) {
        this.project = this.$store.state.projects.filter(item => item[1].project_shortname === this.$route.params.name)
        this.$store.dispatch("get_todos", this.project[0])
        clearInterval(getProjects)
      }
    })
  },
  methods: {
    filterChange(e) {
      this.activeTasksTitle = e
    }
  },
  watch: {
    newTodo() {
      this.$store.dispatch("get_todos", this.project[0])
    },
    isDelete(val) {
      if (val === false) {
        this.$store.dispatch("get_todos", this.project[0])
      }
    }
  },
  components: { Todo, NewTask },
}  
</script>
