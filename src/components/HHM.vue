<script lang="ts" setup>
import {computed, reactive, ref, onUnmounted} from "vue";
import HHMpOP from './HHM_POP.vue';

interface Sum {
  name: string;
  img: string;
  value: any;
}

interface LC {
  id: string;
  title: string;
  room: number;
}

let familyData = reactive<LC>({
  title: "百通路88弄4号",
  room: null
});

let toPop: (item: object) => string = function (item: object): string {
  familyData.room = item.room;
  console.log(item);
  if (item.room === 1902) {
    Box.value = true;
  }
};

let position1 = reactive<Array>([
  {
    x: -2858229.2560656816,
    y: 4665960.176018165,
    z: 3277189.5602694955,
  },
  {
    x: -2858048.6062963195,
    y: 4666110.848609324,
    z: 3277132.7857896597,
  },
  {
    x: -2857940.851685548,
    y: 4666033.999879874,
    z: 3277336.171699149,
  },
  {
    x: -2858122.3660588604,
    y: 4665882.767055543,
    z: 3277393.190882214,
  },
]);

let height = 0;
let minHeights = [];
let maxHeights = [];
let minH2 = [];
let position2 = reactive<Array>([121.49040627609307, 30.918327091931495, height, 121.48794646671836, 30.917738776868237, height, 121.48741281384808, 30.919937242504258, height, 121.48990667762858, 30.920485063787883, height, 121.49040627609307, 30.918327091931495, height]);

for (let i = 0; i < position2.length / 3; i++) {
  minHeights.push(Math.floor(position2[i * 3 + 2]));
  if (minH2[i - 1] && Math.floor(position2[i * 3 + 2]) !== minH2[i - 1]) {
    minH2[i] = minH2[i - 1];
  } else {
    minH2[i] = Math.floor(position2[i * 3 + 2]);
  }
}
for (let i = 0; i < position2.length / 3; i++) {
  maxHeights.push(position2[i * 3 + 2] + 20);
}
const Wall3D1 = {
  name: '围墙',
  wall: {
    minimumHeights: minHeights,
    maximumHeights: maxHeights,
    material: Cesium.Color.YELLOW.withAlpha(0.3),
    positions: Cesium.Cartesian3.fromDegreesArrayHeights(position2),
  },
};
const Wall3D = {
  name: '围墙',
  wall: {
    minimumHeights: minHeights,
    maximumHeights: new Cesium.CallbackProperty(function () {
      for (let i = 0; i < minH2.length; i++) {
        minH2[i] += 0.1;
        if (minH2[i] >= 20) {
          minH2[i] = 1;
        }
      }
      return minH2;
    }, false),
    material: Cesium.Color.YELLOW.withAlpha(0.5),
    positions: Cesium.Cartesian3.fromDegreesArrayHeights(position2),
  },
};

const label3D = {
  name: "4号",
  label: {
    text:"4号",
    font: "24px Helvetica",
    fillColor: Cesium.Color.WHITE,
    outlineColor: Cesium.Color.fromCssColorString("#FFF"),
    outlineWidth: 1,
    showBackground:true,
    backgroundColor:Cesium.Color.fromCssColorString("#008cff"),
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    position:  Cesium.Cartesian3.fromDegrees(121.48825384669222,30.918073536641835,70),
    pixelOffset: new Cesium.Cartesian2(0, 0)
  },
  position:  Cesium.Cartesian3.fromDegrees(121.48825384669222,30.918073536641835,70)
};
viewer.entities.removeAll();
viewer.entities.add(Wall3D1);
viewer.entities.add(Wall3D);
viewer.entities.add(label3D);

let scene = viewer.scene;
let screenSpaceEventHandler;
screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
screenSpaceEventHandler.setInputAction(function (e) {
  // 获取选中的S3M图层
  let position = viewer.scene.pickPosition(e.position);
  console.log(position);
  let Cartographic = Cesium.Cartographic.fromCartesian(position);
  let longitude = Cesium.Math.toDegrees(Cartographic.longitude);
  let latitude = Cesium.Math.toDegrees(Cartographic.latitude);
  let height = Cartographic.height;
  console.log(longitude);
  console.log(latitude);
  console.log(height);
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
// screenSpaceEventHandler = screenSpaceEventHandler && screenSpaceEventHandler.destroy();

onUnmounted(() => {
  console.log("HHM 页面销毁");
  screenSpaceEventHandler = screenSpaceEventHandler && screenSpaceEventHandler.destroy();
});
//飞行到指定视角
viewer.camera.flyTo({
  destination: new Cesium.Cartesian3.fromDegrees(121.4898096702586, 30.916208488036833, 428.02024401127267),
  orientation: {
    heading: 6.031225809124743,
    pitch: -0.8602720425959918,
    roll: 6.283185307179586
  }
});

let unit = computed<string>(() => (name: string) => {
  let unitText = "";
  switch (name) {
    case "面积" :
      unitText = "m²";
      break;
    case "建筑面积" :
      unitText = "m²";
      break;
    case "规划户数" :
      unitText = "户";
      break;
    case "产权年限" :
      unitText = "年";
      break;
  }
  return unitText;
});

let SunData = reactive<Sum>([
  {
    name: "面积",
    img: new URL("../assets/HHM/fx-HHM_area.png", import.meta.url).href,
    value: "78556"
  },
  {
    name: "开发商",
    img: new URL("../assets/HHM/fx-HHM_developers.png", import.meta.url).href,
    value: "银基发展（上海）投资控股有限公司"
  },
  {
    name: "建筑面积",
    img: new URL("../assets/HHM/fx-HHM_construct.png", import.meta.url).href,
    value: "420658"
  },
  {
    name: "规划户数",
    img: new URL("../assets/HHM/fx-HHM_tenement.png", import.meta.url).href,
    value: "2000"
  },
  {
    name: "产权年限",
    img: new URL("../assets/HHM/fx-HHM_population.png", import.meta.url).href,
    value: "70"
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

let building = reactive<Array>([
  {
    floor: 2,
    id: 2,
    rooms: [
      {
        id: 1,
        room: 202,
        NumPeople: 4
      }
    ]
  },
  {
    floor: 3,
    id: 3,
    rooms: [
      {
        id: 1,
        room: 301,
        NumPeople: 5
      },
      {
        id: 2,
        room: 302,
        NumPeople: 4
      }
    ]
  },
  {
    floor: 4,
    id: 4,
    rooms: [
      {
        id: 1,
        room: 401,
        NumPeople: 6
      },
      {
        id: 2,
        room: 402,
        NumPeople: 2
      }
    ]
  },
  {
    floor: 5,
    id: 5,
    rooms: [
      {
        id: 1,
        room: 501,
        NumPeople: 2
      },
      {
        id: 2,
        room: 502,
        NumPeople: 4
      }
    ]
  },
  {
    floor: 6,
    id: 6,
    rooms: [
      {
        id: 1,
        room: 601,
        NumPeople: 4
      },
      {
        id: 2,
        room: 602,
        NumPeople: 4
      }
    ]
  },
  {
    floor: 7,
    id: 7,
    rooms: [
      {
        id: 1,
        room: 701,
        NumPeople: 3
      },
      {
        id: 2,
        room: 702,
        NumPeople: 2
      }
    ]
  },
  {
    floor: 8,
    id: 8,
    rooms: [
      {
        id: 1,
        room: 801,
        NumPeople: 2
      },
      {
        id: 2,
        room: 802,
        NumPeople: 1
      }
    ]
  },
  {
    floor: 9,
    id: 9,
    rooms: [
      {
        id: 1,
        room: 901,
        NumPeople: 4
      },
      {
        id: 2,
        room: 902,
        NumPeople: 4
      }
    ]
  },
  {
    floor: 10,
    id: 10,
    rooms: [
      {
        id: 1,
        room: 1001,
        NumPeople: 6
      },
      {
        id: 2,
        room: 1002,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 11,
    id: 11,
    rooms: [
      {
        id: 1,
        room: 1101,
        NumPeople: 4
      },
      {
        id: 2,
        room: 1102,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 12,
    id: 12,
    rooms: [
      {
        id: 1,
        room: 1201,
        NumPeople: 3
      },
      {
        id: 2,
        room: 1202,
        NumPeople: 5
      }
    ]
  },
  {
    floor: 13,
    id: 13,
    rooms: [
      {
        id: 1,
        room: 1301,
        NumPeople: 5
      },
      {
        id: 2,
        room: 1302,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 14,
    id: 14,
    rooms: [
      {
        id: 1,
        room: 1401,
        NumPeople: 2
      },
      {
        id: 2,
        room: 1402,
        NumPeople: 2
      }
    ]
  },
  {
    floor: 15,
    id: 15,
    rooms: [
      {
        id: 1,
        room: 1501,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 16,
    id: 16,
    rooms: [
      {
        id: 1,
        room: 1601,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 17,
    id: 17,
    rooms: [
      {
        id: 1,
        room: 1701,
        NumPeople: 4
      },
      {
        id: 1,
        room: 1702,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 18,
    id: 18,
    rooms: [
      {
        id: 1,
        room: 1801,
        NumPeople: 3
      },
      {
        id: 1,
        room: 1802,
        NumPeople: 3
      }
    ]
  },
  {
    floor: 19,
    id: 19,
    rooms: [
      {
        id: 1,
        room: 1901,
        NumPeople: 1
      },
      {
        id: 1,
        room: 1902,
        NumPeople: 3
      }
    ]
  },
]);

// let building = reactive<Array>(createData(2, 7, 7));

let Box = ref(false);
const clickEven = (val: boolean) => {
  Box.value = val;
};

</script>

<template>
  <div class="fx-HHM">
    <div class="fx-HHM_Table">
      <div class="fx-HHM_Table_title">楼栋信息</div>
      <div class="fx-HHM_Table_content">
        <div class="fx-HHM_Table_content_head">
          <p>
            <img src="../assets/HHM/fx-HHM_Table_content_head_icon.png" alt="">
            <span>银河丽湾</span>
          </p>
          <p>
            地址：上海市奉贤区奉贤南桥百通路88弄4号
          </p>
        </div>
        <div class="fx-HHM_Table_content_table">
          <div class="fx-HHM_Table_content_table_floor" v-for="(item,index) in building" :key="index">
            <div class="floor">{{ item.floor }}层</div>
            <div class="fx-HHM_Table_content_table_rooms">
              <div class="room" :class="{'room_select':familyData.room === room.room,'room_err':room.room === 102}"
                   v-for="(room,i) in item.rooms"
                   :key="i" @click="toPop(room)">{{ room.room }} ({{ room.NumPeople }})
              </div>
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
    <HHMpOP :familyData="familyData" @clickClose="clickEven" v-if="Box"></HHMpOP>
  </div>
</template>


<style scoped lang="less">
.ftsz {
  font-size: 14px !important;
}

.room_select {
  background-color: rgba(249, 149, 34, 0.79) !important;
  border: 1px solid rgba(255, 144, 55, 1) !important;
  box-shadow: inset 2px 2px 11px 1px rgba(255, 255, 255, 0.5) !important;
}

.room_err {
  background-color: rgba(14, 160, 163, 0.51) !important;
  border: 1px solid rgba(117, 252, 255, 0.59) !important;
  box-shadow: inset 2px 2px 11px 1px rgba(49, 252, 181, 0.41) !important;
}

.fx-HHM {
  position: fixed;
  z-index: 5;

  &_Table {
    width: 353px;
    height: 818px;
    background: url("../assets/HHM/fx-HHM_background.png") no-repeat;
    position: fixed;
    bottom: 85px;
    left: 30px;

    &_title {
      width: 353px;
      height: 32px;
      background: url("../assets/HHM/fx-HHM_head_background.png") no-repeat;
      color: white;
      font-size: 16px;
      padding-left: 40px;
      line-height: 32px;
    }

    &_content {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 13px;

      &_head {
        width: 323px;
        height: 84px;
        background: url("../assets/HHM/fx-HHM_Table_content_head_background.png") no-repeat;

        p:first-child {
          margin: 10px 10px 0 10px;
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
          margin: 15px 0 0 15px;
        }
      }

      &_table {
        height: 650px;
        overflow: scroll;
        margin-top: 10px;

        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 0; /*高宽分别对应横竖滚动条的尺寸*/
          height: 0;
        }

        &_floor {
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
            justify-content: flex-start;
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

    &_data {
      width: 100%;
      height: 395px;

      &_d {
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
            font-size: 20px;
            color: #FFC683;

            .fx-HHM_SumData_data_un {
              font-size: 16px;
              color: white;
            }
          }
        }
      }
    }

    &_img {
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