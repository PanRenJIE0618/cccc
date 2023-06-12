<script setup lang="ts">
import {Search} from '@element-plus/icons-vue';
import {ref} from "vue";

const emit = defineEmits(['selectItem']);

const handleClickPlan = (item) => {
  emit('selectItem', item);
};

const input = ref('');

const props = defineProps<{
  title: string,
  dataList: Array<{ name: string }>
}>();
</script>

<template>
  <div class="fx-emergency-plan">
    <div class="fx-emergency-plan-title">
      <span class="fx-emergency-plan-title-line"></span>
      <span class="fx-emergency-plan-title-image"></span>
      <span>{{ props.title }}</span>
    </div>
    <div class="fx-emergency-plan-bottom-line"></div>
    <div class="fx-emergency-plan-content">
      <div class="fx-emergency-plan-search">
        <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="请输入您要查询的内容"
          :suffix-icon="Search"
        />
      </div>
      <div class="fx-emergency-plan-list">
        <div v-for="item in props.dataList" :key="item.name" @click="handleClickPlan(item)">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
&::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

&::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 205, 255, 0.1);
  background: rgba(0, 205, 255, 0.5);
}

&::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 205, 255, 0.1);
  border-radius: 10px;
  background: transparent;
}

:deep(.el-input__wrapper) {
  width: 360px;
  height: 39px;
  background: rgba(9, 63, 112, 0.26);
  border-radius: 2px;
  border: 1px solid rgba(0, 158, 255, 0.6);
}

:deep(.el-input__inner) {
  color: white;
}

.fx-emergency-plan {
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
    background: linear-gradient(270deg, rgba(10, 73, 130, 0) 0%, rgba(9, 63, 112, 0.53) 100%);
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    > span {
      margin-right: 12px;
    }

    &-line {
      width: 2px;
      height: 18px;
      background: #379AF4;
    }

    &-image {
      width: 16px;
      height: 16px;
      border: 1px solid #379AF4;
    }
  }

  &-bottom-line {
    height: 2px;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(28, 122, 207, 1) 0%, rgba(28, 122, 207, 0) 100%);
  }

  &-search {
    padding: 16px;
  }

  &-list {
    padding: 0 28px;
    max-height: 700px;
    overflow: auto;

    > div {
      cursor: pointer;
      font-size: 16px;
      padding: 18px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.26);
    }
  }
}

</style>
