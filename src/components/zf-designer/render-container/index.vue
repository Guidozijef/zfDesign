<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth + 12 : 0}px` }">
    <div class="page-canvas">
      <n-scrollbar style="max-height: 720px">
        <draggable
          :list="widgetList"
          item-key="id"
          v-bind="{group:'dragGroup', ghostClass: 'drag-ghost', animation: 200}"
          tag="ul"
          style="min-height:700px"
          :component-data="{name:'fade', type: 'transition-group'}"
          @end="(evt) => onGridDragEnd(evt)"
          @add="(evt) => onGridDragAdd(evt)"
          @update="onGridDragUpdate"
          :move="checkContainerMove"
        >
          <template #item="{ element: widget, index: swIdx }">
            <div
              class="widget-view_item"
              :class="[currSelectComp.id === widget.id ? 'curr-selectComp' : '']"
              @click.self="handlerSelectCurrComponent(widget)"
              :style="{ display: widget.isInline ? 'inline-block' : 'block'}"
            >
              <component
                :is="`n-${widget.key}`"
                v-bind="widget.options"
                :currWidget="widget"
                :designer="designer"
                :key="widget.id"
                :index-of-parent-list="swIdx"
                :design-state="false"
              >
                <dynamic-component v-if="widget.children" :render="widget.children"></dynamic-component>
                <span v-if="widget.options.context">{{ widget.options.context }}</span>
              </component>
            </div>
          </template>
        </draggable>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import draggable from "vuedraggable";
import DynamicComponent from "./dynamicComponent";

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

let designer = ref(null);

let widgetList = reactive([]);
let currSelectComp = reactive({});

const handlerSelectCurrComponent = widget => {
  currSelectComp = widget;
  console.log(currSelectComp, widgetList);
};

let onGridDragEnd = (evt, widgetList) => {
  console.log("end", evt, widgetList);
};

let onGridDragAdd = evt => {
  console.log("add", evt);
  let { element } = evt.item.__draggable_context;
  widgetList.push(element);
};

let onGridDragUpdate = evt => {
  console.log("update", evt);
};

let checkContainerMove = evt => {
  console.log("move", evt);
  currSelectComp = {}
};
</script>

<style lang="scss" scoped>
.render-container {
  margin-right: 262px;
  transition: all 0.3s ease;
  height: 100%;
  padding: 12px;
  .page-canvas {
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
    background: #fff;
    .widget-view_item {
      box-sizing: border-box;
      &:hover {
        border: 1px solid #197aff;
      }
      &.curr-selectComp {
        border: 2px solid #197aff;
      }
    }
    .drag-ghost{
      height: 20px;
      width: 100%;
      background: red;
    }
    // .sortable-chosen{
    //   height: 0px;
    // }
  }
}
</style>