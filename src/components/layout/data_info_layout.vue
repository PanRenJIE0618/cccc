<script setup lang="ts"></script>

<template>
  <div class="data-info-layout">
    <div class="data-info-layout-title">
      <slot name="title"></slot>
    </div>
    <div class="data-info-layout-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.data-info-layout {
  z-index: 5;
  position: fixed;
  left: 30px;
  top: 123px;
  width: 407px;
  height: 872px;
  background: rgba(10, 73, 130, 0.3);
  //opacity: 0.5;
  border: 2px solid;
  border-image: linear-gradient(180deg, rgba(0, 205, 255, 0), rgba(0, 158, 255, 1)) 2 2;
  color: #fff;

  &-title {
    display: flex;
    align-items: center;
    height: 31px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    background-image: url("../../assets/layout/data_info_title_bg.png");
    background-size: 100% 100%;
    padding-left: 40px;
  }

  &-content {
    padding: 16px;
  }

}

</style>
