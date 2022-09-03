<template>
  <div class="component-item">
    <img src="" alt="">
    <span class="item-name">{{ item.name }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";


const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="scss" scoped>
  .component-item {
    padding: 6px;
    display: inline-block;
    width: 33.333333%;
    text-align: center;
    height: 75px;
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    .item-name {
      display: inline-block;
      font-size: 12px;
    }
    &:hover {
      box-shadow: 0 6px 16px 0 rgb(0 0 0 / 15%);
      border-color: transparent;
      cursor: move;
    }
  }
</style>