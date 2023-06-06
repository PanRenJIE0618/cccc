<template>
  <div class="fx-head">
    <div class="fx-head_Time_weather">
      <div class="fx-head_Time">
        {{ time }}
      </div>
      <div class="fx-head_weather">
        <p>气温: <span>25.6℃</span></p>
        <p>天气: <span>阴</span></p>
        <p>风向: <span>东南风</span></p>
        <p>风力: <span>3~4级</span></p>
      </div>
    </div>
    <div class="fx-head_User" @mouseleave="mouseMoveOut">
      <img src="../assets/head/fx-head_User_userimage.png" alt="">
      <span class="fx-head_User_text" @mouseover="mouseMoveIn" >
          admin
          <img src="../assets/head/fx-head_User_Down_arrow.png" alt="">
      </span>
      <div class="fx-head_User_menu" v-if="menu">
        <div class="arrow"></div>
        <div class="menu">
          <p>管理</p>
          <p>退出</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, computed, reactive, onUnmounted} from 'vue'
import type { Ref } from 'vue'
import dayjs from "dayjs"
// defineProps<{ msg: string }>()
// console.log(dayjs)
let menu = ref(false)
let time: Ref<string | number> = ref(dayjs().format("YYYY.MM.DD  HH:mm:ss"))
let Time = setInterval(() => {
  time.value = dayjs().format("YYYY.MM.DD  HH:mm:ss")
}, 1000)
onUnmounted(() => {
  console.log("head 页面销毁")
  clearInterval(Time)
})
let mouseMoveIn : () => string = function () :string {
  // console.log("鼠标移入")
  menu.value = true
}
let mouseMoveOut : () => string = function () :string {
  // console.log("鼠标移出")
  menu.value = false
}
//定义变量
// const count = ref(0)
// let year: Ref<string | number> = ref('2020')
// console.log(year.value)
//计算属性
// const yearVal : Ref<string | number> = computed(() => year.value * 3)
//函数变量定义类型
// function handlerChang(event:Event) {
//   console.log(event)
// }
// interface LabelledValue {
//   label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

</script>
<style scoped lang="less">
.fx-head {
  z-index: 3;
  width: 100%;
  height: 93px;
  background: url("../assets/head/fx-head_background.png") no-repeat;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  .fx-head_Time_weather {
    display: flex;
    .fx-head_Time {
      font-size: 14px;
      color: white;
      text-align: center;
      line-height: 40px;
      margin-left: 42px;
    }
    .fx-head_weather {
      display: flex;
      margin: 0 40px;
      p {
        font-size: 14px;
        color: white;
        margin-top: 8px;
        margin-right: 20px;
        span {
          color: #9EDAFF;
        }
      }
    }
  }
  .fx-head_User {
    img {
      vertical-align: middle;
    }
    .fx-head_User_text {
      color: white;
      font-size: 16px;
      line-height: 40px;
      margin-right: 42px;
      vertical-align: middle;
      img {
        vertical-align: middle;
      }
    }
    .fx-head_User_menu {
      width: 100px;
      background: white;
      border-radius: 2px;
      position: fixed;
      top: 36px;
      .arrow {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 7px solid white;
        position: absolute;
        top: -5px;
        left: 40px;
      }
      .menu {
        height: 100px;
        p {
          text-align: center;
          font-size: 14px;
          padding: 5px 0;
          margin:0;
          &:hover {
            background: #ecf5ff;
          }
          &:first-child{
            margin-top: 10px;
          }
        }
      }
    }
  }
}

</style>
