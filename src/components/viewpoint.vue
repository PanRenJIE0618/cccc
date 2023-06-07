<template>
  <div class="fx-viewpoint_box" v-if="viewpointBox">
    <div class="fx-viewpoint_box_head">
      <div class="fx-viewpoint_box_title">
        <img src="../assets/viewpoint/fx-viewpoint_box_eye.png" alt="">
        <span>视点定位</span>
      </div>
      <img @click="closeView" class="fx-viewpoint_box_close" src="../assets/viewpoint/fx-viewpoint_box_close.png" alt="">
    </div>
    <div class="fx-viewpoint_box_content">
      <div class="fx-viewpoint_box_content_vp">
        <div class="fx-viewpoint_box_content_vp_t" v-for="(item,index) in ViewPointList.slice(start,end)" :key="index" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
          <div class="fx-viewpoint_box_content_addViewPoint" v-if="index === (0 + start)" @click="addViewPoint">
            <img src="../assets/viewpoint/fx-viewpoint_box_addViewPoint_icon.png" alt="">
            <span>新增视点</span>
          </div>
          <span class="fx-viewpoint_box_content_mask_viewpointName" v-if="index !== (0 + start) && index == mask">
              {{item.name}}
            </span>
          <div class="fx-viewpoint_box_content_mask" v-if="index !== (0 + start) && index == mask">
            <div class="fx-viewpoint_box_content_mask_compile" @click="edit()"></div>
            <div class="fx-viewpoint_box_content_mask_flight" @click="flight()"></div>
            <div class="fx-viewpoint_box_content_mask_BoxDelete" @click="delViewPoint(index)"></div>
          </div>
        </div>
      </div>
      <img @click="PageUp" class="fx-viewpoint_box_leftArrow" src="../assets/viewpoint/fx-viewpoint_box_Leftarrow.png" alt="">
      <img @click="PageDown" class="fx-viewpoint_box_RightArrow" src="../assets/viewpoint/fx-viewpoint_box_Rightarrow.png" alt="">
    </div>
  </div>
  <div class="fx-viewpoint" @click="OpenViewPoint">
    <img :src="viewpointBd" alt="">
    <p :class="{'titleSelect':viewpointBox}">视点定位</p>
  </div>
</template>

<script lang="ts" setup>
import {reactive,computed,ref} from "vue";
let start:number = ref(0)
let end:number = ref(4)
let mask:number = ref(-1)
let viewpointBd:any = ref(new URL("../assets/viewpoint/fx-ViewPoint_background.png", import.meta.url).href)
let viewpointBox:boolean = ref(false)
let ViewPointList = reactive<Array>([
  {
    name:"add",
    imageUrl:""
  },
  {
    name:"自定义2",
    imageUrl:""
  },
  {
    name:"自定义3",
    imageUrl:""
  }
])
let OpenViewPoint : () => string = function () :string {
  let vw = new URL("../assets/viewpoint/fx-ViewPoint_background.png", import.meta.url).href
  let vws = new URL("../assets/viewpoint/fx-viewpoint_background_select.png", import.meta.url).href
  viewpointBox.value = !viewpointBox.value
  viewpointBox.value == true ? viewpointBd.value = vws : viewpointBd.value = vw

}
//鼠标移入移出
let mouseenter : () => string = function (index:number) :string {
  console.log(index)
  mask.value = index
}
let mouseleave : () => string = function () :string {
  mask.value = -1
}
let delViewPoint : () => string = function (index:number) :string {
  console.log("删除")
  ViewPointList.splice((index + start.value),1)
  if(ViewPointList.slice(start.value,end.value) == [] || ViewPointList.slice(start.value,end.value).length == 0) {
    start.value -= 4
    end.value -= 4
  }
}
let closeView : () => string = function () :string {
  viewpointBox.value = false
}
//翻页
let PageUp : () => string = function () :string {
  if(start.value == 0) {
    return
  }
  start.value -= 4
  end.value -= 4
}
let PageDown : () => string = function () :string {
  if(end.value == ViewPointList.length || ViewPointList.length < end.value) {
    return
  }
  start.value += 4
  end.value += 4
}
//添加
let addViewPoint : () => string = function () :string {
  console.log("点击")
  ViewPointList.push({
    name:"",
    imageUrl:""
  })
}
</script>

<style scoped lang="less">
.titleSelect {
  color: #FFA868 !important;
}
.fx-viewpoint_box {
  position: fixed;
  bottom: 108px;
  width: 987px;
  height: 328px;
  left: 50%;
  transform: translate(-50%,0%);
  background: url("../assets/viewpoint/fx-viewpoint_box_background.png") no-repeat;
  .fx-viewpoint_box_head {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .fx-viewpoint_box_title {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
        margin: 0 10px;
      }
      span {
        font-size: 18px;
        color: white;
      }
    }
    .fx-viewpoint_box_close {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
  }
  .fx-viewpoint_box_content {
    position: relative;
    .fx-viewpoint_box_content_vp {
      display: flex;
      position: absolute;
      left: 50%;
      top: 24px;
      transform: translate(-50%,0%);
      .fx-viewpoint_box_content_vp_t {
        width: 193px;
        height: 227px;
        margin: 0 10px;
        background: url("../assets/viewpoint/fx-viewpoint_box_addViewPointBackground.png") no-repeat;
        position: relative;
        .fx-viewpoint_box_content_addViewPoint {
          width: 115px;
          height: 27px;
          align-items: center;
          border-radius: 20px;
          background: #02609A;
          border: 1px solid #89D2FF;
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 38px;
          left: 50%;
          transform: translate(-50%,0%);
          &:hover {
            background: #57a2d3;
          }
          img {
            width: 16px;
            height: 15px;
            margin: 0 5px;
          }
          span {
            color: white;
            font-size: 14px;
            margin: 0 3px;
          }
        }
        .fx-viewpoint_box_content_mask_viewpointName {
          position: absolute;
          bottom: 16px;
          font-size: 22px;
          left: 50%;
          transform: translate(-50%,0%);
          z-index: 10;
          color: white;
        }
        .fx-viewpoint_box_content_mask {
          position: absolute;
          z-index: 0;
          width: 189px;
          height: 223px;
          background: linear-gradient(180deg, rgba(0,0,0,0.29) 0%, #000000 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            margin: 5px;
            width: 42px;
            height: 42px;
          }
          .fx-viewpoint_box_content_mask_compile {
            background: url("../assets/viewpoint/fx-viewpoint_box_edit.png") no-repeat;
          }
          .fx-viewpoint_box_content_mask_flight {
            background: url("../assets/viewpoint/fx-viewpoint_box_flight.png") no-repeat;

          }
          .fx-viewpoint_box_content_mask_BoxDelete {
            background: url("../assets/viewpoint/fx-viewpoint_box_delete.png") no-repeat;
          }
        }
      }
    }
    .fx-viewpoint_box_leftArrow,.fx-viewpoint_box_RightArrow {
      width: 35px;
      height: 42px;
      position: absolute;
      top: 120px;
    }
    .fx-viewpoint_box_leftArrow {
      left: 35px;
    }
    .fx-viewpoint_box_RightArrow {
      right: 35px;
    }
  }
}
.fx-viewpoint {
  position: fixed;
  right: 17px;
  bottom: 70px;
  z-index: 3;
  img {
    width: 77px;
    height: 76px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: -5px;
    left: 6px;
  }
}
</style>