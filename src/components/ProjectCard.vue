<template>
  <router-link exact :to="{ name: 'Project', params: { name: project.project_shortname }}">
    <div class="project--card-wrapper d-flex flex-column aling-items-center justify-content-center text-center">
      <div class="project--card d-flex align-items-center justify-content-center" :class="`gradient-${gradientKey + 1}`">
        <p class="mb-0 font-weight-bold font-size-28">{{ project[1].project_shortname }}</p>
      </div>
      <div class="project--card-name">
        <p class="font-size-14 text-light mb-0 mt-3">{{ project[1].project_name }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      required: true
    },
    gradientKey: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.project--card-wrapper {
  cursor: pointer;
  word-wrap: break-word !important;
  
  .project--card {
    height: 8rem;
    word-wrap: break-word !important;
    color: $white;
    border-radius: 1.5rem;
    
    p {
      word-wrap: break-word;
    }
  }
}
</style>