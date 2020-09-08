<template>
  <div class="search--input-wrapper d-flex align-items-center">
    <i class="fas fa-search ml-3" />
    <input type="text" class="search--input" placeholder="Search Task or Project..">
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.search--input-wrapper {
  background: $dark-gray;
  border-radius: 1rem;

  .fa-search {
    width: 5%;
    color: $light;
    opacity: .7;
    cursor: pointer;
  }

  .search--input {
    width: 95%;
    padding: .8rem .5rem;
    border: 0;
    color: $light;
    font-size: .8rem;
    opacity: .7;
    outline: none;
    background: none;

    &::placeholder {
      color: $light;
    }
  }
}
</style>