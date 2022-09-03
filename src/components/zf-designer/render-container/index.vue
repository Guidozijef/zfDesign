<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth : 0}px` }">
    <div class="page-canvas">

    </div>
  </div>
</template>

<script setup>

defineProps({
  isExtend: {
    type: Boolean,
    default: true
  },
  compPanelWidth: {
    type: Number,
    default: 250
  },
})

</script>

<style lang="scss" scoped>
  .render-container{
    transition: all 0.3s ease;
    height: 100%;
    padding: 12px;
    background: #edeff3;
    .page-canvas {
      width: 100%;
      height: 100%;
      box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
      background: #fff;
    }
  }
</style>