/**
 * @description 获取当前摄像机(camera)的坐标、视角
 * @param viewer
 * @returns {{heading: number, latitude: number, roll: number, pitch: number, position: Cartesian3, longitude: number, height: (*|number|Number)}}
 */
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
    position: camera.position
  };
}

/**
 * @description 获取当前点击位置的坐标
 * @param viewer
 */
export function getClickOnThePointCoordinates(viewer) {
  let scene = viewer.scene
  let screenSpaceEventHandler;
  screenSpaceEventHandler && screenSpaceEventHandler.destroy();
  screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  screenSpaceEventHandler.setInputAction(function (e) {
    // 获取选中的S3M图层
    // let pick = viewer.scene.pick(e.position);
    // console.log(pick);
    let position = viewer.scene.pickPosition(e.position);
    console.log(position);
    let Cartographic = Cesium.Cartographic.fromCartesian(position);
    let longitude = Cesium.Math.toDegrees(Cartographic.longitude);
    let latitude = Cesium.Math.toDegrees(Cartographic.latitude);
    let height = Cartographic.height;
    console.log(longitude);
    console.log(latitude);
    console.log(height);
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

/**
 * @description 获取当前网页IP
 */
export function getCurrentIP() {
  let Ip = window.location.hostname
  console.log(Ip)
}