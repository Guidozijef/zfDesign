<template>
  <n-icon size="15" style="cursor:pointer;margin-left:3px;" @click="handlerCopy">
    <svg t="1662370299768" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="886" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M720 192h-544A80.096 80.096 0 0 0 96 272v608C96 924.128 131.904 960 176 960h544c44.128 0 80-35.872 80-80v-608C800 227.904 764.128 192 720 192z m16 688c0 8.8-7.2 16-16 16h-544a16 16 0 0 1-16-16v-608a16 16 0 0 1 16-16h544a16 16 0 0 1 16 16v608z" fill="#ffffff" p-id="887"></path><path d="M848 64h-544a32 32 0 0 0 0 64h544a16 16 0 0 1 16 16v608a32 32 0 1 0 64 0v-608C928 99.904 892.128 64 848 64z" fill="#ffffff" p-id="888"></path><path d="M608 360H288a32 32 0 0 0 0 64h320a32 32 0 1 0 0-64zM608 520H288a32 32 0 1 0 0 64h320a32 32 0 1 0 0-64zM480 678.656H288a32 32 0 1 0 0 64h192a32 32 0 1 0 0-64z" fill="#ffffff" p-id="889"></path></svg>
  </n-icon>
   <n-icon size="15" style="cursor:pointer;margin-left:3px;" @click="handlerDel">
      <svg t="1662370315529" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1023" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M928.16 144H736V64a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v80H95.84a32 32 0 0 0 0 64H129.6l77.92 698.656A96 96 0 0 0 302.912 992h418.144a96.032 96.032 0 0 0 95.424-85.344L894.4 208h33.728a32 32 0 0 0 0.032-64zM352 96h320v48H352V96z m400.896 803.552a32 32 0 0 1-31.808 28.448H302.912a32 32 0 0 1-31.808-28.448L193.984 208h636.032l-77.12 691.552z" fill="#ffffff" p-id="1024"></path><path d="M608 820.928a32 32 0 0 0 32-32V319.104a32 32 0 0 0-64 0v469.824a32 32 0 0 0 32 32zM432 820.928a32 32 0 0 0 32-32V319.104a32 32 0 0 0-64 0v469.824a32 32 0 0 0 32 32z" fill="#ffffff" p-id="1025"></path></svg>
  </n-icon>
</template>

<script setup>
import { defineEmits } from "vue"


const emit = defineEmits(['handlerCopy', 'handlerDel'])

// 复制当前选择组件
let handlerCopy = () => {
  emit('handlerCopy')
}

// 删除当前选择组件
let handlerDel = () => {
  emit('handlerDel')
}

</script>