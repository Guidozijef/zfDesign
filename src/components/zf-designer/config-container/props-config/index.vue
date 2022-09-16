<template>
  <div class="props-container">
    <generate-form :formData="formData" :formItems="formItems"></generate-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import GenerateForm from '../components/generateForm'


let formData = ref({
  name: ''
})

let formItems = reactive([
  {
    name: '输入框',
    key: 'name',
  }
])

</script>

<style lang="scss" scoped>
.props-container{
  padding: 0 5px;
}
</style>