<template>
  <div style="height: 100vh">
    <div class="row h-100 gradient-dark p-3 m-0">
      <div class="col-xl-4">
        <div class="row h-100">
          <div class="col-xl-12 d-flex flex-column justify-content-center">
            <div>
              <p class="mb-0 text-white font-size-32 font-weight-bold">Hi Mehmet</p>
              <p class="mb-0 font-size-12 text-light" style="opacity: .5;">Welcome back to the workspace, we missed you!</p>
            </div>
            <div class="w-50 mt-4">
              <search-bar></search-bar>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 bg-white" style="border-radius: 1rem;">
        <div class="row">
          <div class="col-xl-12 py-2">
            asd
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"

export default {
  components: {
    SearchBar
  }
}
</script>
