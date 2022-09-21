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
  }
})

let formData = reactive({})

let formItems = computed(() => props.currSelectComp?.options)


// TODO: 这里获取当前组件参数的初始值，再次点击不会在恢复了，因为这个组件当前引用值已经被修改了
watchEffect(() => {
  (formItems.value || []).forEach(item => {
    if (props.currSelectComp.props[item.key]) {
      formData[item.key] = props.currSelectComp.props[item.key]
    }
  })
})

watch(formData, (formData) => {
  props.currSelectComp.props = Object.assign(props.currSelectComp.props, formData)
  console.log(formData, props.currSelectComp.props)
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