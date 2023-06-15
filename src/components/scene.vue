<script setup lang="ts">
import {onMounted} from "vue";
import {useStore} from "../store";

const store = useStore()

onMounted(() => {
  load()
  inputOptions.controlScheme = ControlSchemeType.HoveringMouse;
  inputOptions.fakeMouseWithTouches = true;
  /*registerLockedMouseEvents = function () {
  }*/
  window.viewer = new SuperMap.Web.UI.Controls.SceneControl(document.getElementById("player"),)
  window.scene = viewer.get_scene()
  // showKeyEnterPrise()
  // initialViewPoint()
  //添加UE的消息监听


  addResponseEventListener('CurrentViewPoint', async (data) => {
    console.log(data);
    store.setCurrentViewPoint(data)
  })

  setTimeout(() => {
  }, 2000)

})
</script>

<template>
  <div id="player"></div>
</template>

<style scoped lang="less">
#player {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
