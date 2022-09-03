<template>
  <div class="widget-container">
    <n-tabs type="line" animated justify-content="space-evenly">
      <n-tab-pane name="oasis" tab="组件库">
        <widget-wapper></widget-wapper>
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="模版">
        模版
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import WidgetWapper from './widget-wapper'

</script>

<style lang="scss" scoped>
  .widget-container{
    width: 250px;
    height: 100%;
    border-right: 1px solid #666;
  }
</style>