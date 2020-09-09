<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("get_projects")
  }
}
</script>