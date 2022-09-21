<template>
  <div class="zf-header">
    <div class="" style="float:left">
      header
    </div>
    <div style="float:right">
      <n-button size="small" type="primary" @click="emitPage">
      预览
    </n-button>
    </div>
  </div>
</template>

<script setup name="zf-header">
import { defineEmits } from "vue"

let emit = defineEmits(['emitPage'])

let emitPage = () => {
  emit('emitPage')
}

</script>

<style lang="scss" scoped>
.zf-header {
  padding: 0 12px;
  width: 100%;
  height: 40px;
  box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);

}
  
</style>