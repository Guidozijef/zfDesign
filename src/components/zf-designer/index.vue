<template>
  <div class="designer-selection">
    <widget-container @toggle="toggle" :compPanelWidth="compPanelWidth"></widget-container>
    <config-container :compPanelWidth="compPanelWidth" :currSelectComp="currSelectComp.data"></config-container>
    <render-container :isExtend="isExtend" :compPanelWidth="compPanelWidth" @currSelectComp="comp => currSelectComp.data = comp"></render-container>
  </div>
</template>

<script setup name="zf-designer">
import { ref, reactive, defineExpose } from 'vue'
import WidgetContainer from './widget-container'
import RenderContainer from './render-container'
import ConfigContainer from './config-container'

let isExtend = ref(true)
let toggle = (value) => {
  isExtend.value = !isExtend.value
}

let compPanelWidth = 250

let currSelectComp = reactive({ data: {}})

let emitPage = () => {
  console.log('预览页面')
}

defineExpose({
  emitPage
})

</script>

<style lang="scss" scoped>
.designer-selection{
  overflow: hidden;
  // display: flex;
  position: relative;
  height: 100%;
  padding: 12px;
  background: #edeff3;
}

</style>