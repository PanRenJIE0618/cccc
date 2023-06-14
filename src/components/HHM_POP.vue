<script lang="ts" setup>
import {ref, defineProps, watch, withDefaults, reactive, defineEmits, onUpdated} from 'vue';
import Housing_information from "./HHM/HHM_Housing_information.vue"
import Personnel_information from "./HHM/HHM_Personnel_information.vue"

let modFa = reactive<Array>([
  {
    name: "房屋信息"
  },
  {
    name: "人员信息"
  }
]);
let Data = reactive<Da>({
  title: "百通路88弄4号",
  room: 101
});
let active = ref(0);

interface Da {
  title: string;
  room: number;
}

interface PropsType {
  familyData: object;
}


let selectFa: (i: number) => string = function (i: number): string {
  active.value = i;
};

const props = withDefaults(defineProps<PropsType>(), {
  familyData: {
    title:"",
    room:null
  } // 默认值
});

watch(() => props.familyData, (newVal) => {
  console.log(newVal);
  Data.title = props.familyData.title;
  Data.room = props.familyData.room;
}, {
  deep: true,
  immediate: true
});

const emit = defineEmits(['clickClose']);

let close: () => string = function (): string {
  emit('clickClose', false);
};

onUpdated(() => {
  console.log("页面数据更新");
});

</script>

<template>
  <div class="fx-HHM_TableData">
    <div class="fx-HHM_TableData_head">
      <span>{{ Data.title }}</span>
      <span>{{ Data.room }}</span>
    </div>
    <img class="fx-HHM_TableData_close" src="../assets/HHM/fx-HHM_TableData_close.png" alt="" @click="close">
    <div class="fx-HHM_TableData_select">
      <span :class="{'select':active === index}" v-for="(item,index) in modFa" :key="index"
            @click="selectFa(index)">{{ item.name }}</span>
    </div>
    <div class="fx-HHM_TableData_content">
      <Housing_information v-if="active === 0"></Housing_information>
      <Personnel_information v-if="active === 1"></Personnel_information>
    </div>
  </div>
</template>

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