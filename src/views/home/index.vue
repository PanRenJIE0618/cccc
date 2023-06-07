<template>
  <div class="fx-home">
    <HMI></HMI>
    <LayerTree></LayerTree>
    <Tools></Tools>
    <BottomToolbar></BottomToolbar>
    <ViewPoint></ViewPoint>
    <img class="fx-home_Right_mask" src="../../assets/home/fx-Right_mask.png" alt="">
    <img class="fx-home_Lower_mask" src="../../assets/home/fx-Lower_mask.png" alt="">
    <img class="fx-home_Left_mask" src="../../assets/home/fx-Left_mask.png" alt="">
  </div>
</template>
<script setup lang="ts">
import BottomToolbar from '../../components/bottom_toolbar.vue'
import HMI from '../../components/hmi.vue'
import LayerTree from '../../components/layer_tree.vue'
import Tools from '../../components/tools.vue'
import ViewPoint from '../../components/viewpoint.vue'
import {onMounted, onUnmounted, onUpdated} from "vue";

onMounted(() => {
  console.log("Home 页面创建完成")
})
onUpdated(() => {
  console.log("Home 页面更新")
})
onUnmounted(() => {
  console.log("Home 页面销毁")
})
</script>
<style scoped lang="less">
.fx-home {
  width: 100%;
  height: 100%;
  img {
    z-index: 0;
  }
  .fx-home_Right_mask {
    width: 318px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
  }
  .fx-home_Lower_mask {
    width: 100%;
    height: 162px;
    position: fixed;
    bottom: 0;
  }
  .fx-home_Left_mask {
    width: 318px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>