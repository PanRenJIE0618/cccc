<script lang="ts" setup>
import {reactive} from 'vue';

let tableTitle = reactive<any>([
  {
    title: "姓名",
    name: "name",
    width: 75
  },
  {
    title: "性别",
    name: "sex",
    width: 50
  },
  {
    title: "年龄",
    name: "age",
    width: 50
  },
  {
    title: "证件号",
    name: "IDNumber",
    width: 160
  },
  {
    title: "实有人口类别",
    name: "type",
    width: 120
  },
  {
    title: "人员类别",
    name: "populationType",
    width: 80
  },
  {
    title: "与户主关系",
    name: "relation",
    width: 100
  },
]);
let tableData = reactive<any>([
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  },
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  },
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  },
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  },
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  },
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  },
  {
    name: "张三",
    sex: "女",
    age: "50",
    IDNumber: "3221222222111111",
    type: "户籍人员",
    populationType: "户籍人员",
    relation: "父女"
  }
]);
</script>

<template>
  <div class="fx-HHM_TableData_content_Data">
    <el-table :data="tableData">
      <el-table-column type="index" label="序号" width="50" align="center"/>
      <el-table-column v-for="(item,index) in tableTitle" :key="index" :prop="item.name" :label="item.title"
                       :width="item.width" align="center"/>
      <el-table-column fixed="right" label="操作" align="center" width="80">
        <template #default="scope">
          <el-button type="text" size="small"
          >详情
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<style scoped lang="less">
.fx-HHM_TableData_content_Data {
  width: 675px;
  height: 300px;

  /deep/ .el-table {
    width: 675px;
    height: 300px;
    color: white;
    background-color: transparent;

    col {
      border: none;
    }

    table {
      border-spacing: 0;
    }

    .el-table__header {
      border-collapse: collapse;
    }

    //列表间距
    .el-table__body {
      -webkit-border-vertical-spacing: 10px; // 垂直间距
    }
    .el-table__inner-wrapper::before {
      width: 0;
    }

    & tr {
      background-color: rgba(17, 88, 152, 0.35);
      td, .el-table__cell {
        border: none;
        background-color: rgba(17, 88, 152, 0.35);
      }
      td,.el-table-fixed-column--right {
        background-color: rgb(17, 88, 152);
      }

      &:hover {
        td {
          background-color: rgba(17, 88, 152, 0.35);
          &,.el-table-fixed-column--right {
            background-color: rgb(17, 88, 152);
          }
        }

      }
    }

    & .cell {
      padding: 0;
    }

    & th.el-table__cell {
      color: white;
      font-size: 16px;
      font-weight: 400;
      height: 37px;
      border: none;
      background-color: #19A8FF;
      //background-color: transparent;
      //-webkit-border-horizontal-spacing:0;
    }
  }
}
</style>
