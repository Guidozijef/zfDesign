<template>
  <div class="config-container">
    <div class="props-selection">
      <n-tabs type="line" animated justify-content="space-evenly">
        <n-tab-pane name="oasis" tab="属性">
          <props-config :currSelectComp="currSelectComp" ></props-config>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="模版">模版</n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup name="ConfigContainer">
import { ref, defineProps, reactive } from 'vue';
import PropsConfig from './props-config'

let props = defineProps({
  currSelectComp: {
    type: Object,
    default: () => ({})
  }
})





</script>

<style lang="scss" scoped>
.config-container {
  transition: all 0.3s ease;
  float: right;
  width: 250px;
  height: 100%;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgb(31 50 88 / 13%);
}
</style>