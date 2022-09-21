<template>
  <!-- <n-form-item :label="label" :path="path"> parentWidget.options.model[path] -->
    <n-input v-model:value="formModel[path]" :placeholder="placeholder" />
  <!-- </n-form-item> -->
</template>

<script setup name="NInputCustom">
import { defineProps, ref, toRefs, onMounted, computed } from 'vue'

let props = defineProps({
    placeholder: {
      type: String,
      default: '请输入'
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

let formModel = computed(() => parentWidget.value.parent.props.model)

let path = computed(() => parentWidget.value.props.path)


</script>