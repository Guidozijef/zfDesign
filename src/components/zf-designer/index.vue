<template>
  <div class="designer-selection">
    <widget-container @toggle="toggle" :compPanelWidth="compPanelWidth"></widget-container>
    <render-container :isExtend="isExtend" :compPanelWidth="compPanelWidth"></render-container>
    <config-container :compPanelWidth="compPanelWidth"></config-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WidgetContainer from './widget-container'
import RenderContainer from './render-container'
import ConfigContainer from './config-container'

let isExtend = ref(true)
let toggle = (value) => {
  isExtend.value = !isExtend.value
}

let compPanelWidth = 250

</script>

<style lang="scss" scoped>
.designer-selection{
  overflow: hidden;
  position: relative;
  height: 100%;
  background: #edeff3;
}

</style>