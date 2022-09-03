<template>
  <div class="render-container" :style="{ marginLeft: `${isExtend ? compPanelWidth + 12 : 0}px` }">
    <div class="page-canvas">
      <draggable :list="widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost', animation: 200}"
               tag="transition-group" :component-data="{name: 'fade'}"
               @end="(evt) => onGridDragEnd(evt, widgetList)"
               @add="(evt) => onGridDragAdd(evt, widgetList)"
               @update="onGridDragUpdate" :move="checkContainerMove">
        <template #item="{ element: widget, index: swIdx }">
          <div class="widget-item_view">
              <component :is="`n-${widget.key}`" v-bind="widget.options" :currWidget="widget" :designer="designer" :key="widget.key" :parent-list="widgetList"
                            :index-of-parent-list="swIdx" :design-state="true">
                            <!-- 递归传递插槽！！！ -->
                <template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
                  <slot :name="slot" v-bind="scope"/>
                </template>
              </component>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import draggable from 'vuedraggable'

defineProps({
  isExtend: {
    type: Boolean,
    default: true
  },
  compPanelWidth: {
    type: Number,
    default: 250
  },
})

let designer = ref(null)

let widgetList = reactive([])

let onGridDragEnd = (evt, widgetList) => {
  console.log('end', evt, widgetList)
}

let onGridDragAdd = (evt, widgetList) => {
  console.log('add', evt, widgetList)
  let { element } = evt.item.__draggable_context
  widgetList.push(element)
}

let onGridDragUpdate = (evt) => {
  console.log('update', evt)

}

let checkContainerMove = (evt) => {
  console.log('move', evt)

}



</script>

<style lang="scss" scoped>
  .render-container{
    margin-right: 262px;
    transition: all 0.3s ease;
    height: 100%;
    padding: 12px;
    .page-canvas {
      width: 100%;
      height: 100%;
      box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
      background: #fff;
    }
  }
</style>