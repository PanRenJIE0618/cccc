// @ts-ignore
import { createRouter, createWebHashHistory } from "vue-router";
// @ts-ignore
import { ref, reactive } from 'vue'
// @ts-ignore
import type {Ref} from 'vue'
// 1. 定义路由组件 导入组件。
const routes: Ref<Array<object>> = ref(
    [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/home/index.vue")
        }
    ]
)
let route = reactive<any>({
    history: createWebHashHistory(),
    routes
})
const router = createRouter(route)

export default router;
