<template>
  <div>
    <zf-header @emitPage="emitPage"></zf-header>
    <zf-designer ref="designer"></zf-designer>
  </div>
</template>

<script setup name="designer">
import { ref } from 'vue'
import ZfHeader from "@/components/zf-header/index.vue";
import ZfDesigner from '@/components/zf-designer/index.vue'

let designer = ref('')

let emitPage = () => {
  designer.value.emitPage()
}

</script>

<style>

</style>