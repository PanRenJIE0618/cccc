export const useTools = () => {
  const measureDistance = () => {
    const action = new SuperMap.Web.UI.Action3Ds.MeasureDistance(viewer);
    viewer.set_sceneAction(action);
  };

  const measureArea = () => {
    const action = new SuperMap.Web.UI.Action3Ds.MeasureArea(viewer);
    viewer.set_sceneAction(action);
  };

  const clear = () => {
    viewer.get_scene().get_trackingLayer3D().removeAll();
  };
  return {measureDistance, measureArea, clear};
};
