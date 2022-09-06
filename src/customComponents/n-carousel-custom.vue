<template>
    <n-carousel :autoplay="autoplay" :show-arrow="showArrow">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
    </n-carousel>
</template>

<script setup name="NCarouselCustom">
import { defineProps } from 'vue'
defineProps({
  autoplay: {
    type: Boolean,
    default: true,
  },
  showArrow: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
  .carousel-img{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
</style>