<template>
<div>
  <a-form :form="form">
    <a-form-item label="Description">
      <a-textarea
        :rows="4"
        placeholder="Run for a while.."
        v-decorator="['description', { rules: [{ required: true, message: 'Please enter a description' }]}]"
        />
    </a-form-item>
    <a-form-item label="Tags (You can add your own tags just write)">
      <a-select mode="tags" style="width: 100%" :token-separators="[',']" size="large" v-decorator="['tags']">
        <a-select-option v-for="(item, key) in ['First', 'Second', 'Third']" :key="key.toString()">
          {{ item }} Priority
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Countdown">
      <a-time-picker v-decorator="['counter']" size="large" format="HH:mm" />
      <a-tooltip>
        <template #title>
          You can set how much time will take the task to countdown.
        </template>
        <i class="fas fa-info-circle ml-3 font-size-16 text-dark" />
      </a-tooltip>
    </a-form-item>
    <a-form-item>
      <a-button @click="submitNewTodo" type="primary" size="large" block>Create New Task</a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: {
    projectKey: {
      required: true
    }
  },
  methods: {
    submitNewTodo() {
      this.form.validateFields((err, values) => {
        if (!err) {
          let { description, counter, tags } = values
          counter = values.counter._d.toString()
          this.$store.dispatch("post_newTodo", {
            data: {
              description,
              tags,
              counter: counter.slice(16, 21)
            },
            projectKey: this.projectKey[0]
          })
        }
      })
    }
  },
  created() {
    this.form = this.$form.createForm(this)
  }
}
</script>