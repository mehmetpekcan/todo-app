<template>
  <div style="overflow-y: scroll !important;">
    <a-modal v-model="$store.state.isNewTask" title="Add New Task" :footer="null" :destroyOnClose="true">
      <new-task :projectKey="project[0]" />
    </a-modal>

    <div class="d-flex justify-content-between align-items-center">
      <div class="title w-75" v-if="project.length > 0">
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
    <!--
    <div v-if="activeTasksTitle === 'All' && todos.length === 0" class="d-flex flex-column align-items-center">
      <div class="width-500" style="margin-top: 10rem;">
        <img class="w-100" src="@/assets/images/no-data.svg" alt="No todos">
      </div>
      <p class="font-weight-bold font-size-32 mt-3 mb-0">Currently, you don't have any todos.</p>
      <p>Create your first todo!</p>
    </div>
    -->
    <div class="todos--wrapper mt-5">
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
          <transition-group name="list" tag="div">
            <div class="todo my-4" v-for="item in todos" :key="item[0]">
              <todo :project="item" />
            </div>
          </transition-group>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo"
import NewTask from "@/views/NewTask"
import { mapActions } from "vuex"

export default {
  data() {
    return {
      project: "",
      activeTasksTitle: "All",
    }
  },
  computed: {
    newTodo() {
      return this.$store.state.newTodo
    },
    isDelete() {
      return this.$store.state.isDelete
    },
    todos() {
      return this.$store.state.todos
    }
  },
  mounted() {
    const getProjects = setInterval(() => {
      if (this.$store.state.projects.length > 0) {
        this.project = this.$store.state.projects.filter(item => item[1].project_shortname === this.$route.params.name)
        this.get_todos(this.project[0])
          .then(() => {
            this.filteredTodos = this.$store.state.todos
          })
        clearInterval(getProjects)
      }
    })
  },
  methods: {
    ...mapActions(['get_todos',]),
    filterChange(e) {
      this.activeTasksTitle = e
      this.$store.commit("SET_STATE", { todoSpin: true })
      this.get_todos(this.project[0])
        .then(() => {
          if (e === "All") {
            return
          } else if (e === "Actives") {
            const filteredTodos = this.todos.filter(item => item[1].completed === 0)
            this.$store.commit("SET_STATE", { todos: filteredTodos })
          } else {
            const filteredTodos = this.todos.filter(item => item[1].completed === 1)
            this.$store.commit("SET_STATE", { todos: filteredTodos })
          }

          this.$store.commit("SET_STATE", { todoSpin: false })
        })
    }
  },
  watch: {
    newTodo() {
      this.get_todos(this.project[0])
      this.$store.commit("SET_STATE", { newTodo: false })
    },
    isDelete(val) {
      if (val === false) {
        this.get_todos(this.project[0])
        this.$store.commit("SET_STATE", { isDelete: false })
      }
    }
  },
  components: { Todo, NewTask },
}  
</script>

<style>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>