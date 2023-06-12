export function getPositiondirection() {
  let camera = window.viewer.scene.camera;
  let cartographit = Cesium.Cartographic.fromCartesian(camera.position);
  let longitude = Cesium.Math.toDegrees(cartographit.longitude);
  let latitude = Cesium.Math.toDegrees(cartographit.latitude);
  let height = cartographit.height;
  let Angle = camera;
  return {
    longitude: longitude,
    latitude: latitude,
    height: height,
    heading: Angle.heading,
    pitch: Angle.pitch,
    roll: Angle.roll,
    posttion: camera.position
  };
}