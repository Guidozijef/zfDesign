<template>
  <draggable
    v-model="widgetList.data"
    item-key="id"
    v-bind="{group:'dragGroup', ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', dragClass: 'sortable-drag', animation: 200}"
    tag="ul"
    :style="{minHeight:parentWidget === null ? '724px' : '', width: '100%'}"
    :component-data="{name:'fade', type: 'transition-group'}"
    @end="(evt) => onGridDragEnd(evt)"
    @add="(evt) => onGridDragAdd(evt)"
    @update="onGridDragUpdate"
    :move="checkContainerMove"
  >
    <template #item="{ element: widget, index: swIdx }">
      <div
        class="widget-view_item"
        @mouseenter="handlerHoverCurrComponent(widget)"
        @mouseleave="handlerHoverCurrComponent({})"
        :class="[(currSelectComp.id === widget.id) && 'curr-selectComp', (currHoverComp.id === widget.id) && 'curr-hoverComp']"
        @click.stop="handlerSelectCurrComponent(widget)"
        :style="{ display: widget.isInline ? 'inline-block' : 'block', minWidth: widget.minWidth }"
      >
        <component
          :is="`n-${widget.key}`"
          v-bind="widget.options"
          :currWidget="widget"
          :key="widget.id"
          :parent-widget="parentWidget"
          :index-of-parent-list="swIdx"
        >
          <draggable-item
            v-if="widget.isDraggable"
            @hoverCurrComponent="handlerHoverCurrComponent"
            @selectCurrComponent="handlerSelectCurrComponent"
            :currSelectComp="currSelectComp"
            :currHoverComp="currHoverComp"
            :parent-widget="widget"
            :widgetList="widget.children"
          ></draggable-item>
          <template
            v-else-if="widget.children"
            v-for="(subWidget, subIdx) in widget.children.data"
            :key="subWidget.id"
          >
            <component
              :is="`n-${subWidget.key}`"
              v-bind="subWidget.options"
              :currWidget="subWidget"
              :parent-widget="widget"
              :index-of-parent-list="subIdx"
            ></component>
          </template>
          <custom-render
            v-else-if="widget.slot"
            :options="widget.options"
            :parent="parentWidget"
            :render="widget.slot"
          ></custom-render>
          <span v-else-if="widget.options.context">{{ widget.options.context }}</span>
        </component>
        <div class="control-view" v-show="currSelectComp.id === widget.id">
          <control-view
            @handlerCopy="handlerCopy(widget, widgetList)"
            @handlerDel="handlerDel(widget)"
          ></control-view>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup name="draggableItem">
import { defineProps, ref, reactive, defineEmits } from "vue";
import draggable from "vuedraggable";
import CustomRender from "./customRender";
import ControlView from "./controlView";
import { guid } from "@/utils";
import { cloneDeep } from "@/utils/lodashChunk";

let props = defineProps({
  widgetList: {
    type: Object,
    default: () => ({ data: [] })
  },
  currSelectComp: {
    type: Object,
    default: () => ({})
  },
  currHoverComp: {
    type: Object,
    default: () => ({})
  },
  parentWidget: Object
});
const emit = defineEmits(["selectCurrComponent", "hoverCurrComponent"]);

// TODO:这是一个递归方法，往外暴露修改当前选择组件的事件
const handlerSelectCurrComponent = widget => {
  emit("selectCurrComponent", widget);

  // let currNode = null
  // if (e.currentTarget && e.currentTarget.__draggable_context) {
  //   currNode = e.currentTarget
  // } else {
  //   currNode = [ ...e.path].find(node => node.className.includes('widget-view_item'))
  // }
  // let rectObj = currNode.getBoundingClientRect()
  // console.log(rectObj)
};

let handlerHoverCurrComponent = widget => {
  emit("hoverCurrComponent", widget);
};

let onGridDragEnd = evt => {
  console.log("end", evt, props.widgetList.data);
};

let handlerCopy = widget => {
  let widgetCopy = cloneDeep(widget);
  console.log(widgetCopy);
  widgetCopy.id = guid();
  if (widgetCopy.children) {
    let subList = cloneDeep(widgetCopy.children.data);
    subList.forEach(subWidget => {
      subWidget.id = guid();
    });
    widgetCopy.children.data = subList;
  }
  let index = props.widgetList.data.findIndex(f => f.id === widget.id);
  props.widgetList.data.splice(index + 1, 0, widgetCopy);
};

let handlerDel = widget => {
  console.log("del", widget);
  props.widgetList.data = props.widgetList.data.filter(f => f.id !== widget.id);
  emit("selectCurrComponent", {});
};

let onGridDragAdd = evt => {
  console.log("add", evt, props.parentWidget);
  if (evt.pullMode !== "clone") return;
  let { element } = evt.item.__draggable_context;
  // 如果已经拖拽了相同的组件，那么后面拖拽进来的就需要新的id,
  // TODO:这里需要进行拷贝处理，因为这个element是绑定在组件的dom元素上面的，修改一个都是关联的
  let ele = cloneDeep(element);
  let flag = props.widgetList.data.find(f => f.id === ele.id);
  if (flag) {
    ele.id = guid();
  }
  props.widgetList.data.push(ele);
};

let onGridDragUpdate = evt => {
  console.log("update", evt);
};

let checkContainerMove = evt => {
  // currSelectComp.value = {}
};
</script>

<style lang="scss" scoped>
.widget-view_item {
  position: relative;
  vertical-align: top;
  box-sizing: border-box;
  border: 2px solid #fff;
  // &:hover {
  //   border: 2px dashed #197aff;
  // }
  &.curr-hoverComp {
    border: 2px dashed #197aff;
  }
  &.curr-selectComp {
    border: 2px solid #197aff;
  }
  .control-view {
    position: absolute;
    bottom: -2px;
    right: -2px;
    background: #197aff;
    transform: translate(0, 100%);
    width: 41px;
    height: 20px;
    padding: 1px;
    z-index: 99;
  }
}

.widget-view_item.sortable-ghost {
  content: "";
  font-size: 0;
  height: 3px;
  box-sizing: border-box;
  background: #0052cc;
  border: 2px solid #0052cc;
  outline-width: 0;
  padding: 0;
  overflow: hidden;
  * {
    content: "";
    font-size: 0;
    height: 3px;
    box-sizing: border-box;
    background: #0052cc;
    border: 2px solid #0052cc;
    outline-width: 0;
    padding: 0;
    overflow: hidden;
  }
}

.widget-view_item.sortable-chosen {
  // background: blue
  display: none;
}
.widget-view_item.sortable-drag {
  position: relative;
  display: inline-block !important;
  width: 100px !important;
  height: 30px !important;
  background: #f6f6f6;
  overflow: hidden;
  border: 0px !important;
  &::after {
    content: "row";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  * {
    width: 100px !important;
    height: 30px !important;
    display: none !important;
  }
}
</style>