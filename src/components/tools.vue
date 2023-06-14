<script setup lang="ts">
import {reactive, computed, ref} from "vue";
import Maptools from "../utils/Maptool.cjs";

let MapTool = new Maptools.Maptools();

let reimage = computed<string>(() => (img: string) => {
  return new URL(img, import.meta.url).href;
});

let MeasuringTool: (name: string) => string = function (name: string): string {
  let viewer = reactive<any>(window.viewer);
  let position = reactive<object>({
    longitude: -2873622.352663363,
    latitude: 4691283.254669421,
    height: 3294741.82575111
  });
  let Directional = reactive<object>({
    heading: 6.134364052850659,
    pitch: -1.5678400105732182,
    roll: 0
  });
  MapTool[name]?.(viewer,position,Directional)
};

let ExIm: () => string = function (): string {
  console.log("点击");
  tools.value = !tools.value;
};

let tools = ref(true);

let data = reactive<Array<any>>([
  {
    name: "scale",
    image: "../assets/tools/fx-tools_scale.png",
  },
  {
    name: "clear",
    image: "../assets/tools/fx-tools_translation.png",
  },
  {
    name: "panorama",
    image: "../assets/tools/fx-tools_panorama.png",
  },
  {
    name: "measuringdistance",
    image: "../assets/tools/fx-tools_measurement.png",
  },
  {
    name: "measuringArea",
    image: "../assets/tools/fx-tools_area.png",
  },
  {
    name: "clear",
    image: "../assets/tools/fx-tools_clear.png",
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