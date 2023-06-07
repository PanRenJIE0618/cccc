// @ts-ignore
import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
// @ts-ignore
import router from '../src/router'
//引入 ElementPlus
// @ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// @ts-ignore
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// @ts-ignore
import dayjs from "dayjs"
// @ts-ignore
// const axios = require('axios').default;
import "./utils/component"

// @ts-ignore
//引入flexible
import 'amfe-flexible'

import cesiumContainer from './components/cesiumContainer.vue'
const app = createApp(App)
app.component('cesiumContainer', cesiumContainer)

app.config.globalProperties.$dayjs = dayjs();
// app.config.globalProperties.$axios = axios();
app.use(ElementPlus).use(router).mount('#app')

