<template>
  <div class="fx-viewpoint_box" v-if="viewpointBox">
    <div class="fx-viewpoint_box_head">
      <div class="fx-viewpoint_box_title">
        <img src="../assets/viewpoint/fx-viewpoint_box_eye.png" alt="">
        <span>视点定位</span>
      </div>
      <img @click="closeView" class="fx-viewpoint_box_close" src="../assets/viewpoint/fx-viewpoint_box_close.png"
           alt="">
    </div>
    <div class="fx-viewpoint_box_content">
      <div class="fx-viewpoint_box_content_vp">
        <div class="fx-viewpoint_box_content_vp_t" v-for="(item,index) in ViewPointList.slice(start,end)" :key="index"
             @mouseenter="mouseenter(index)" @mouseleave="mouseleave"
             :style="{'backgroundImage':`url(${item.image})`,'background-repeat':'no-repeat'}">
          <div class="fx-viewpoint_box_content_addViewPoint" v-if="index === (start)" @click="addViewPoint">
            <img src="../assets/viewpoint/fx-viewpoint_box_addViewPoint_icon.png" alt="">
            <span>新增视点</span>
          </div>
          <!--          <span class="fx-viewpoint_box_content_mask_viewpointName" v-if="index !== (start) && index === mask" @click="editName()">-->
          <!--              {{item.name}}-->
          <!--            </span>-->
          <!-- v-if="index !== (start) && index === mask" @click="editName()" -->
          <div class="fx-viewpoint_box_content_mask_viewpointName" v-if="index !== (start) && index === mask"
               @click="focusName(item,index)">
            <el-input
              :disabled="item.disabled"
              v-model="item.name"
              maxlength="7"
              type="text"
              ref="NameInput"
              @keyup.enter.native="editName(item)"
            />
          </div>
          <div class="fx-viewpoint_box_content_mask" v-if="index !== (start) && index === mask">
            <div class="fx-viewpoint_box_content_mask_compile" @click="edit(item)"></div>
            <div class="fx-viewpoint_box_content_mask_flight" @click="flight(item)"></div>
            <div class="fx-viewpoint_box_content_mask_BoxDelete" @click="delViewPoint(index)"></div>
          </div>
        </div>
      </div>
      <img @click="PageUp" class="fx-viewpoint_box_leftArrow" src="../assets/viewpoint/fx-viewpoint_box_Leftarrow.png"
           alt="">
      <img @click="PageDown" class="fx-viewpoint_box_RightArrow"
           src="../assets/viewpoint/fx-viewpoint_box_Rightarrow.png" alt="">
    </div>
  </div>
  <div class="fx-viewpoint" @click="OpenViewPoint">
    <img :src="viewpointBd" alt="">
    <p :class="{'titleSelect':viewpointBox}">视点定位</p>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, onMounted, nextTick} from "vue";
import {getPositiondirection} from "../utils/component";
import {ElMessage} from 'element-plus';

let start: number = ref(0);
let end: number = ref(4);
let mask: number = ref(-1);
let viewer: any = {};
const NameInput = ref();
let viewpointBd: any = ref(new URL("../assets/viewpoint/fx-ViewPoint_background.png", import.meta.url).href);
let viewpointBox: boolean = ref(false);
onMounted(() => {

});
let ViewPointList = reactive<Array>([
  {
    name: "add",
    image: new URL("../assets/viewpoint/fx-viewpoint_box_addViewPointBackground.png", import.meta.url).href,
    disabled: true
  },
]);
let OpenViewPoint: () => string = function (): string {
  let vw = new URL("../assets/viewpoint/fx-ViewPoint_background.png", import.meta.url).href;
  let vws = new URL("../assets/viewpoint/fx-viewpoint_background_select.png", import.meta.url).href;
  viewpointBox.value = !viewpointBox.value;
  viewpointBox.value == true ? viewpointBd.value = vws : viewpointBd.value = vw;

};
//鼠标移入移出
let mouseenter: (index: number) => string = function (index: number): string {
  mask.value = index;
};
let mouseleave: () => string = function (): string {
  mask.value = -1;
  // ViewPointList filter
  ViewPointList.filter((i) => i.disabled = true);
};

let editName: (cp: object) => string = function (cp: object): string {
  cp.disabled = true;
};
let focusName: (cp: object, index: number) => string = function (cp: object, index: number): string {
  cp.disabled = false;
  nextTick(() => {
    NameInput.value[index].focus();
  });
};
//ViewPoint mod
let edit: (cp: object) => string = function (cp: object): string {
  console.log("编辑");
  console.log(cp);
  let promise = viewer.scene.outputSceneToFile();
  Cesium.when(promise, (imgUrl) => {
    let position = getPositiondirection();
    ElMessage({
      message: '编辑视点成功',
      type: 'success',
    });
    // cp.name = "新增视点"
    cp.image = imgUrl;
    cp.position = position;
  });
};
let flight: (position: object) => string = function (position: object): string {
  viewer = window.viewer;
  console.log("飞行");
  console.log(position);
  // 4. 飞向利用方位角(heading)、俯仰角(pitch)、滚动角(roll)表示方向(orientatin)的位置
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(position.position.longitude, position.position.latitude, position.position.height),
    orientation: {
      heading: position.position.heading,
      pitch: position.position.pitch,
      roll: position.position.roll
    }
  });
};
let delViewPoint: (index: number) => string = function (index: number): string {
  console.log("删除");
  ViewPointList.splice((index + start.value), 1);
  if (ViewPointList.slice(start.value, end.value) == [] || ViewPointList.slice(start.value, end.value).length == 0) {
    start.value -= 4;
    end.value -= 4;
  }
};
//关闭
let closeView: () => string = function (): string {
  viewpointBox.value = false;
  viewpointBd.value = new URL("../assets/viewpoint/fx-ViewPoint_background.png", import.meta.url).href;
};
//翻页
let PageUp: () => string = function (): string {
  if (start.value == 0) {
    return;
  }
  start.value -= 4;
  end.value -= 4;
};
let PageDown: () => string = function (): string {
  if (end.value == ViewPointList.length || ViewPointList.length < end.value) {
    return;
  }
  start.value += 4;
  end.value += 4;
};
//添加
let addViewPoint: () => string = function (): string {
  viewer = window.viewer;
  let promise = viewer.scene.outputSceneToFile();
  Cesium.when(promise, (imgUrl) => {
    // console.log("点击")
    let position = getPositiondirection();
    // console.log(position)
    ElMessage({
      message: '新增视点成功',
      type: 'success',
    });
    ViewPointList.push({
      name: "新增视点" + ViewPointList.length,
      image: imgUrl,
      position: position,
      disabled: true
    });
  });
};
</script>

<style scoped lang="less">
.titleSelect {
  color: #FFA868 !important;
}

.fx-viewpoint_box {
  position: fixed;
  bottom: 108px;
  width: 1241px;
  //height: 328px;
  height: 261px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: url("../assets/viewpoint/fx-viewpoint_box_background.png") no-repeat;

  .fx-viewpoint_box_head {
    height: 38px;
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
      //top: 24px;
      top: 40px;
      transform: translate(-50%, 0%);

      .fx-viewpoint_box_content_vp_t {
        //width: 193px;
        //height: 227px;
        width: 250px;
        height: 140px;
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
          bottom: 12px;
          left: 50%;
          transform: translate(-50%, 0%);

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

        .el-input.is-disabled {
          cursor: default;
        }

        .fx-viewpoint_box_content_mask_viewpointName {
          width: 150px;
          text-align: center;
          position: absolute;
          bottom: 16px;
          font-size: 22px;
          left: 50%;
          transform: translate(-50%, 0%);
          z-index: 10;
          color: white;

          /deep/ .el-input__wrapper {
            background-color: transparent;
            border: none;
            box-shadow: none;

            .el-input__inner {
              color: white;
              text-align: center;
              font-size: 22px;
            }

            input:disabled {
              box-shadow: none;
              color: white;
              -webkit-text-fill-color: white;
              cursor: default;
            }
          }
        }

        .fx-viewpoint_box_content_mask {
          position: absolute;
          z-index: 0;
          //width: 193px;
          //height: 227px;
          width: 250px;
          height: 140px;;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
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

    .fx-viewpoint_box_leftArrow, .fx-viewpoint_box_RightArrow {
      width: 35px;
      height: 42px;
      position: absolute;
      //top: 120px;
      top: 85px;
    }

    .fx-viewpoint_box_leftArrow {
      //left: 35px;
      left: 20px;
    }

    .fx-viewpoint_box_RightArrow {
      //right: 35px;
      right: 20px;
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