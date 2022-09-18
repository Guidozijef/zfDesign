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
      <n-form-item :label="item.name" :path="item.key">
        <n-input
          v-if="item.type === 'input'"
          v-model:value="formData[item.key]"
          :placeholder="getPlaceholder(item)"
          :disabled="item.disabled"
          clearable
        />
        <n-input
          v-if="item.type === 'textarea'"
          v-model:value="formData[item.key]"
          :placeholder="getPlaceholder(item)"
          type="textarea"
          :disabled="item.disabled"
          :autosize="item.autosize || {
            minRows: 3,
            maxRows: 5,
          }"
          clearable
        />
        <n-input-number 
        v-if="item.type === 'number-input'"
        :placeholder="getPlaceholder(item)" 
        v-model:value="formData[item.key]" 
        clearable />
        <n-select
          v-if="item.type === 'select'"
          v-model:value="formData[item.key]"
          :disabled="item.disabled"
          :options="item.options"
          :placeholder="getPlaceholder(item)"
          :multiple="item.multiple"
          :max-tag-count="item.maxTagCount || 'responsive'"
          clearable
        />
        <n-switch
          v-if="item.type === 'switch'"
          v-model:value="formData[item.key]"
          @update:value="item.handleChange"
          :disabled="item.disabled"
        />
      </n-form-item>
    </template>
  </n-form>
</template>

<script setup name="generateForm">
import { defineProps, toRefs, defineEmits, watch, nextTick } from 'vue';

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

let emit = defineEmits(['update:formData'])

watch(() => props.formData, (formData) => {
    emit('update:formData', formData)
}, { deep: true, immediate: true })


let getPlaceholder = (item) => {
  return item.placeholder || '请输入'
}
</script>
