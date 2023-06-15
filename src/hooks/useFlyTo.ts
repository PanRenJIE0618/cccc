interface Position {
  x: number,
  y: number,
  z: number,
  pitch: number,
  yaw: number,
  roll: number
}

export const useFlyTo = ({x, y, z, pitch, yaw, roll}: Position) => {
  let flag = 0;
  const interval = setInterval(() => {
    const descriptor = {
      "CommandStr": "ViewpointLocalization",
      "Location": {x, y, z,},
      "Rotation": {pitch, yaw, roll}
    };
    emitUIInteraction(descriptor);
    flag += 1;
    if (flag === 10) {
      clearInterval(interval);
    }
  }, 100);
};
