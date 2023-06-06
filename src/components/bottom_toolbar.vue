<template>
  <div class="fx-bottom_toolbar">
    <div class="fx-bottom_toolbar__functioning">
      <div class="fx-bottom_toolbar__module" v-for="(item,index) in mod" :key="index">
        <img :src=item.image alt="img">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import type {Ref} from "vue";
let mod = reactive<Array<object>>([
  {
    title:"数据分析",
    image: new URL("../assets/bottom/fx-bottom_Data_analysis.png", import.meta.url).href
  },
  {
    title:"人房管理",
    image: new URL("../assets/bottom/fx-bottom_Human_housing_management.png", import.meta.url).href
  },
  {
    title:"应急演练",
    image: new URL("../assets/bottom/fx-bottom_Emergency_drill.png", import.meta.url).href
  }
])
console.log(mod)
</script>

<style scoped lang="less">
.fx-bottom_toolbar {
  z-index: 3;
  width: 100%;
  height: 95px;
  background: url("../assets/bottom/fx-bottom_background.png") no-repeat 0 5px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  .fx-bottom_toolbar__functioning {
    width: 400px;
    position: fixed;
    bottom: 13px;
    display: flex;
    justify-content: center;
    .fx-bottom_toolbar__module {
      margin: 20px 20px 0 20px;
      position: relative;
      img {
        width: 82px;
        height: 68px;
      }
      p {
        font-size: 16px;
        text-align: center;
        margin: 0;
        color: white;
        position: absolute;
        bottom: -8px;
        left: 10px;
      }
    }
  }
}
</style>