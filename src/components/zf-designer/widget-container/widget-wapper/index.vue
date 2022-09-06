<template>
  <n-scrollbar style="max-height: 670px">
    <div style="padding:0 12px">
      <n-collapse arrow-placement="right" :default-expanded-names="[0]">
        <n-collapse-item v-for="item in collapseList" :key="item.key" :title="item.collapseName" :name="item.key">
           <draggable class="draggable-container" tag="ul" :list="item.compList" item-key="key" :group="{name: 'dragGroup', pull: 'clone', put: false}"
                     :clone="handleContainerWidgetClone" ghost-class="ghost" :sort="false"
                     :move="checkContainerMove" @end="onContainerDragEnd">
            <template #item="{ element: comp }">
              <widget-item :item="comp" :key="comp.key"></widget-item>
            </template>
          </draggable>
        </n-collapse-item>
      </n-collapse>
    </div>
  </n-scrollbar>
</template>

<script setup name="widget-wapper">
import draggable from 'vuedraggable'
import collapseList from './lib'
import WidgetItem from './widget-item'
let handleContainerWidgetClone = (origin) => {
    console.log('clone', origin)
}
let checkContainerMove = (evt) => {
    console.log('move', evt)
}
let onContainerDragEnd = () => {

}


</script>

<style lang="scss" scoped>
.draggable-container{
    width: 100%;
    border-top: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
}
  .widget-wapper{

  }
</style>