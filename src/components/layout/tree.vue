<script lang="ts" setup>
import {ref, defineProps,watch, withDefaults,defineEmits} from "vue";

let defaultExpandedKeys = ref([11, 22, 33, 44, 55, 66, 77, 88, 99]);

interface PropsType {
  list: object;
}

const props = withDefaults(defineProps<PropsType>(), {
  list: {} // 默认值
});

const propsList = {
  value: 'id',
  label: 'label',
  children: 'children'
};

watch(() => props.list, (newVal) => {
  console.log(newVal);
}, {
  deep: true
});

const emit = defineEmits(['clickClose']);

let close: () => string = function (): string {
  emit('clickClose', false);
};
</script>

<template>
  <div class="fx-layer_tree">
    <div class="fx-layer_tree_title">
      {{ list.label }}
    </div>
    <img class="fx-layer_tree_close" src="../../assets/layer/fx-layer_tree_close.png" alt="" @click="close">
    <KeepAlive>
      <el-tree-v2 :data="list.children" :props="propsList" show-checkbox :height="400" :indent="16"
                  :default-expanded-keys="defaultExpandedKeys">
        <template #default="{ node }">
          <img class="fx-layer_tree_img" src="../../assets/layer/GovernmentAgency.png" alt="">
          <span>{{ node.label }}</span>
        </template>
      </el-tree-v2>
    </KeepAlive>
  </div>
</template>

<style scoped lang="less">
.fx-layer_tree {
  position: fixed;
  width: 378px;
  height: 498px;
  bottom: 444px;
  left: 191px;
  z-index: 5;
  background: url("../../assets/layer/fx-layer_tree_background.png") no-repeat;

  &_img {
    width: 22px;
    height: 22px;
    transform: rotate(-90deg);
  }

  &_title {
    color: white;
    font-size: 16px;
    padding: 11px 17px;
  }

  &_close {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 14px;
    right: 18px;
  }
}
</style>