<template>
  <n-form
    ref="formRef"
    :model="formData"
    :label-placement="labelPlacement"
    :label-width="labelWidth"
    :size="size"
    :rules="rules"
    :disabled="disabled"
  >
    <template v-for="item in formItems" :key="item.key">
      <n-form-item :label="item.name" :path="item.key"><custom-render :item="item" :render="generateItem"></custom-render> }}</n-form-item>
    </template>
  </n-form>
</template>

<script setup name="generateForm">
import { defineProps, toRefs } from 'vue';
import CustomRender from './customRender'

let props = defineProps({
  formItems: {
    type: Array,
    default: () => [],
  },
  formData: {
    type: Object,
    default: () => ({}),
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  labelWidth: {
    type: [Number, String],
    default: 70,
  },
  labelPlacement: {
    type: String,
    default: 'left',
  },
  size: {
    type: String,
    default: 'small',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

let { formData } = toRefs(props)

let generateItem = (h, { item }) => {
  // return generateItemInput(item)
  return <n-input v-model={formData[item.key]} placeholder={item.placeholder} clearable ></n-input>;
}

let generateItemInput = item => {
  
};



</script>