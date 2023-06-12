<script setup lang="ts">
import {ref} from "vue";
import {useStore} from "../../store";
import Fire_facilities_list from "./fire_facilities_list.vue";
import Emergency_plan_list from "./emergency_plan_list.vue";

interface EmergencyAction {
  name: string;
}

const store = useStore();

const emergencyActionList = ref<Array<EmergencyAction>>([
  {name: '应急预案'},
  {name: '室内应急设施'},
  {name: '消防设施'},
  {name: '应急队伍'},
  {name: '应急安置点'},
  {name: '应急逃生路线'},
]);

const currentAction = ref<EmergencyAction>({
  name: ''
});

const handleClickAction = (item) => {
  currentAction.value = item;
  switch (item.name) {
    case '应急预案':
      store.setCurrentEmergencyPanel(Emergency_plan_list);
      break;
    case '消防设施':
      store.setCurrentEmergencyPanel(Fire_facilities_list);
      break;
  }
};
</script>

<template>
  <div class="fx-emergency-actions">
    <div v-for="item in emergencyActionList" :key="item.name"
         :class="item.name === currentAction.name ? 'active': ''"
         @click="handleClickAction(item)"
    >
      {{ item.name }}
    </div>
  </div>
  <component :is="store.currentEmergencyPanel"/>
</template>

<style lang="less" scoped>
.fx-emergency-actions {
  height: 32px;
  z-index: 5;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 76px;
  display: flex;
  color: #fff;

  > div {
    cursor: pointer;
    margin: 0 10px;
    width: 121px;
    height: 32px;
    background: rgba(17, 88, 152, 0.6);
    box-shadow: inset 0px 1px 13px 2px rgba(0, 158, 255, 0.5);
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;

    &.active {
      background-color: transparent;
      background-image: url("../../assets/emergency-plan/action-active-bg.png");
    }
  }
}
</style>
