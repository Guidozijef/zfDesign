<template>
  <div class="props-container">
    <generate-form :formData="formData" @update:formData="data => Object.assign(formData, data)" :formItems="formItems"></generate-form>
  </div>
</template>

<script setup name="propsConfig">
import { ref, toRefs, reactive, defineProps, computed, watch, onMounted, watchEffect } from 'vue'
import GenerateForm from '../components/generateForm'


let props = defineProps({
  currSelectComp: {
    type: Object,
    default: () => ({})
  },
  formData: {
    type: Object,
    default: () => ({})
  }
})

let formItems = computed(() => props.currSelectComp?.options)

watch(formItems, (formItems) => {
  (formItems || []).forEach(item => {
    if (item.defaultValue) {
      props.formData[item.key] = item.defaultValue
    }
  })
})

watch(props.formData, (formData) => {
  Object.assign(props.currSelectComp.props, formData)
}, { deep: true })

// let formItems = reactive([
//   {
//     name: '输入框',
//     key: 'name',
//     type: 'input'
//   },
//   {
//     name: '输入框1',
//     key: 'age',
//     type: 'select',
//     options: [{ value: '3434', label: 'sfgsdf' }, { value: '454', label: 'sdg' }]
//   }
// ])

</script>

<style lang="scss" scoped>
.props-container{
  padding: 0 5px;
}
</style>