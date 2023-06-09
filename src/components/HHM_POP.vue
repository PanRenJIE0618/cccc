<template>
  <div class="fx-HHM_TableData">
    <div class="fx-HHM_TableData_head">
      <span>{{ Data.title }}</span>
      <span>{{ Data.room }}</span>
    </div>
    <img class="fx-HHM_TableData_close" src="../assets/HHM/fx-HHM_TableData_close.png" alt="">
    <div class="fx-HHM_TableData_select">
      <span :class="{'select':active === index}" v-for="(item,index) in modFa" :key="index"
            @click="selectFa(index)">{{ item.name }}</span>
    </div>
    <div class="fx-HHM_TableData_content">
      <div class="fx-HHM_TableData_content_list">
        <div class="fx-HHM_TableData_content_column" v-for="(item,index) in list.house" :key="index">
          <p class="listTitle">{{ item.name }}</p>
          <p class="listValue">{{ item.value }}</p>
        </div>
        <div class="fx-HHM_TableData_content_column" v-for="(item,index) in list.family" :key="index">
          <p class="listTitle">{{ item.name }}</p>
          <p class="listValue">{{ item.value }}</p>
          <div class="fx-HHM_TableData_content_column2">
            <p class="listTitle">{{ item.name2 }}</p>
            <p class="listValue2">{{ item.value2 }}</p>
          </div>
        </div>
        <div class="fx-HHM_TableData_content_column" v-for="(item,index) in list.OldMan" :key="index">
          <p class="listTitle">{{ item.name }}</p>
          <p class="listValue">{{ item.value }}</p>
        </div>
      </div>
      <div class="fx-HHM_TableData_content_table"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, defineProps, watch, withDefaults, reactive} from 'vue';

let list = reactive<Array>({
  house: [
    {
      name: "所属区域",
      value: "上海市奉贤区"
    },
    {
      name: "地址详情",
      value: "上海市奉贤区xx街道奉贤服务大楼"
    },
    {
      name: "居住房屋类型",
      value: "其他"
    }
  ],
  family: [
    {
      name: "房主姓名",
      value: "张三",
      name2: "房主身份证号",
      value2: 321322889982828280
    },
    {
      name: "房主联系电话",
      value: 137282829229,
      name2: "房屋单位名称",
      value2: "暂无"
    },
    {
      name: "居住人数",
      value: 3,
      name2: "居住户籍人数",
      value2: 3
    },
    {
      name: "居住来沪人数",
      value: 0,
      name2: "居住境外人数",
      value2: 0
    }
  ],
  OldMan: [
    {
      name: "居住60岁以上老人",
      value: 2
    }
  ]
});
let modFa = reactive<Array>([
  {
    name: "房屋信息"
  },
  {
    name: "人员信息"
  }
]);

interface Da {
  title: string;
  room: number;
}

let active = ref(0);
let selectFa: (i: number) => string = function (i: number): string {
  active.value = i;
};
let Data = reactive<Da>({
  title: "奉贤区服务大楼1栋",
  room: 101
});

interface PropsType {
  familyData: object;
}

const props = withDefaults(defineProps<PropsType>(), {
  familyData: {} // 默认值
});
watch(() => props.familyData, (newVal) => {
  console.log(newVal);
  Data.title = newVal.title;
  Data.room = newVal.room;
}, {
  deep: true
});
</script>

<style scoped lang="less">
.select {
  background: url("../assets/HHM/fx-HHM_TableData_select.png") no-repeat !important;
  background-size: 100% 100% !important
}

.fx-HHM_TableData {
  width: 764px;
  height: 495px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url("../assets/HHM/fx-HHm_TableData_background.png") no-repeat;

  .fx-HHM_TableData_content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 300px;

    .fx-HHM_TableData_content_list {
      font-size: 16px;
      line-height: 37px;

      .fx-HHM_TableData_content_column {
        .fx-HHM_TableData_content_column2 {
          display: flex;
          position: absolute;
          right: 0;
        }

        display: flex;

        p {
          margin: 0;
          height: 37px;
          text-indent: 13px;
          color: white;
        }

        .listTitle {
          width: 156px;
          background: #19A8FF;
        }

        .listValue {
          width: 524px;
          background: rgba(17, 88, 152, 0.35);
        }

        .listValue2 {
          width: 195px;
          background: rgba(17, 88, 152, 0.35);
        }

      }
    }
  }

  .fx-HHM_TableData_head {
    font-size: 22px;
    color: white;
    position: absolute;
    top: 37px;
    left: 43px;

    span:last-child {
      color: #FFC683;
      margin-left: 10px;
    }
  }

  .fx-HHM_TableData_select {
    position: absolute;
    top: 93px;
    left: 42px;

    span {
      display: block;
      float: left;
      width: 103px;
      height: 32px;
      color: white;
      font-size: 16px;
      text-align: center;
      line-height: 32px;
      background-color: rgba(17, 88, 152, 0.35);
      margin-right: 15px;
    }
  }

  .fx-HHM_TableData_close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 32px;
    right: 42px;
  }
}
</style>