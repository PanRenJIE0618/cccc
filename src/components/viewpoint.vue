<template>
  <div class="fx-viewpoint">
    <img src="../assets/viewpoint/fx-ViewPoint_background.png" alt="">
    <p>视点定位</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
.fx-viewpoint {
  position: fixed;
  right: 17px;
  bottom: 70px;
  z-index: 3;
  img {
    width: 77px;
    height: 76px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: -5px;
    left: 6px;
  }
}
</style>