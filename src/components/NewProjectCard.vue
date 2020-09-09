<template>
  <div>
    <a-modal v-model="isNewProject" :footer="null" :closable="false">
      <a-spin tip="Project Creating..." :spinning="$store.state.newProject">
        <a-form :form="form">
          <a-form-item label="Project Name:">
            <a-input v-decorator="['project_name', { rules: [{ required: true, message: 'Please enter a project name '}]}]" />
          </a-form-item>
          <a-form-item label="Project Shortname:">
            <a-input v-decorator="['project_shortname', { rules: [{ required: true, message: 'Please enter project shortname '}]}]" />
          </a-form-item>
          <a-form-item label="Project Description:">
            <a-textarea v-decorator="['project_description', { rules: [{ required: true, message: 'Please enter the project description '}]}]" :rows="3" />
          </a-form-item>
          <a-button @click="submitNewProject" size="large" type="primary" block>Create Project</a-button>
        </a-form>
      </a-spin>
    </a-modal>
    <div
      class="project--card-wrapper d-flex flex-column aling-items-center justify-content-center text-center"
      @click="isNewProject = true"
      >
      <div class="project--card d-flex align-items-center justify-content-center">
        <i class="fas fa-plus font-weight-bold font-size-28"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNewProject: false
    }
  },
  methods: {
    submitNewProject() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.commit("SET_STATE", { newProject: true })
          this.$store.dispatch("post_newProject", values)
            .then(res => {
              if (res) {
                this.isNewProject = false
              }
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

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.project--card-wrapper {
  cursor: pointer;
  
  .project--card {
    background: $dark-gray;
    height: 8rem;
    color: $white;
    border-radius: 1.5rem;
  }
}
</style>