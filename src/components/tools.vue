<script setup lang="ts">
import {reactive, ref} from "vue";
import {useTools} from "../hooks/useTools.ts";

let reimage = (img) => {
  return new URL(`../assets/tools/${img}`, import.meta.url).href;
};

const {measureDistance, measureArea, clear} = useTools();

let MeasuringTool: (name: string) => void = function (name) {
  switch (name) {
    case "measurement" :
      measureDistance();
      break;
    case "translation" :
      console.log('weather');
      let descriptor = {
        "CommandStr": "WeatherTypeConversion",
        "WeatherType": 3,
        "Cloudiness": 1,
        "MaterialWetness": 0.6,
        "MaterialSnowCoverage": 1,
        "OpenWeather": true,
      };
      emitUIInteraction(descriptor);
      break;
    case "area" :
      measureArea();
      break;
    case "panorama" :
      break;
    case "clear" :
      clear();
      let descriptor1 = {
        "CommandStr": "WeatherTypeConversion",
        "WeatherType": 0,
        "Cloudiness": 1,
        "MaterialWetness": 0.6,
        "MaterialSnowCoverage": 1,
        "OpenWeather": true,
      };
      emitUIInteraction(descriptor1);
      break;
  }
};

let ExIm: () => void = function () {
  console.log("点击");
  tools.value = !tools.value;
};

let tools = ref(true);

let data = reactive<Array<any>>([
  {
    name: "scale",
    image: "fx-tools_scale.png",
  },
  {
    name: "translation",
    image: "fx-tools_translation.png",
  },
  {
    name: "panorama",
    image: "fx-tools_panorama.png",
  },
  {
    name: "measurement",
    image: "fx-tools_measurement.png",
  },
  {
    name: "area",
    image: "fx-tools_area.png",
  },
  {
    name: "clear",
    image: "fx-tools_clear.png",
  }
]);
</script>

<template>
  <img class="fx-tools-arrow" :class="{'arrowShow':tools,'arrow':!tools}" @click="ExIm"
       src="../assets/tools/fx-tools_Right_arrow.png" alt="">
  <div class="fx-tools" :class="{'fx-tools':tools,'tools':!tools}">
    <img v-for="(item,index) in data" :key="index" @click="MeasuringTool(item.name)" :src="reimage(item.image)"
         :class="item.name" alt="">
  </div>
</template>


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

  img {
    margin: 10px;
  }

  .scale {
    width: 31px;
    height: 31px
  }

  .translation {
    width: 31px;
    height: 31px
  }

  .panorama {
    width: 31px;
    height: 31px
  }

  .measurement {
    width: 31px;
    height: 31px
  }

  .area {
    width: 31px;
    height: 31px
  }

  .clear {
    width: 31px;
    height: 31px
  }
}
</style>
