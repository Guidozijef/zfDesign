<template>
  <draggable
    v-model="widgetList.data"
    item-key="id"
    v-bind="{group:'dragGroup', ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', dragClass: 'sortable-drag', animation: 200}"
    tag="ul"
    :style="{minHeight:parentWidget === null ? '724px' : '', width: '100%', height: '100%'}"
    :component-data="{name:'fade', type: 'transition-group'}"
    @end="(evt) => onGridDragEnd(evt)"
    @add="(evt) => onGridDragAdd(evt)"
    @update="onGridDragUpdate"
    :move="checkContainerMove"
  >
    <template #item="{ element: widget, index: swIdx }">
      <div
        class="widget-view_item"
        :data-id="widget.id"
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
            :currSelectComp="currSelectComp"
            @selectCurrComponent="handlerCurrSelectComp"
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
import { defineProps, ref, reactive, defineEmits, getCurrentInstance, onMounted } from "vue";
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
  parentWidget: Object
});

const emit = defineEmits(["selectCurrComponent", "hoverCurrComponent"]);

// onMounted(() => {
//   let currentCpn = getCurrentInstance();
//   let parent = currentCpn.parent;
//   console.log(currentCpn, parent)
// })


let onGridDragEnd = evt => {
  console.log("end", evt, props.widgetList.data);
};

// 复制组件
let handlerCopy = widget => {
  let widgetCopy = cloneDeep(widget);
  // console.log(widgetCopy);
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
  props.widgetList.data = props.widgetList.data.filter(f => f.id !== widget.id);
  emit("selectCurrComponent", {});
};

let handlerCurrSelectComp = (value) => {
  emit("selectCurrComponent", value);
}

let onGridDragAdd = evt => {
  console.log("add", evt, props.parentWidget);
  // TODO: 这里需要判断是从组件库拖拽加进来的才进行添加，因为模版内拖拽只是移动位置了，不需要再次进行添加了
  let { element } = evt.item.__draggable_context;
  if (evt.pullMode === "clone") {
    // 如果已经拖拽了相同的组件，那么后面拖拽进来的就需要新的id,
    // TODO:这里需要进行拷贝处理，因为这个element是绑定在组件的dom元素上面的，修改一个都是关联的
    let ele = cloneDeep(element);
    let flag = props.widgetList.data.find(f => f.id === ele.id);
    if (flag) {
      ele.id = guid();
    }
    // TODO: 这个递归绑定每个元素的父级数据，方便到时候获取父级的父级的数据
    mutuallyrecursive(ele, null)
    props.widgetList.data.push(ele);
  } else {
    element.parent = props.parentWidget
  }
};

let onGridDragUpdate = evt => {
  console.log("update", evt);
};

let checkContainerMove = evt => {
  // currSelectComp.value = {}
};

let mutuallyrecursive = (ele, parent) => {
  ele.parent = parent
  if (ele.children) {
    ele.children.data.forEach(subEle => {
      mutuallyrecursive(subEle, ele)
    })
  }
}
</script>

<style lang="scss" scoped>
.widget-view_item {
  position: relative;
  vertical-align: top;
  box-sizing: border-box;
  // border: 2px solid #fff;
  // &:hover {
  //   border: 2px dashed #197aff;
  // }
  &.curr-hoverComp {
    // border: 2px dashed #197aff;
  }
  &.curr-selectComp {
    // border: 2px solid #197aff;
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