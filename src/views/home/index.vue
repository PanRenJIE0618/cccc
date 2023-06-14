<template>
  <div class="fx-home">
    <component :is="store.currentBottomSelected"/>
    <HMI></HMI>
    <LayerTree v-if="SelectMod === ''"></LayerTree>
    <Tools v-if="SelectMod === ''"></Tools>
    <BottomToolbar @clickChild="clickEven"></BottomToolbar>
    <ViewPoint v-if="SelectMod === ''"></ViewPoint>
    <img class="fx-home_Right_mask" src="../../assets/home/fx-Right_mask.png" alt="">
    <img class="fx-home_Lower_mask" src="../../assets/home/fx-Lower_mask.png" alt="">
    <img class="fx-home_Left_mask" src="../../assets/home/fx-Left_mask.png" alt="">
  </div>
<!--  <el-button class="getCurrentViewingAngleCoordinate" @click="getCurrentViewingAngleCoordinate(viewer)">-->
<!--    getCurrentViewingAngleCoordinate-->
<!--  </el-button>-->
<!--  <el-button class="getClickOnThePointCoordinates" @click="getClickOnThePointCoordinates(viewer)">-->
<!--    getClickOnThePointCoordinates-->
<!--  </el-button>-->
</template>
<script setup lang="ts">
import BottomToolbar from '../../components/bottom_toolbar.vue';
import HMI from '../../components/hmi.vue';
import LayerTree from '../../components/layer_tree.vue';
import Tools from '../../components/tools.vue';
import ViewPoint from '../../components/viewpoint.vue';
import {ref, reactive, onMounted, onUnmounted, onUpdated} from "vue";
import {useStore} from "../../store";
import {getPositiondirection, getClickOnThePointCoordinates} from "../../utils/CommonTool.js";

const store = useStore();
let viewer = reactive<any>(null);
let SelectMod = ref("");



const getCurrentViewingAngleCoordinate = (viewer: any) => {
  let position = getPositiondirection(viewer);
  console.log(position);
};
const getClickOnThePointCoordinates = (viewer: any) => {
  // getClickOnThePointCoordinates(viewer)
  let scene = viewer.scene;
  let screenSpaceEventHandler;
  // screenSpaceEventHandler = screenSpaceEventHandler && screenSpaceEventHandler.destroy();
  screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  screenSpaceEventHandler.setInputAction(function (e) {
    var earthPosition = viewer.scene.pickPosition(e.position);
    console.log(earthPosition);
    let cartographit = Cesium.Cartographic.fromCartesian(earthPosition);
    let longitude = Cesium.Math.toDegrees(cartographit.longitude);
    let latitude = Cesium.Math.toDegrees(cartographit.latitude);
    console.log(longitude);
    console.log(latitude);
    // 获取选中的S3M图层
    // let pick = viewer.scene.pick(e.position);
    // console.log(pick);
    // let selection = pick.primitive.getSelection();
    // let selectedId = Number(selection[selection.length - 1]);
    // console.log(selectedId);
    // pick.primitive.removePBRMaterial(); // 默认选中偏移量
    // pick.primitive.setObjsColor([selectedId],Cesium.Color.RED);
    // pick.primitive.setSelection([selectedId]);
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};

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
  viewer = window.viewer;
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
