<template>
  <div class="search--input-wrapper d-flex align-items-center">
    <i class="fas fa-search ml-3" />
    <input
      v-model="searchFor"
      type="text"
      class="search--input"
      @input="search"
      placeholder="Search Task or Project.."
      >
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchFor: "",
      oldSearchFor: ""
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    projects() {
      return this.$store.state.projects
    }
  },
  methods: {
    search() {
      /* Searching in todos */
      this.$store.commit("SET_STATE", { todoSpin: true })
      const filteredTodos = this.todos.filter(item => item[1].description.toLowerCase().match(this.searchFor.toLowerCase()))
      this.$store.commit("SET_STATE", { todos: filteredTodos })
      this.$store.commit("SET_STATE", { todoSpin: false })
      
      /* Searching in projects */
      const filteredProjects = this.projects.filter(item => item[1].project_name.toLowerCase().match(this.searchFor.toLowerCase()))
      this.$store.commit("SET_STATE", { projects: filteredProjects })
    }
  },
  watch: {
    searchFor() {
      if(this.searchFor.length < this.oldSearchFor.length) {
        this.$store.dispatch("get_todos", [this.$store.state.currentProjectID])
          .then(() => {
            this.search()
          })
        this.$store.dispatch("get_projects")
          .then(() => {
            this.search()
          })
      }
      this.oldSearchFor = this.searchFor
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.search--input-wrapper {
  background: $dark-gray;
  border-radius: 1rem;

  .fa-search {
    width: 5%;
    color: $light;
    opacity: .7;
    cursor: pointer;
  }

  .search--input {
    width: 95%;
    padding: .8rem .5rem;
    border: 0;
    color: $light;
    font-size: .8rem;
    opacity: .7;
    outline: none;
    background: none;

    &::placeholder {
      color: $light;
    }
  }
}
</style>