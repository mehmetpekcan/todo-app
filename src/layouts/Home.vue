<template>
  <div class="h-100">
    <div class="row h-100 px-3 m-0">
      <div class="col-lg-4 my-3" style="overflow: hidden;">
        <div class="row h-100 d-flex justify-content-center">
          <div class="col-xl-9 d-flex flex-column justify-content-center">
            <div>
              <p class="mb-0 text-white font-size-36 font-weight-bold">Hi There</p>
              <p class="mb-0 font-size-14 text-light">Welcome back to the workspace, we missed you!</p>
            </div>
            <div class="my-4">
              <search-bar></search-bar>
            </div>
            <div>
              <p class="d-flex font-size-16 text-white mt-5">Projects <span class="font-size-14 text-light ml-2">({{ projects.length }})</span></p>
              <div class="projectCards">
                <transition-group name="list" tag="div" class="d-flex flex-wrap">
                  <div v-for="(item, key) in projects" :key="key" class="my-3 projectCard">
                    <router-link exact :to="{ name: 'Project', params: { name: item[1].project_shortname }}">
                      <project-card :project="item" :gradientKey="key" />
                    </router-link>
                  </div>
                  <div class="my-3 projectCard" :key="99" v-if="$store.state.projects.length <= 5">
                    <new-project-card />
                  </div>
                </transition-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 bg-white my-3" style="border-radius: 1rem; overflow-y: scroll;">
        <div class="row">
          <div class="col-xl-12" style="padding: 4rem;">
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
  computed: {
    newProject() {
      return this.$store.state.newProject
    },
    projects() {
      return this.$store.state.projects
    }
  },
  watch: {
    newProject () {
      this.$store.dispatch("get_projects")
    }
  },
  created() {
    this.$store.dispatch("get_projects")
  }
}
</script>

<style lang="scss" scoped>

.projectCards {
  width: 100%;

  & .projectCard {
    width: 30% !important;
    margin-right: 5%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>