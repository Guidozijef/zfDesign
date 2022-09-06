<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth + 12 : 0}px` }">
    <div class="page-canvas">
      <n-scrollbar style="max-height: 724px">
        <draggable
          :list="widgetList.data"
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
              @click="e => handlerSelectCurrComponent(e, widget)"
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
                <custom-render
                  v-if="widget.children"
                  :options="widget.options"
                  :designer="designer"
                  :render="widget.children"
                ></custom-render>
                <span v-if="widget.options.context">{{ widget.options.context }}</span>
              </component>
              <div class="control-view" v-show="currSelectComp.id === widget.id">
                <control-view @handlerCopy="handlerCopy(widget)" @handlerDel="handlerDel(widget)"></control-view>
              </div>
            </div>
          </template>
        </draggable>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup name="render-container">
import { reactive, ref, getCurrentInstance } from "vue";
import draggable from "vuedraggable";
import CustomRender from "./customRender";
import ControlView from "./controlView";
import { guid } from "@/utils";

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

let instance = getCurrentInstance()

let designer = ref(instance);

let widgetList = reactive({ data: [] });
let currSelectComp = ref({});

const handlerSelectCurrComponent = (e, widget) => {
  currSelectComp.value = widget;
  // let currNode = null
  // if (e.currentTarget && e.currentTarget.__draggable_context) {
  //   currNode = e.currentTarget
  // } else {
  //   currNode = [ ...e.path].find(node => node.className.includes('widget-view_item'))
  // }
  // let rectObj = currNode.getBoundingClientRect()
  // console.log(rectObj)
};

let onGridDragEnd = evt => {
  console.log("end", evt, widgetList.data);
};

let handlerCopy = widget => {
  let widgetCopy = { ...widget };
  widgetCopy.id = guid();
  let index = widgetList.data.findIndex(f => f.id === widget.id);
  widgetList.data.splice(index + 1, 0, widgetCopy);
};

let handlerDel = widget => {
  console.log("del", widget);
  widgetList.data = widgetList.data.filter(f => f.id !== widget.id);
};

let onGridDragAdd = evt => {
  console.log("add", evt);
  let { element } = evt.item.__draggable_context;
  // 如果已经拖拽了相同的组件，那么后面拖拽进来的就需要新的id,
  // TODO:这里需要进行拷贝处理，因为这个element是绑定在组件的dom元素上面的，修改一个都是关联的
  let ele = { ...element };
  let flag = widgetList.data.find(f => f.id === ele.id);
  if (flag) {
    ele.id = guid();
  }
  widgetList.data.push(ele);
};

let onGridDragUpdate = evt => {
  console.log("update", evt);
};

let checkContainerMove = evt => {
  // currSelectComp.value = {}
};



let formValue = ref({
  user: {
    name: "",
    age: ""
  },
  phone: ""
});
let rules = {
  user: {
    name: {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    },
    age: {
      required: true,
      message: "请输入年龄",
      trigger: ["input", "blur"]
    }
  },
  phone: {
    required: true,
    message: "请输入电话号码",
    trigger: ["input"]
  }
};
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
    .widget-view_item {
      position: relative;
      vertical-align: top;
      box-sizing: border-box;
      border: 2px solid #fff;
      &:hover {
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
    // .drag-ghost{
    //   // height: 20px;
    //   // z-index: 99;
    //   // background: red;
    //   display: none;
    // }
    // .sortable-chosen{
    //   height: 20px;
    //   z-index: 99;
    //   background: red;
    // }
  }
}
</style>