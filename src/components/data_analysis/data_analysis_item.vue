<script lang="ts" setup>
</script>

<template>
  <div class="data-analysis-item">
    <div class="data-analysis-item-title">
      <img src="../../assets/data-analysis/human-info.png" alt="">
      <slot name="title"></slot>
    </div>
    <div class="data-analysis-item-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.data-analysis-item {
  font-size: 16px;
  font-weight: 600;

  &-title {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;

    > img {
      width: 24px;
      height: 36px;
    }
  }
}
</style>
