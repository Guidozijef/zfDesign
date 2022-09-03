<template>
  <n-scrollbar style="max-height: 720px">
    <div style="padding:0 12px">
      <n-collapse arrow-placement="right" :default-expanded-names="[0]">
        <n-collapse-item v-for="item in collapseList" :key="item.key" :title="item.collapseName" :name="item.key">
          <div class="widget-wapper">
            <widget-item :item="comp" v-for="comp in item.compList" :key="comp.key"></widget-item>
          </div>
        </n-collapse-item>
      </n-collapse>
    </div>
  </n-scrollbar>
</template>

<script setup>
import collapseList from './lib'
import WidgetItem from './widget-item'



</script>

<style lang="scss" scoped>
  .widget-wapper{
    width: 100%;
    border-top: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
  }
</style>