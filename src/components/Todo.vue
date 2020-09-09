<template>
  <div class="todo--wrapper d-flex justify-content-between align-items-center w-100" :class="{ 'completed': isCompleted }">
    <div class="d-flex align-items-center" style="width: 60%">
      <div class="todo--check mr-2" :class="{ 'completed': isCompleted }">
        <i class="fas fa-check font-size-12" :class="{ 'd-none': !isCompleted }" />
        <input type="checkbox" v-model="isCompleted" @input="statusChange">
      </div>
      <div class="todo--content text-dark font-size-14" style="width: 90%;">
        <p class="mb-0">{{ project[1].description }}</p>
      </div>
    </div>
    <div class="d-flex align-items-center" style="width: 35">
      <div class="todo--tags d-flex align-items-center" v-if="typeof tags !== 'undefined'">
        <span class="todo--tags-tag px-2 p-1 first font-size-12" v-if="tags.some(item => item === '0')">First Pri.</span>
        <span class="todo--tags-tag px-2 p-1 second font-size-12" v-if="tags.some(item => item === '1')">Second Pri.</span>
        <span class="todo--tags-tag px-2 p-1 third font-size-12" v-if="tags.some(item => item === '2')">Third Pri.</span>
      </div>
      <div class="todo--timer font-size-12 px-2 mr-2 p-1" v-if="typeof counter !== 'undefined'">
        <i class="fas fa-stopwatch mr-1"></i>
        <span class="m-0">{{ counter.slice(0, 2) }} hours {{ counter.slice(3, 5) }} min.</span>
      </div>
      <div class="todo--delete d-flex align-items-center p-1">
        <a-popconfirm
          placement="bottomLeft"
          title="Are you sure to delete task?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="deleteTask"
          >
          <i class="fas fa-trash" />
        </a-popconfirm>
      </div>
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
  computed: {
    tags() {
      return this.project[1].tags
    },
    counter() {
      return this.project[1].counter
    }
  },
  props: {
    project: { required: true }
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("delete_todo", this.project[0])
    },
    statusChange() {
      const completed = this.isCompleted === true ? 1 : 0
      this.$store.dispatch("change_todoStatus", { id: this.project[0], completed })
    }
  },
  created() {
    if (this.project[1].completed === 1) {
      this.isCompleted = true
    } else {
      this.isCompleted = false
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
    box-shadow: 0 5px 10px -7px $dark-gray;
    background: $gray-2;
    border-radius: .2rem;
    color: $dark-gray;
  }
}
</style>