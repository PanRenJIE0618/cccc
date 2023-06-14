export function getPositiondirection(viewer) {
  let camera = viewer.scene.camera;
  let cartographit = Cesium.Cartographic.fromCartesian(camera.position);
  let longitude = Cesium.Math.toDegrees(cartographit.longitude);
  let latitude = Cesium.Math.toDegrees(cartographit.latitude);
  let height = cartographit.height;
  return {
    longitude: longitude,
    latitude: latitude,
    height: height,
    heading: camera.heading,
    pitch: camera.pitch,
    roll: camera.roll,
    posttion: camera.position
  };
}

export function getClickOnThePointCoordinates(viewer) {
  let scene = viewer.scene
  let screenSpaceEventHandler;
  screenSpaceEventHandler = screenSpaceEventHandler && screenSpaceEventHandler.destroy();
  screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  screenSpaceEventHandler.setInputAction(function (e) {
    // 获取选中的S3M图层
    let pick = viewr.scene.pick(e.position);
    console.log(pick);

  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}