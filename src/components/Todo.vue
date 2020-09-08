<template>
<div class="todo--wrapper d-flex justify-content-between align-items-center w-100" :class="{ 'completed': isCompleted }">
  <div class="d-flex align-items-center" style="width: 60%">
    <div class="todo--check mr-2" :class="{ 'completed': isCompleted }">
      <i class="fas fa-check font-size-12" :class="{ 'd-none': !isCompleted }" />
      <input type="checkbox" v-model="isCompleted">
    </div>
    <div class="todo--content text-dark font-size-14" style="width: 90%;">
      <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.  nemo pariatur!</p>
    </div>
  </div>
  <div class="d-flex" style="width: 35">
    <div class="todo--tags">
      <span class="todo--tags-tag p-1 px-2 first font-size-12">First Pri.</span>
      <span class="todo--tags-tag p-1 px-2 second font-size-12">Second Pri.</span>
      <span class="todo--tags-tag p-1 px-2 third font-size-12">Third Pri.</span>
    </div>
    <div class="todo--timer font-size-12 p-1 px-2">
      <i class="fas fa-stopwatch mr-1"></i>
      <span class="">30 min</span>
    </div>
  </div>
  <div class="todo--delete">
    <a-popconfirm
      placement="bottom"
      title="Are you sure to delete task?"
      ok-text="Yes"
      cancel-text="No"
      @confirm="deleteTask"
      >
      <i class="fas fa-trash" />
    </a-popconfirm>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isCompleted: false,
    }
  },
  methods: {
    deleteTask() {
      console.log("delete")
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";

.todo--wrapper {
  padding: .5rem 0;
  transition: all .5s ease;
  
  &.completed {
    opacity: .5;
    transition: all .5s ease;
    
    .todo--content {
      text-decoration: line-through;
    }

    .todo--check {
      transition: .2s all ease-in;
      background: $blue-light;
      border: 1px solid $blue-light;

      .fa-check {
        color: #fff;
      }
    }
  }

  .todo--check {
    border: 1px solid $dark;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50rem;
    position: relative;
    transition: .2s all ease-in;
  
    input {
      position: absolute;
      cursor: pointer;
      opacity: 0;
      height: 100%;
      width: 100%;
    }
  
    .fa-check {
      transition: .2s all ease-in;
      color: $dark;
    }
  }

  .todo--tags {
    &-tag {
      color: $white;
      border-radius: .2rem;
      padding: .2rem .8rem;
      background-color: $red;
      margin-right: 1rem;
      font-weight: 600;
      
      &.first {
        background-color: #ff9494;
        color: #d92f2c;
        box-shadow: 0 5px 10px -7px #d92f2c;
      }
      
      &.second {
        background-color: #ffcd95;
        color: #d58120;
        box-shadow: 0 5px 10px -7px #d58120;
      }
      
      &.third {
        background-color: #b0b2ff;
        color: #686de0;
        box-shadow: 0 5px 10px -7px #686de0;
      }
    }
  }
  
  .todo--timer {
    border-radius: .2rem;
    box-shadow: 0 5px 10px -5px $dark;
    background-color: $dark;
    color: $white;
  }
  
  .todo--delete {
    position: relative;
    cursor: pointer;
    box-shadow: 0 5px 10px -7px $red;
    padding: .2rem .5rem;
    background: $red;
    border-radius: .2rem;
    color: $white;
  }
}

</style>