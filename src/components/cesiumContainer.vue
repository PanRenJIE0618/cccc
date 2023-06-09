<template>
  <div id="cesiumContainer"></div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {layer} from "../../public/json/layerList.json";
import {get3Ddata} from "../api/iServer";
import * as inspector from "inspector";

onMounted(() => {
  console.log("Cesium 页面创建完成");
  let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    timeline: false,
  });
  window.viewer = viewer;
  // window["getPositiondirection"] = function() {
  //   var cartographit = Cesium.Cartographic.fromCartesian(window.viewerData.scene.camera.position);
  //   var longitude = Cesium.Math.toDegrees(cartographit.longitude);
  //   var latitude = Cesium.Math.toDegrees(cartographit.latitude);
  //   var height = cartographit.height;
  //   var cam = window.viewerData.scene.camera;
  //   return {
  //     longitude: longitude,
  //     latitude: latitude,
  //     height: height,
  //     heading: cam.heading,
  //     pitch: cam.pitch,
  //     roll: cam.roll,
  //     posttion:window.viewerData.scene.camera.position
  //   };
  // };
  viewer._cesiumWidget._creditContainer.style.display = "none";
  console.log(layer);
  get3Ddata().then((res: any) => {
    res.forEach((item, index) => {
      let promise = viewer.scene.addS3MTilesLayerByScp(item.path + "/config", {name: item.name});
      promise.then(function (layer: any) {
        // console.log(layer)
        layer.visible = true;
      });
    });
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

<style scoped lang="less">
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>