<template>
  <div class="fx-HHM">
    <div class="fx-HHM_Table">
      <div class="fx-HHM_Table_title">楼栋信息</div>
      <div class="fx-HHM_Table_content">
        <div class="fx-HHM_Table_content_head">
          <p>
            <img src="../assets/HHM/fx-HHM_Table_content_head_icon.png" alt="">
            <span>奉贤区服务大楼</span>
          </p>
          <p>
            地址：上海市奉贤区xx街道奉贤服务大楼
          </p>
        </div>
        <div class="fx-HHM_Table_content_table">
          <div class="fx-HHM_Table_content_table_floor" v-for="(item,index) in building" :key="index">
            <div class="floor">{{ item.floor }}层</div>
            <div class="fx-HHM_Table_content_table_rooms">
              <div class="room" v-for="(room,i) in item.rooms" :key="i" @click="toPop(room)">{{ room.room }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fx-HHM_SumData">
      <div class="fx-HHM_SumData_data">
        <div class="fx-HHM_SumData_data_d" v-for="(item,index) in SunData" :key="index">
          <img :src="item.img" :alt="item.name">
          <p class="fx-HHM_SumData_data_v">
            <span class="fx-HHM_SumData_data_t">{{ item.name }}</span>
            <span :class="{'ftsz':item.name === '开发商'}" class="fx-HHM_SumData_data_vl">{{ item.value }}<span
              class="fx-HHM_SumData_data_un">{{ unit(item.name) }}</span></span>
          </p>
        </div>
      </div>
      <div class="fx-HHM_SumData_img">
        <img src="../assets/HHM/fx-HHM_SumData_img.png" alt="">
        <p>卓越世纪中心小区</p>
      </div>
    </div>
    <HHMpOP :familyData="familyData"></HHMpOP>
  </div>
</template>

<script lang="ts" setup>
import {computed, reactive} from "vue";
import HHMpOP from './HHM_POP.vue';

interface Sum {
  name: string;
  img: string;
  value: any;
}

let familyData = reactive<object>({
  title: "奉贤区服务大楼1栋",
  room: 101
});
console.log(familyData);
let toPop: (item: object) => string = function (item: object): string {
  familyData.room = item.room;
};
let unit = computed<string>(() => (name: string) => {
  let unitText = "";
  switch (name) {
    case "面积" :
      unitText = "m²";
      break;
    case "建设年代" :
      unitText = "年";
      break;
    case "住户" :
      unitText = "户";
      break;
    case "人口" :
      unitText = "人";
      break;
  }
  return unitText;
});
let SunData = reactive<Sum>([
  {
    name: "面积",
    img: new URL("../assets/HHM/fx-HHM_area.png", import.meta.url).href,
    value: "827788"
  },
  {
    name: "开发商",
    img: new URL("../assets/HHM/fx-HHM_developers.png", import.meta.url).href,
    value: "奉贤建筑开发商"
  },
  {
    name: "建设年代",
    img: new URL("../assets/HHM/fx-HHM_construct.png", import.meta.url).href,
    value: "2000"
  },
  {
    name: "住户",
    img: new URL("../assets/HHM/fx-HHM_tenement.png", import.meta.url).href,
    value: "826"
  },
  {
    name: "人口",
    img: new URL("../assets/HHM/fx-HHM_population.png", import.meta.url).href,
    value: "67261"
  },
]);

interface RM {
  id: string;
  room: number;
}

interface LD {
  id: string;
  floor: number;
  rooms?: RM[];
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
): LD[] => {
  let id = 0;
  return Array.from({length: minNodesNumber})
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
      let key = ++id;
      let roomId = 0;
      return {
        id: key,
        floor: key,
        rooms: Array.from({length: 12})
          .fill(deep)
          .map(() => {
            let roomKey = ++roomId;
            return {
              id: roomKey,
              room: (key * 100) + roomKey,
            };
          })
      };
    });
};
let building = reactive<Array>(createData(2, 7, 7));
</script>

<style scoped lang="less">
.ftsz {
  font-size: 16px !important;
}

.fx-HHM {
  position: fixed;
  z-index: 5;

  .fx-HHM_Table {
    width: 353px;
    height: 818px;
    background: url("../assets/HHM/fx-HHM_background.png") no-repeat;
    position: fixed;
    bottom: 85px;
    left: 30px;

    .fx-HHM_Table_title {
      width: 353px;
      height: 32px;
      background: url("../assets/HHM/fx-HHM_head_background.png") no-repeat;
      color: white;
      font-size: 16px;
      padding-left: 40px;
      line-height: 32px;
    }

    .fx-HHM_Table_content {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 13px;

      .fx-HHM_Table_content_head {
        width: 323px;
        height: 84px;
        background: url("../assets/HHM/fx-HHM_Table_content_head_background.png") no-repeat;

        p:first-child {
          margin: 10px;
          height: 30px;
          line-height: 30px;

          img {
            width: 28px;
            height: 27px;
            vertical-align: middle;

          }

          span {
            margin-left: 10px;
          }

          color: #20FAFF;
          font-size: 18px;
        }

        p:last-child {
          color: white;
          font-size: 14px;
          margin-left: 15px;
        }
      }

      .fx-HHM_Table_content_table {
        height: 650px;
        overflow: scroll;
        margin-top: 10px;

        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 0; /*高宽分别对应横竖滚动条的尺寸*/
          height: 0;
        }

        .fx-HHM_Table_content_table_floor {
          width: 323px;
          height: 92px;
          margin: 15px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          background: url("../assets/HHM/fx-HHM_Table_content_head_background.png") no-repeat;

          .floor {
            width: 50px;
            height: 93px;
            background-color: rgba(37, 152, 255, 0.63);
            color: white;
            font-size: 15px;
            line-height: 93px;
            text-align: center;
          }

          .fx-HHM_Table_content_table_rooms {
            width: 273px;
            height: 93px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            overflow: scroll;

            &::-webkit-scrollbar {
              /*滚动条整体样式*/
              width: 0; /*高宽分别对应横竖滚动条的尺寸*/
              height: 0;
            }

            .room {
              width: 73px;
              height: 28px;
              background-color: rgba(0, 126, 255, 0.31);
              border: 1px solid rgba(75, 169, 255, 0.59);
              box-shadow: inset 2px 2px 11px 1px rgba(184, 221, 255, 0.41);
              color: white;
              text-align: center;
              line-height: 28px;
              font-size: 15px;
              margin: 8px 5px;
            }
          }
        }
      }
    }
  }

  .fx-HHM_SumData {
    width: 251px;
    height: 492px;
    position: fixed;
    right: 20px;
    bottom: 86px;
    background: url("../assets/HHM/fx-HHM_SumData_background.png") no-repeat;

    .fx-HHM_SumData_data {
      width: 100%;
      height: 395px;

      .fx-HHM_SumData_data_d {
        height: 80px;
        display: flex;
        align-items: center;
        margin-left: 24px;

        &:first-child {
          margin-top: 42px;
        }

        img {
          width: 54px;
          height: 55px;
        }

        .fx-HHM_SumData_data_v {
          color: white;
          display: flex;
          flex-direction: column;
          margin-left: 15px;

          .fx-HHM_SumData_data_t {
            font-size: 16px;
          }

          .fx-HHM_SumData_data_vl {
            font-size: 24px;
            color: #FFC683;

            .fx-HHM_SumData_data_un {
              font-size: 16px;
              color: white;
            }
          }
        }
      }
    }

    .fx-HHM_SumData_img {
      position: relative;
      display: flex;
      justify-content: center;

      img {
        width: 195px;
        height: 60px;
      }

      p {
        position: absolute;
        color: white;
        font-size: 20px;
        bottom: 15px;
      }
    }

  }
}
</style>