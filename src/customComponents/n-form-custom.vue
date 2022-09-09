<template>
  <n-form :ref="formRef" :inline="inline" :label-width="labelWidth" :model="model" :rules="rules" :size="size">
    <!-- <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope"/>
    </template> -->
    <slot></slot>
  </n-form>
</template>


<script setup name="NFormCustom">
import { defineProps, useSlots } from "vue";

let props = defineProps({
    formRef: null,
    inline: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: Number,
      default: 100,
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


</script>

<style lang="scss" scoped>
</style>