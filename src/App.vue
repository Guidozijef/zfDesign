
<template>
  <zf-header></zf-header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import ZfHeader from '@/components/zf-header/index.vue'

components: { ZfHeader }
</script>


<style scoped>

</style>
