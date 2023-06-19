<template>
  <div class="fx-bottom_toolbar">
    <div class="fx-bottom_toolbar__functioning">
      <div class="fx-bottom_toolbar__module" v-for="(item,index) in mod" :key="index" @click="DPEMod(item)">
        <img :src=activeImg(item) alt="img">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
  <!--  <HHM></HHM>-->
</template>

<script lang="ts" setup>
import {reactive, ref, defineExpose, computed, defineEmits} from "vue";

const emit = defineEmits(['clickChild']);
const clickChild = () => {
  // let param = {
  //   content: 'b'
  // };
  //传递给父组件
};
import {useStore} from "../store";
import Data_analysis from "./data_analysis/data_analysis.vue";
import Emergency_drill from "./emergency/emergency_drill.vue";
import HHM from "./HHM.vue";


let activeImg = computed<any>(() => (item: { title: string, name: string,active:string }) => {
  let img: any;
  if (selectMod.value === item.title) {
    img = item.active + "_active";
  } else {
    img = item.active;
  }
  return new URL("/public/image/bottom/" + img + ".png", import.meta.url).href;
});

let selectMod = ref("");
let mod = reactive<Array<object>>([
  {
    title: "数据分析",
    image: new URL("/public/image/bottom/fx-bottom_Data_analysis.png", import.meta.url).href,
    name: "Data",
    active: "fx-bottom_Data_analysis"
  },
  {
    title: "人房管理",
    image: new URL("/public/image/bottom/fx-bottom_Human_housing_management.png", import.meta.url).href,
    name: "management",
    active: "fx-bottom_Human_housing_management"
  },
  {
    title: "应急演练",
    image: new URL("/public/image/bottom/fx-bottom_Emergency_drill.png", import.meta.url).href,
    name: "drill",
    active: "fx-bottom_Emergency_drill"
  }
]);

const store = useStore();

const DPEMod = (mod: any) => {
  if (selectMod.value === mod.title) {
    selectMod.value = "";
    emit('clickChild', selectMod.value);
    store.setCurrentBottomSelected('');
    return;
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
  background: url("/public/image/bottom/fx-bottom_background.png") no-repeat 0 5px;
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
