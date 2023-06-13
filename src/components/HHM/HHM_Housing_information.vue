<script lang="ts" setup>
import {reactive} from 'vue';

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

</script>

<template>
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
</template>


<style scoped lang="less">
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
</style>