// @ts-ignore
import {defineStore} from "pinia";

type RootState = {
  currentEmergencyPanel: Object | string,
  currentBottomSelected: Object | string,
}

type RootActions = {
  setCurrentEmergencyPanel: (panel: RootState["currentEmergencyPanel"]) => void,
  setCurrentBottomSelected: (panel: RootState["currentBottomSelected"]) => void,
}

// @ts-ignore
// @ts-ignore
export const useStore = defineStore<string, RootState, {}, RootActions>('main', {
  state: () => {
    return {
      currentEmergencyPanel: '',
      currentBottomSelected: '',
    };
  },
  actions: {
    setCurrentEmergencyPanel(panel:any) {
      // @ts-ignore
      this.currentEmergencyPanel = panel;
    },
    setCurrentBottomSelected(panel:any) {
      // @ts-ignore
      this.currentBottomSelected = panel;
    }
  }
});
