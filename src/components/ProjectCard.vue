<template>
  <div>
    <div class="project--card-wrapper d-flex flex-column aling-items-center justify-content-center text-center position-relative"
      @mouseenter="deleteHover = true" @mouseleave="deleteHover = false">
      <div class="delete" @click="$store.dispatch('delete_project', project)" :class="deleteHover ? 'd-flex' : 'd-none'">
        <i class="fas fa-trash"></i>
      </div>
      <div class="project--card d-flex align-items-center justify-content-center" :class="`gradient-${gradientKey + 1}`">
        <p class="mb-0 font-weight-bold font-size-28">{{ project[1].project_shortname }}</p>
      </div>
      <div class="project--card-name">
        <p class="font-size-14 text-light mb-0 mt-3">{{ project[1].project_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteHover: false
    }
  },
  props: {
    project: {
      required: true
    },
    gradientKey: {
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.project--card-wrapper {
  cursor: pointer;
  word-wrap: break-word !important;

  .delete {
    display: none;
    background-color: $white;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .3rem;
    box-shadow: 0 5px 10px -5px $dark-gray;

    i {
      transition: all .3s ease;
    }

    &:hover {
      i {
        transition: all .3s ease;
        color: $red;
      }
    }
  }
  
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