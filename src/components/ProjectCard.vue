<template>
  <router-link exact :to="{ name: 'Project', params: { name: project.slug }}">
    <div class="project--card-wrapper d-flex flex-column aling-items-center justify-content-center text-center">
      <div class="project--card d-flex align-items-center justify-content-center">
        <p class="mb-0">{{ project.shorthand }}</p>
      </div>
      <div class="project--card-name">
        <p class="font-size-14 text-light mb-0 mt-2">{{ project.name }}</p>
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
    background: linear-gradient(45deg, $blue-dark, $blue);
    color: $white;
    border-radius: .8rem;
  }
}
</style>