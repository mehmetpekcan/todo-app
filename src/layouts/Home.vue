<template>
  <div style="height: 100vh">
    <div class="row h-100 gradient-dark p-3 m-0">
      <div class="col-xl-4" style="overflow: hidden;">
        <div class="row h-100 d-flex justify-content-center">
          <div class="col-xl-9 d-flex flex-column justify-content-center">
            <div>
              <p class="mb-0 text-white font-size-36 font-weight-bold">Hi Mehmet</p>
              <p class="mb-0 font-size-14 text-light">Welcome back to the workspace, we missed you!</p>
            </div>
            <div class="my-4">
              <search-bar></search-bar>
            </div>
            <div>
              <p class="d-flex font-size-16 text-white mt-5">Projects <span class="font-size-14 text-light ml-2">({{ $store.state.projects.length }})</span></p>
              <div class="d-flex flex-wrap justify-content-between">
                <div v-for="(item, key) in $store.state.projects" :key="key" class="my-3" style="width: 30%;">
                  <project-card :project="item" :gradientKey="key" />
                </div>
                <div class="my-3" style="width: 30%;">
                  <new-project-card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 bg-white h-100" style="border-radius: 1rem; overflow-y: scroll;">
        <div class="row">
          <div class="col-xl-12" style="padding: 5rem;">
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path" />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import ProjectCard from "@/components/ProjectCard"
import NewProjectCard from "@/components/NewProjectCard"

export default {
  components: { SearchBar, ProjectCard, NewProjectCard },
  created() {
    this.$store.dispatch("get_projects")
  },
  watch: {
    'this.$store.state.newProject' () {
      console.log("asd")
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>