<template>
    <n-input v-model:value="value" :placeholder="placeholder" :readonly="readonly" :clearable="clearable" :disabled="disabled" :show-count="showCount" :maxlength="maxlength" :minlength="minlength" />
</template>

<script setup name="NInputCustom">
import { defineProps, ref, toRefs, onMounted, computed } from 'vue'

let props = defineProps({
    placeholder: String,
    value: String,
    clearable: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number,
    minlength: Number,
    showCount: Boolean,
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