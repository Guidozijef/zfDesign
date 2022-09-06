import { createApp } from 'vue'
import { createPinia } from 'pinia'
import customComponent from '@/customComponents'

import App from './App.vue'
import router from './router'
import naive from 'naive-ui'

import '../src/style/global.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.use(customComponent)

app.mount('#app')

