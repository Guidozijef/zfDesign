<template>
  <div class="config-container">
    <div class="props-selection">

    </div>
    
    <!-- <div class="toggle-button" :style="{ transform: `translate3d(calc(50% + ${isExtend ? 0 : 4}px), -50%, 0)` }" @click="handlerClick">
      <i class="btn-show" :style="{ transform: `rotate(${isExtend ? 180 : 0}deg)`}" ></i>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
  .config-container{
    transition: all 0.3s ease;
    position: absolute;
    right: 0;
    top: 0;
    margin: 12px;
    width: 250px;
    height: calc(100% - 24px);
    background: #fff;
    box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
  }
</style>