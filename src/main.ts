// @ts-ignore
import {createApp} from 'vue';
import './style.less';
import App from "./App.vue";
// @ts-ignore
import router from '../src/router';
//引入 ElementPlus
// @ts-ignore
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// @ts-ignore
// @ts-ignore
import {createPinia} from "pinia";

// @ts-ignore
//引入flexible
import 'amfe-flexible';

const app = createApp(App);
// app.config.globalProperties.$axios = axios();
app.use(createPinia()).use(ElementPlus).use(router).mount('#app');

