<script lang="ts" setup>
import {onMounted} from "vue";
import {get3Ddata} from "../api/iServer";

onMounted(() => {
  console.log("Cesium 页面创建完成");
  let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    timeline: false,
    navigation:false
  });
  window.viewer = viewer;
  viewer._cesiumWidget._creditContainer.style.display = "none";
  get3Ddata().then((res: any) => {
    res.forEach((item:object) => {
      let promise = viewer.scene.addS3MTilesLayerByScp(item.path + "/config", {name: item.name});
      promise.then(function (layer: any) {
        // console.log(layer)
        layer.visible = true;
      })
    });
    //设置默认视角
    viewer.camera.setView({
      destination: new Cesium.Cartesian3(-2873622.352663363, 4691283.254669421, 3294741.82575111),
      orientation: {
        heading: 6.134364052850659,
        pitch: -1.5678400105732182,
        roll: 0
      }
    });

  });
  // viewer.imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({
  //   url :  'http://t0.tianditu.gov.cn/img_c/wmts?tk=9fe2c138159be61264c0869e9181dcb6'
  // }));
});
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped lang="less">
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>