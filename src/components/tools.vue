<template>
  <img class="fx-tools-arrow" :class="{'arrowShow':tools,'arrow':!tools}" @click="ExIm" src="../assets/tools/fx-tools_Right_arrow.png" alt="">
  <div class="fx-tools" :class="{'fx-tools':tools,'tools':!tools}">
    <div class="fx-tools_mea" v-for="(item,index) in data" :key="index">
      <img :src="reimage(item.image)" :class="item.name" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive,computed,ref} from "vue";
let reimage = computed<string>(() =>(img:string) => {
  return new URL(img, import.meta.url).href
})
let ExIm : () => string = function () :string {
  console.log("点击")
  tools.value = !tools.value
}
let tools = ref(true)
let data = reactive<Array<any>>([
  {
    name:"scale",
    image:"../assets/tools/fx-tools_scale.png",
  },
  {
    name:"translation",
    image:"../assets/tools/fx-tools_translation.png",
  },
  {
    name:"panorama",
    image:"../assets/tools/fx-tools_panorama.png",
  },
  {
    name:"measurement",
    image:"../assets/tools/fx-tools_measurement.png",
  },
  {
    name:"area",
    image:"../assets/tools/fx-tools_area.png",
  },
  {
    name:"clear",
    image:"../assets/tools/fx-tools_clear.png",
  }
])
</script>

<style scoped lang="less">
.tools {
  transition: 1s;
  right: -100px !important;
}
.arrowShow {
  transition: 1s;
  width: 57px;
  height: 72px;
  position: fixed;
  bottom: 520px;
  right: 25px;
  z-index: 2;
}
.arrow {
  transition: 1s;
  right: -10px !important;
  transform: rotateY(180deg) !important;
}
.fx-tools-arrow {
  width: 57px;
  height: 72px;
  position: fixed;
  bottom: 520px;
  right: 25px;
  z-index: 3;
}
.fx-tools {
  transition: 1s;
  z-index: 2;
  width: 63px;
  height: 489px;
  position: fixed;
  right: 23px;
  bottom: 130px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: url("../assets/tools/fx-tools_background.png") no-repeat;
  .fx-tools_mea {
    font-size: 12px;
    margin: 10px;
    .scale {
      width:49px;
      height:48px
    }
    .translation {
      width:31px;
      height:30px
    }
    .panorama {
      width:34px;
      height:33px
    }
    .measurement {
      width:26px;
      height:30px
    }
    .area {
      width:33px;
      height:32px
    }
    .clear {
      width:29px;
      height:28px
    }
  }
}
</style>