<script setup lang="ts">
import {ref, onUnmounted} from 'vue';
import type {Ref} from 'vue';
import dayjs from "dayjs";

let UserName = ref("admin")
let menu = ref(false);
let time: Ref<string | number> = ref(dayjs().format("YYYY.MM.DD  HH:mm:ss"));

let Time = setInterval(() => {
  time.value = dayjs().format("YYYY.MM.DD  HH:mm:ss");
}, 1000);

onUnmounted(() => {
  console.log("head 页面销毁");
  clearInterval(Time);
});

let mouseMoveIn: () => any = function (): any {
  menu.value = true;
};

let mouseMoveOut: () => any = function (): any {
  menu.value = false;
};

</script>

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
      <img src="/image/head/fx-head_User_userimage.png" alt="">
      <span class="fx-head_User_text" @mouseover="mouseMoveIn">
          {{ UserName }}
          <img src="/image/head/fx-head_User_Down_arrow.png" alt="">
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

<style scoped lang="less">
.fx-head {
  z-index: 3;
  width: 100%;
  height: 93px;
  background: url("/image/head/fx-head_background.png") no-repeat;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;

  &_Time_weather {
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
      width: 14px;
      height: 14px;
      vertical-align: middle;
      margin-right: 10px;
    }

    &_text {
      color: white;
      font-size: 16px;
      line-height: 40px;
      margin-right: 42px;
      vertical-align: middle;

      img {
        width: 9px;
        height: 7px;
        vertical-align: middle;
      }
    }

    &_menu {
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
        p {
          text-align: center;
          font-size: 14px;
          padding: 5px 0;
          margin: 0;

          &:hover {
            background: #ecf5ff;
          }

          &:first-child {
            margin-top: 10px;
          }
        }
      }
    }
  }
}

</style>
