<script setup lang="ts">
import Emergency_panel_layout from "./emergency_panel_layout.vue";
import {ref} from "vue";
import Emergency_plan_detail from "./emergency_plan_detail.vue";

const emergencyPlanList = ref([
  {
    name: '应急预案方案1',
    content: '应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容应急预案方案1内容'
  },
  {name: '应急预案方案2'},
  {name: '应急预案方案3'},
  {name: '应急预案方案4'},
  {name: '应急预案方案5'},
  {name: '应急预案方案6'},
  {name: '应急预案方案7'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
  {name: '应急预案方案1'},
]);

const currentPlan = ref({
  name: '',
  content: ''
});

const detailPanelVisible = ref(false);

const handleSelectItem = (item) => {
  currentPlan.value = item;
  detailPanelVisible.value = true;
};
</script>

<template>
  <emergency_panel_layout title="应急预案列表" :data-list="emergencyPlanList" @select-item="handleSelectItem"/>
  <emergency_plan_detail :title="currentPlan.name"
                         :content="currentPlan.content"
                         :visible="detailPanelVisible"
                         @close="detailPanelVisible = false"
  />
</template>

<style lang="less" scoped></style>
