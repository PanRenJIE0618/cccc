// @ts-ignore
import {defineStore} from "pinia";

type RootState = {
  currentEmergencyPanel: Object | string,
  currentBottomSelected: Object | string,
  currentHHMexhibition: Object | string,
  currentViewPoint: string,
}

type RootActions = {
  setCurrentEmergencyPanel: (panel: RootState["currentEmergencyPanel"]) => void,
  setCurrentBottomSelected: (panel: RootState["currentBottomSelected"]) => void,
  setCurrentHHMexhibition: (panel: RootState["currentHHMexhibition"]) => void,
  setCurrentViewPoint: (viewPoint: RootState["currentViewPoint"]) => void
}

export const useStore = defineStore<string, RootState, {}, RootActions>('main', {
  state: () => {
    return {
      currentEmergencyPanel: '',
      currentBottomSelected: '',
      currentHHMexhibition: '',
      currentViewPoint: '',
    };
  },
  actions: {
    setCurrentEmergencyPanel(panel) {
      this.currentEmergencyPanel = panel;
    },
    setCurrentBottomSelected(panel) {
      this.currentBottomSelected = panel;
    },
    setCurrentHHMexhibition(panel) {
      this.currentHHMexhibition = panel;
    },
    setCurrentViewPoint(viewPoint) {
      this.currentViewPoint = viewPoint;
    },
  }
});
