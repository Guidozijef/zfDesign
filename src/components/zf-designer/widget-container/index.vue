<template>
  <div class="widget-container" :style="{ left: `-${isExtend ? 0 : compPanelWidth + 12}px` }">
    <n-tabs type="line" animated justify-content="space-evenly">
      <n-tab-pane name="oasis" tab="组件库">
        <widget-wapper></widget-wapper>
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="模版">
        模版
      </n-tab-pane>
    </n-tabs>
    <div class="toggle-button" :style="{ transform: `translate3d(calc(50% + ${isExtend ? 0 : 14}px), -50%, 0)` }" @click="handlerClick">
      <i class="btn-show" :style="{ transform: `rotate(${isExtend ? 180 : 0}deg)`}" ></i>
    </div>
  </div>
</template>

<script setup name="widget-container">
import { ref } from 'vue'
import WidgetWapper from './widget-wapper'

defineProps({
  compPanelWidth: {
    type: Number,
    default: 250
  },
})

let isExtend = ref(true)
let emit = defineEmits(['toggle'])
const handlerClick = () => {
  isExtend.value = !isExtend.value
  emit('toggle', isExtend.value)
}

</script>

<style lang="scss" scoped>
  .widget-container{
    background: #fff;
    transition: all 0.3s ease;
    position: absolute;
    float: left;
    width: 250px;
    height: calc(100% - 24px);
    box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
    .toggle-button{
      position: absolute;
      top: 50%;
      right: 0;
      height: 26px;
      width: 26px;
      // transform: translate3d(50%, -50%, 0);
      background-color: #fff; 
      border-radius: 50%;
      box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
      text-align: center;
      cursor: pointer;
      z-index: 9;
      .btn-show{
        display: inline-block;
        line-height: 26px;
        vertical-align: middle;
        height: 18px;
        width: 18px;
        background-image: url('./img/right.svg');
      }
    }
  }
</style>