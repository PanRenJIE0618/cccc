<template>
  <div class="fx-layer_tree">
<!--    <el-tree-v2 :data="data" :props="props" show-checkbox :height="400" :indent="16" />-->
    <div class="fx-layer_mod" v-for="(item,index) in mods" :key="index" @click="HandleListClick(index)" :class="{'selectMod':index == ModIndex}">
      <img class="fx-layer_svg" :src="item.svg" alt="">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref } from "vue";
import layer from '../../public/json/layer.json'
import basic_data from '../icons/svg/fx-icon_basic_data.svg?url'
import iot from '../icons/svg/fx-icon_iot.svg?url'
import planning from '../icons/svg/fx-icon_planning.svg?url'
import resources from '../icons/svg/fx-icon_resources.svg?url'
import section from '../icons/svg/fx-icon_section.svg?url'
import society from '../icons/svg/fx-icon_society.svg?url'
import Special_topic from '../icons/svg/fx-icon_Special_topic.svg?url'
import underground from '../icons/svg/fx-icon_underground.svg?url'
import Urban_construction from '../icons/svg/fx-icon_Urban_construction.svg?url'
const mods = reactive<Array<any>>([
  {
    name:"时刻基础数据",
    svg:basic_data
  },
  {
    name:"资源调查数据",
    svg:iot
  },
  {
    name:"规划管控数据",
    svg:planning
  },
  {
    name:"公共专题数据",
    svg:resources
  },
  {
    name:"物联感知数据",
    svg:section
  },
  {
    name:"部门专题数据",
    svg:society
  },
  {
    name:"区级城运体征数据",
    svg:Special_topic
  },
  {
    name:"城市地下空间数据",
    svg:underground
  },
  {
    name:"社会POI数据",
    svg:Urban_construction
  },
])
const props = {
  value: 'id',
  label: 'label',
  children: 'children',
  disabled: 'disabled',
}
let data = reactive<Array<any>>(layer.layer)
let ModIndex = ref<number>(10)
let HandleListClick : () => any = function (index:number) : any {
  if(ModIndex.value == index) {
    ModIndex.value = 10
    return
  }
  ModIndex.value = index
  console.log(ModIndex.value)
}
onMounted(() => {
  console.log("Tree 组件创建成功")
})
</script>

<style scoped lang="less">
.selectMod {
  background: linear-gradient(160deg, #26CFFD 0%, #1D6CD7 100%);
}
.fx-layer_tree {
  width: 152px;
  height: 892px;
  position: absolute;
  left: 20px;
  bottom: 49px;
  z-index: 5;
  background: url("../assets/layer/fx-layer_background.png") no-repeat;
  overflow: scroll;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
    background: rgba(0, 0, 0,0.5);
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
    border-radius: 10px;
    background: transparent;
  }
  .fx-layer_mod {
    width: 147px;
    height: 110px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid #000;
    border-image: linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) 0.8 0.8;
    .fx-layer_svg {
      margin-top: 15px;
      width: 34px;
    }
    p {
      color: white;
      font-size: 14px;
    }
  }
}
</style>