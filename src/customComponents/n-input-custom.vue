<template>
  <!-- <n-form-item :label="label" :path="path"> parentWidget.options.model[path] -->
    <n-input v-model:value="value" :placeholder="placeholder" />
  <!-- </n-form-item> -->
</template>

<script setup name="NInputCustom">
import { defineProps, ref } from 'vue'

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

let value = ref('')

</script>