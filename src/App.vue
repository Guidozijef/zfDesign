
<template>
  <n-config-provider :theme-overrides="themeOverrides" style="height:100%">
    <RouterView style="height:calc(100% - 40px)" />
  </n-config-provider>
</template>

<script setup>
import { RouterView } from "vue-router";

const themeOverrides = {
  common: {
    primaryColor: "#0052cc",
    primaryColorHover: '#2372d9',
    borderRadius: '2px'
  },
  // Button: {
  //   textColor: "#FF0000"
  // },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: "#FF0000"
  //     }
  //   }
  // }
};
</script>


<style scoped>
</style>
