<template>
  <n-form-item :label="label" :path="path" :show-label="showLabel" :rule="rule" :show-require-mark="showRequireMark" :require-mark-placement="requireMarkPlacement" :label-width="labelWidth">
    <slot></slot>
  </n-form-item>
</template>

<script setup name="NFormItemCustom">
import { defineProps, useSlots, toRefs, onMounted } from 'vue'

let props = defineProps({
    label: {
      type: String,
      default: '表单项'
    },
    path: String,
    labelWidth: [Number, String, 'auto'],  // number | string | 'auto'
    showLabel: Boolean,
    rule: Object,
    showRequireMark: Boolean,
    requireMarkPlacement: String,
    currWidget: {
      type: Object,
      default: () => ({})
    },
    parentWidget: null
});

let $slots = useSlots()

let { currWidget, parentWidget } = toRefs(props)

onMounted(() => {
  // console.log('form-item', currWidget.value, parentWidget.value)
})

</script>