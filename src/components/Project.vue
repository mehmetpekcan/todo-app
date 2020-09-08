<template>
  <div>
    <div class="project--wrapper d-flex flex-column aling-items-center justify-content-center text-center">
      <div class="project d-flex align-items-center justify-content-center">
        <p class="mb-0">GH</p>
      </div>
      <div class="project--name">
        <p class="font-size-14 text-light mb-0 mt-2">Green House</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.project--wrapper {
  cursor: pointer;
  
  .project {
    width: 8.5rem;
    height: 8.5rem;
    background: linear-gradient(45deg, $blue-dark, $blue);
    color: $white;
    border-radius: .8rem;
  }
}
</style>