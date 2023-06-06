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
import "./utils/component"

// @ts-ignore
// var duration = require('dayjs/plugin/duration')
// dayjs.extend(duration)
//引入flexible
import 'amfe-flexible'
const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
app.config.globalProperties.$dayjs = dayjs();
app.use(ElementPlus).use(router).mount('#app')

