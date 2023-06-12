import {defineStore} from "pinia";

type RootState = {
  currentEmergencyPanel: Object | string,
  currentBottomSelected: Object | string,
}

type RootActions = {
  setCurrentEmergencyPanel: (panel: RootState["currentEmergencyPanel"]) => void,
  setCurrentBottomSelected: (panel: RootState["currentBottomSelected"]) => void,
}

export const useStore = defineStore<string, RootState, {}, RootActions>('main', {
  state: () => {
    return {
      currentEmergencyPanel: '',
      currentBottomSelected: ''
    };
  },
  actions: {
    setCurrentEmergencyPanel(panel) {
      this.currentEmergencyPanel = panel;
    },
    setCurrentBottomSelected(panel) {
      this.currentBottomSelected = panel;
    },
  }
});
