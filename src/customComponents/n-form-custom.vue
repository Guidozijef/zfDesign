<template>
  <n-form :ref="formRef" :inline="inline" :label-width="labelWidth" :label-placement="labelPlacement" :model="model" :rules="rules" :size="size">
    <!-- <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope"/>
    </template> -->
    <!-- <n-grid :cols="24" :x-gap="24"> -->
      <slot></slot>
    <!-- </n-grid> -->
  </n-form>
</template>


<script setup name="NFormCustom">
import { defineProps, ref, useSlots, toRefs, onMounted } from "vue";

let props = defineProps({
    formRef: null,
    inline: {
      type: Boolean,
      default: false,
    },
    labelWidth: {
      type: [Number, String],
      default: 70,
    },
    labelPlacement: {
      type: String,
      default: 'left',
    },
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    size: {
      type: String,
      default: 'small',
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
  // console.log('form', currWidget.value, parentWidget.value)
})

</script>

<style lang="scss" scoped>
</style>