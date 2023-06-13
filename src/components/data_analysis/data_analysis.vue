<script lang="ts" setup> import Data_info_layout from "../layout/data_info_layout.vue";
import Data_analysis_item from "./data_analysis_item.vue";
import {ref} from "vue";

const malePercent = ref(21);
const femalePercent = ref(100 - malePercent.value);
</script>

<template>
  <data_info_layout>
    <template v-slot:title>
      基础信息
    </template>
    <template v-slot:content>
      <data_analysis_item>
        <template v-slot:title>
          人口信息
        </template>
        <template v-slot:content>
          <div class="human-info">
            <div><img src="../../assets/data-analysis/live-human.png" alt=""></div>
            <div class="live-human">
              <span class="text">常住人口</span>
              <span class="number">1892899</span>
            </div>
          </div>
          <div class="percent">
            <img src="../../assets/data-analysis/male.png" alt="">
            <div class="progress">
              <div class="male" :style="{width: malePercent+'%'}">{{ malePercent }}%</div>
              <div class="female" :style="{width: femalePercent+'%'}">{{ femalePercent }}%</div>
            </div>
            <img src="../../assets/data-analysis/female.png" alt="">
          </div>
          <div class="identity">
            <div>
              <div>
                <img src="../../assets/data-analysis/grassroots-party.png" alt="">
              </div>
              <div class="grassroots-party">
                <span class="text">基层党员</span>
                <span class="number">28919</span>
              </div>
            </div>
            <div>
              <div>
                <img src="../../assets/data-analysis/oversea.png" alt="">
              </div>
              <div class="oversea">
                <span class="text">境外人员</span>
                <span class="number">5632</span>
              </div>
            </div>
          </div>
        </template>
      </data_analysis_item>
      <data_analysis_item>
        <template v-slot:title>
          建筑房屋信息
        </template>
        <template v-slot:content>
          <div class="building-info">
            <div class="number-info">
              <div>
                <div>
                  <img src="../../assets/data-analysis/building-number.png" alt="">
                </div>
                <div class="building-number">
                  <span class="text">建筑栋数</span>
                  <span class="number">5632</span>
                </div>
              </div>
              <div>
                <div>
                  <img src="../../assets/data-analysis/households-number.png" alt="">
                </div>
                <div class="household-number">
                  <span class="text">社区户数</span>
                  <span class="number">5632</span>
                </div>
              </div>
            </div>
            <div class="live-info">
              <div>
                <span>104</span>
                <span>人户一致</span>
              </div>
              <div>
                <span>104</span>
                <span>自住</span>
              </div>
              <div>
                <span>104</span>
                <span>人户分离</span>
              </div>
              <div>
                <span>104</span>
                <span>空置</span>
              </div>
            </div>
          </div>
        </template>
      </data_analysis_item>
      <data_analysis_item>
        <template v-slot:title>
          疫情防控
        </template>
        <template v-slot:content>
          内容
        </template>
      </data_analysis_item>
    </template>
  </data_info_layout>
</template>

<style lang="less" scoped>
.human-info {
  display: flex;
  align-items: center;
  margin-top: 14px;

  .live-human {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    .text {
      font-weight: 400;
      font-size: 15px;
    }

    .number {
      font-weight: bold;
      font-size: 34px;
    }
  }
}

.percent {
  display: flex;
  justify-content: space-between;

  > .progress {
    width: 300px;
    height: 20px;
    display: flex;

    > .male {
      height: 20px;
      background: rgba(51, 245, 255, 1);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      color: rgba(15, 100, 105, 1);
      padding-left: 6px;
    }

    .female {
      color: rgba(68, 15, 49, 1);
      height: 20px;
      background: rgba(255, 183, 229, 1);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: right;
      padding-right: 6px;
    }
  }
}

.identity {
  display: flex;

  > div {
    display: flex;
    align-items: center;
    margin-top: 14px;

    .grassroots-party {
      .text {
        font-weight: 400;
        font-size: 15px;
      }

      .number {
        font-weight: bold;
        font-size: 28px;
        color: #1AFFD7;
      }
    }

    .oversea {
      .text {
        font-weight: 400;
        font-size: 15px;
      }

      .number {
        font-weight: bold;
        font-size: 28px;
        color: #FFBBA2;
      }
    }

    > div {
      &:first-child {
        margin-right: 12px;
      }
    }
  }
}

.building-info {
  .number-info {
    display: flex;

    > div {
      display: flex;
      align-items: center;

      > div {
        &:first-child {
          margin-right: 12px;
        }

        .text {
          font-weight: 400;
          font-size: 15px;
        }

        .number {
          font-weight: bold;
          font-size: 30px;
        }
      }
    }
  }

  .live-info {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 160px;
      height: 70px;
      margin: 0 12px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > span {
        &:first-child {
          font-weight: bold;
          font-size: 28px;
        }

        &:nth-child(2) {
          font-weight: 400;
          font-size: 14px;
        }
      }

      &:nth-child(1) {
        background: rgba(73, 178, 255, 0.40);
      }

      &:nth-child(2) {
        background: rgba(90, 255, 211, 0.40);
      }

      &:nth-child(3) {
        background: rgba(215, 139, 253, 0.40);
      }

      &:nth-child(4) {
        background: rgba(255, 148, 89, 0.40);
      }
    }
  }
}
</style>
