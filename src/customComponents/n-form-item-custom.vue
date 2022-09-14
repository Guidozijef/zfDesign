<template>
  <n-form-item :label="label" :path="path">
    <!-- <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope"/>
    </template> -->
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
    path: {
      type: String,
      default: 'name'
    },
    currWidget: {
      type: Object,
      default: () => ({})
    },
    parentWidget: null
});

let $slots = useSlots()

let { currWidget, parentWidget } = toRefs(props)

onMounted(() => {
  console.log('form-item', currWidget.value, parentWidget.value)
})

</script>