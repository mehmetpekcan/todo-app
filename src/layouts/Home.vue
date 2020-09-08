<template>
  <div style="height: 100vh">
    <div class="row h-100 gradient-dark p-3 m-0">
      <div class="col-xl-4">
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
              <p class="d-flex font-size-16 text-white mt-5">Projects <span class="font-size-14 text-light ml-2">(3)</span></p>
              <div class="d-flex flex-wrap justify-content-between">
                <div v-for="(item, key) in 6" :key="key" class="my-2">
                  <project />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 bg-white" style="border-radius: 1rem;">
        <div class="row">
          <div class="col-xl-12 py-2">
            <p class="font-size-16 text-dark">asdsad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import Project from "@/components/Project"

export default {
  components: { SearchBar, Project }
}
</script>
