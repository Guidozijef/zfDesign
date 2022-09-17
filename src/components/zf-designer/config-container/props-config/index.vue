<template>
  <div class="props-container">
    <generate-form :formData="formData" @update:formData="value => formData = value" :formItems="formItems"></generate-form>
  </div>
</template>

<script setup name="propsConfig">
import { ref, reactive } from 'vue'
import GenerateForm from '../components/generateForm'


let formData = reactive({})

let formItems = reactive([
  {
    name: '输入框',
    key: 'name',
    type: 'input'
  },
  {
    name: '输入框1',
    key: 'age',
    type: 'select',
    options: [{ value: '3434', label: 'sfgsdf' }, { value: '454', label: 'sdg' }]
  }
])

</script>

<style lang="scss" scoped>
.props-container{
  padding: 0 5px;
}
</style>