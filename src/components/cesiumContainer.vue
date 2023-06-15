<script lang="ts" setup>
import {onMounted} from "vue";
import {get3Ddata, get3Dblock} from "../api/iServer";


onMounted(() => {
  console.log("Cesium 页面创建完成");
  let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    timeline: false,
    navigation: false,
    selectionIndicator: false
  });
  //设置时间光照受时间影响。
  viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date("2023/06/14 14:00:00"));
  window.viewer = viewer;
  viewer._cesiumWidget._creditContainer.style.display = "none";
  get3Dblock().then((res: any) => {
    res.forEach((item: object) => {
      let promise = viewer.scene.addS3MTilesLayerByScp(item.path + "/config", {name: item.name});
      promise.then(function (layer: any) {
        layer.visible = true;
        //是否允许选中子集
        layer.skeletonSelectEnable = true;
        //选中色
        // layer.selectedColor = Cesium.Color.RED;
        //设置图层是否受光照影响
        layer.hasLight = true;
      });
    });
  });
  get3Ddata().then((res: any) => {
    res.forEach((item: object) => {
      let promise = viewer.scene.addS3MTilesLayerByScp(item.path + "/config", {name: item.name});
      promise.then(function (layer: any) {
        layer.visible = true;
        layer.skeletonSelectEnable = true;
        // layer.selectedColor = Cesium.Color.RED;
      });
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