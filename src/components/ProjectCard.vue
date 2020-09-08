<template>
  <router-link exact :to="{ name: 'Project', params: { name: project.slug }}">
    <div class="project--card-wrapper d-flex flex-column aling-items-center justify-content-center text-center">
      <div class="project--card d-flex align-items-center justify-content-center" :class="`gradient-${project.key}`">
        <p class="mb-0 font-weight-bold font-size-28">{{ project.shorthand }}</p>
      </div>
      <div class="project--card-name">
        <p class="font-size-14 text-light mb-0 mt-3">{{ project.name }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.project--card-wrapper {
  cursor: pointer;
  
  .project--card {
    width: 8.5rem;
    height: 8.5rem;
    color: $white;
    border-radius: 1.5rem;
  }
}
</style>