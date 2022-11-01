<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth : 0}px` }">
    <div class="page-canvas" ref="canvas">
      <n-scrollbar style="max-height: 724px">
        <draggable-item
          :widgetList="widgetList"
          :currSelectComp="currSelectComp"
          @selectCurrComponent="value => currSelectComp = value"
          :parent-widget="null"
        ></draggable-item>
      </n-scrollbar>
      <!-- TODO: 包裹选中组件边框和移入样式的容器 -->
      <div class="page-borders-container borders-tools" ref="borderContainer"></div>
    </div>
  </div>
</template>

<script setup name="render-container">
import { reactive, ref, watch, defineEmits, defineExpose } from 'vue';
import DraggableItem from './draggableItem';
import useCurrSelectComp from './hooks'

defineProps({
  isExtend: {
    type: Boolean,
    default: true,
  },
  compPanelWidth: {
    type: Number,
    default: 250,
  },
});

const emit = defineEmits(['currSelectComp'])

let canvas = ref('');
let borderContainer = ref('');
let widgetList = reactive({ data: [] });

// FIXME: 这里这几个参数不能直接，canvas.value、borderContainer.value、widgetList.data，这样对DOM元素来说不是响应式，到hooks里面获取不到DOM元素
let { currSelectComp } = useCurrSelectComp(canvas, borderContainer, widgetList)

// // TODO:监听当前点击的组件，传递给上级
watch(currSelectComp, (value) => {
  emit('currSelectComp', value)
})

defineExpose({
  widgetList
})


</script>

<style lang="scss" scoped>
.render-container {
  margin-right: 262px;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
  .page-canvas {
    width: 100%;
    height: 100%;
    background: #fff;
    .page-borders-container {
      bottom: 0;
      right: 0;
      z-index: 800;
    }
  }
}
</style>
