<script setup lang="ts">
import {Close} from "@element-plus/icons-vue";

const props = defineProps({
  title: {
    type: String
  },
  content: {
    type: String
  },
  visible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <div class="fx-emergency-plan-detail" v-if="props.visible">
    <div class="fx-emergency-plan-detail-title">
      {{ props.title }}
    </div>
    <div class="fx-emergency-plan-detail-close" @click="handleClose">
      <el-icon style="font-size: 24px">
        <Close/>
      </el-icon>
    </div>
    <div class="fx-emergency-plan-detail-content">
      {{ props.content }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.fx-emergency-plan-detail {
  z-index: 5;
  width: 924px;
  height: 602px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url("/image/emergency-plan/emergency-plan-detail-bg.png");
  color: #fff;

  &-title {
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    padding: 42px;
  }

  &-close {
    position: absolute;
    top: 36px;
    right: 46px;
    cursor: pointer;
  }

  &-content {
    width: 835px;
    height: 431px;
    padding-left: 43px;
    font-size: 16px;
  }
}
</style>
