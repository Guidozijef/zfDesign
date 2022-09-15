<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth + 12 : 0}px` }">
    <div class="page-canvas" ref="canvas">
      <n-scrollbar style="max-height: 724px">
        <draggable-item
          :widgetList="widgetList"
          :currSelectComp="currSelectComp"
          @selectCurrComponent="value => currSelectComp = value"
          :parent-widget="null"
        ></draggable-item>
      </n-scrollbar>
      <!-- 包裹选中组件边框和移入样式的容器 -->
      <div class="page-borders-container borders-tools" ref="borderContainer"></div>
    </div>
  </div>
</template>

<script setup name="render-container">
import { reactive, ref, watch, onMounted } from 'vue';
import DraggableItem from './draggableItem';
import { setupEvents, currSelectCompId, findCurrWidgetById } from './utils';

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

let canvas = ref('');
let borderContainer = ref('');

onMounted(() => {
  // TODO:注册鼠标移入、移出、点击等事件
  setupEvents(canvas.value, borderContainer.value, widgetList.data)
});


let widgetList = reactive({ data: [] });

let currSelectComp = ref({});

// TODO:监听当前点击的组件的id，根据当前节点的id查询当前组件数据
watch(() => currSelectCompId.value, (id) => {
  currSelectComp.value = findCurrWidgetById(widgetList.data, id)
  // console.log(currSelectComp.value)
})

watch(() => currSelectComp.value.id, (id) => {
  if (!id) {
    let borderDom = borderContainer.value.querySelector('.item-borders-selecting');
    borderDom && borderContainer.value.removeChild(borderDom);
  }
})

</script>

<style lang="scss" scoped>
.render-container {
  margin-right: 262px;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  .page-canvas {
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
    background: #fff;
    .page-borders-container {
      bottom: 0;
      right: 0;
      z-index: 800;
    }
  }
}
</style>
