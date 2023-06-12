<template>
  <div class="fx-bottom_toolbar">
    <div class="fx-bottom_toolbar__functioning">
      <div class="fx-bottom_toolbar__module" v-for="(item,index) in mod" :key="index" @click="DPEmod(item)">
        <img :src=activeImg(item) alt="img">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
  <!--  <HHM></HHM>-->
</template>

<script lang="ts" setup>
import {reactive, ref, defineExpose, computed, defineEmits} from "vue";
import HHM from "./HHM.vue";

const emit = defineEmits(['clickChild']);
const clickChild = () => {
  let param = {
    content: 'b'
  };
  //传递给父组件
};
import type {Ref} from "vue";
import {useStore} from "../store";
import Data_analysis from "./data_analysis/data_analysis.vue";
import Emergency_drill from "./emergency/emergency_drill.vue";

let active = {
  Data: "fx-bottom_Data_analysis",
  management: "fx-bottom_Human_housing_management",
  drill: "fx-bottom_Emergency_drill"
};

let activeImg = computed<string>(() => (item: object) => {
  let img;
  if (selectMod.value === item.title) {
    img = active[item.name] + "_active";
  } else {
    img = active[item.name];
  }
  return new URL("../assets/bottom/" + img + ".png", import.meta.url).href;
});

let selectMod = ref("");
let mod = reactive<Array<object>>([
  {
    title: "数据分析",
    image: new URL("../assets/bottom/fx-bottom_Data_analysis.png", import.meta.url).href,
    name: "Data"
  },
  {
    title: "人房管理",
    image: new URL("../assets/bottom/fx-bottom_Human_housing_management.png", import.meta.url).href,
    name: "management"
  },
  {
    title: "应急演练",
    image: new URL("../assets/bottom/fx-bottom_Emergency_drill.png", import.meta.url).href,
    name: "drill"
  }
]);

const store = useStore();

let DPEmod: (mod: object) => string = function (mod: object): string {
  if(selectMod.value === mod.title) {
    selectMod.value = ""
    emit('clickChild', selectMod.value);
    store.setCurrentBottomSelected();
    return
  }
  selectMod.value = mod.title;
  switch (mod.title) {
    case "数据分析":
      store.setCurrentBottomSelected(Data_analysis);
      break;
    case "应急演练":
      store.setCurrentBottomSelected(Emergency_drill);
      break;
    case "人房管理":
      store.setCurrentBottomSelected(HHM);
      break;
  }
  emit('clickChild', selectMod.value);
};
defineExpose({selectMod});
console.log(mod);
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
