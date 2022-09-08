<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth + 12 : 0}px` }">
    <div class="page-canvas">
      <n-scrollbar style="max-height: 724px">
        <draggable-item
          :widgetList="widgetList"
          @hoverCurrComponent="value => currHoverComp = value"
          :currHoverComp="currHoverComp"
          @selectCurrComponent="value => currSelectComp = value"
          :currSelectComp="currSelectComp"
          :parent-widget="null"
        ></draggable-item>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup name="render-container">
import { reactive, ref } from "vue";
import DraggableItem from "./draggableItem";

defineProps({
  isExtend: {
    type: Boolean,
    default: true
  },
  compPanelWidth: {
    type: Number,
    default: 250
  }
});

let widgetList = reactive({ data: [] });

let currSelectComp = ref({});
let currHoverComp = ref({});

</script>

<style lang="scss" scoped>
.render-container {
  margin-right: 262px;
  transition: all 0.3s ease;
  height: 100%;
  .page-canvas {
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
    background: #fff;
  }
}
</style>