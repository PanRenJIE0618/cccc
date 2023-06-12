import {defineStore} from "pinia";

type RootState = {
  currentEmergencyPanel: Object | string
}

type RootActions = {
  setCurrentTab: (panel: RootState["currentEmergencyPanel"]) => void
}

export const useStore = defineStore<string, RootState, {}, RootActions>('main', {
  state: () => {
    return {
      currentEmergencyPanel: '',
    };
  },
  actions: {
    setCurrentTab(panel) {
      this.currentEmergencyPanel = panel;
    },
  }
});
