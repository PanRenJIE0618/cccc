// @ts-ignore
import {defineStore} from "pinia";

type RootState = {
  currentEmergencyPanel: Object | string,
  currentBottomSelected: Object | string,
  currentHHMexhibition: Object | string,
}

type RootActions = {
  setCurrentEmergencyPanel: (panel: RootState["currentEmergencyPanel"]) => void,
  setCurrentBottomSelected: (panel: RootState["currentBottomSelected"]) => void,
  currentHHMexhibition: (panel: RootState["currentHHMexhibition"]) => void,
}

export const useStore = defineStore<string, RootState, {}, RootActions>('main', {
  state: () => {
    return {
      currentEmergencyPanel: '',
      currentBottomSelected: '',
      currentHHMexhibition: ''
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
    },
    setCurrentHHMexhibition(panel:any) {
      // @ts-ignore
      this.currentHHMexhibition = panel;
    },
  }
});
