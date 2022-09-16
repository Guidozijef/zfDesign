<template>
  <!-- <n-form-item :label="label" :path="path"> parentWidget.options.model[path] -->
    <n-input v-model:value="formModel[path]" :placeholder="placeholder" />
  <!-- </n-form-item> -->
</template>

<script setup name="NInputCustom">
import { defineProps, ref, toRefs, onMounted, computed } from 'vue'

let props = defineProps({
    label: {
      type: String,
      default: '表单项'
    },
    path: {
      type: String,
      default: 'name'
    },
    placeholder: {
      type: String,
      default: '输入表单项'
    },
    currWidget: {
      type: Object,
      default: () => ({})
    },
    parentWidget: null
});

let { currWidget, parentWidget } = toRefs(props)

// onMounted(() => {
//   console.log('input', currWidget.value, parentWidget.value)
// })

let formModel = computed(() => parentWidget.value.parent.options.model)

let path = computed(() => parentWidget.value.options.path)


</script>