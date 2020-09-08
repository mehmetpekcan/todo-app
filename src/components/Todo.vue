<template>
<div>
  <div class="todo--check">
    <i class="fas fa-check" :class="{ 'd-none': !isCompleted }" />
    <input type="checkbox" v-model="isCompleted">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isCompleted: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";

.todo--check {
  border: 2px solid $dark-gray;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  position: relative;

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    height: 100%;
    width: 100%;
  }

  .fa-check {
    color: $dark-gray;
  }
}
</style>