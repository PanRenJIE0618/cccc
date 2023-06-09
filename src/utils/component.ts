export function getPositiondirection(): string {
  // @ts-ignore
  let camera: any = window.viewer.scene.camera;
  let cartographit: any = Cesium.Cartographic.fromCartesian(camera.position);
  let longitude: number = Cesium.Math.toDegrees(cartographit.longitude);
  let latitude: number = Cesium.Math.toDegrees(cartographit.latitude);
  let height: number = cartographit.height;
  let Angle: object = camera;
  // @ts-ignore
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