<template>
  <div class="fx-home">
    <component :is="store.currentBottomSelected"/>
    <scene/>
    <LayerTree v-if="SelectMod === ''"></LayerTree>
    <Tools v-if="SelectMod === ''"></Tools>
    <BottomToolbar @clickChild="clickEven"></BottomToolbar>
    <ViewPoint v-if="SelectMod === ''"></ViewPoint>
    <img class="fx-home_Right_mask" src="../../assets/home/fx-Right_mask.png" alt="">
    <img class="fx-home_Lower_mask" src="../../assets/home/fx-Lower_mask.png" alt="">
    <img class="fx-home_Left_mask" src="../../assets/home/fx-Left_mask.png" alt="">
  </div>
</template>
<script setup lang="ts">
import BottomToolbar from '../../components/bottom_toolbar.vue';
import LayerTree from '../../components/layer_tree.vue';
import Tools from '../../components/tools.vue';
import ViewPoint from '../../components/viewpoint.vue';
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import {useStore} from "../../store";
import Scene from "../../components/scene.vue";
import {http} from "../../utils/http.ts";

const store = useStore();

let SelectMod = ref("");
const clickEven = (val: string) => {
  if (SelectMod.value === val) {
    SelectMod.value = "";
    store.setCurrentBottomSelected('');
    return;
  }
  SelectMod.value = val;
};
onMounted(() => {
  console.log("Home 页面创建完成");
  http.get('/viewpointLocalization/getViewpointLocation').then(res => {
    console.log('res');
    console.log(res);
  });
});
onUpdated(() => {
  console.log("Home 页面更新");
});
onUnmounted(() => {
  console.log("Home 页面销毁");
});
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
