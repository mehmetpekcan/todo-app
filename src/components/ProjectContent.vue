<template>
  <div style="overflow-y: scroll !important;">
    <div class="title">
      <p class="mb-1 font-size-16 text-dark text-uppercase font-weight-bold">{{ $route.params.name }}</p>
      <p class="mb-0 font-size-12 w-50 text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vero odit voluptatum at sint, ipsa illum aliquid quis quam aperiam.</p>
    </div>
    <div class="todos--wrapper mt-5">
      <div class="todos--title pb-3 border-bottom border-gray-3 d-flex justify-content-between align-items-center">
        <p class="font-size-24 mb-0" style="font-weight: 600;">Today</p>
      </div>
      <div class="todos--content-wrapper">
        <div class="todo my-4" v-for="(item, key) in 6" :key="key">
          <todo />
        </div>
      </div>
    </div>
    <div class="todos--wrapper mt-5">
      <div class="todos--title pb-3 border-bottom border-gray-3 d-flex justify-content-between align-items-center">
        <p class="font-size-24 mb-0" style="font-weight: 600;">Later</p>
      </div>
      <div class="todos--content-wrapper">
        <div class="todo my-4" v-for="(item, key) in 6" :key="key">
          <todo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo"

export default {
  components: { Todo },
}  
</script>
