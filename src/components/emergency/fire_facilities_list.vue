<script setup lang="ts">
import Emergency_panel_layout from "./emergency_panel_layout.vue";
import {ref} from "vue";

const fireFacilitiesList = ref([
  {name: '消防设施1'},
  {name: '消防设施2'},
  {name: '消防设施3'},
  {name: '消防设施4'},
  {name: '消防设施5'},
  {name: '消防设施6'},
  {name: '消防设施7'},
  {name: '消防设施1'},
]);
</script>

<template>
  <emergency_panel_layout title="消防设施列表" :data-list="fireFacilitiesList"/>
</template>

<style lang="less" scoped></style>
