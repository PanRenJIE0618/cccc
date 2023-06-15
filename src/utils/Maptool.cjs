class Maptools {
  constructor() {
    //测量结果集合
    this.DrawingResult = [];
    //可视域分析结果对象
    this.viewshed3DList = {};
    //可视域分析点位对象
    this.pointHandler = {};
    //Viewr部件
    this.viewer = {};
    //天际线分析对象
    this.skyline = {};
  }

  /***
   * @function measuringdistance
   * @description 测量距离
   * @param viewer {Object} 部件
   */
  measuringdistance(viewer) {
    let handlerDis = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.Distance, 0);
    // 注册测距功能事件
    handlerDis.measureEvt.addEventListener(function (result) {
      console.log(result);
      const dis = Number(result.distance)
      const distance = dis > 1000 ? (dis / 1000).toFixed(2) + "km" : dis.toFixed(2) + "m"
      handlerDis.disLabel.text = "距离:" + distance;
    });
    // handlerDis.activeEvt.addEventListener(function(isActive) {
    //   if (isActive == true) {
    //     viewer.enableCursorStyle = false;
    //     viewer._element.style.cursor = "";
    //   } else {
    //     viewer.enableCursorStyle = true;
    //   }
    // });
    handlerDis && handlerDis.activate();
    this.DrawingResult.push(handlerDis);
  }

  /***
   * @function measuringheight
   * @description 测量高度
   * @param viewer {Object} 部件
   */
  measuringheight(viewer) {
    const handlerHeight = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.DVH)
    // 注册测距功能事件
    handlerHeight.measureEvt.addEventListener(function (result) {
      const distance = result.distance > 1000 ? (result.distance / 1000).toFixed(2) + "km" : (result.distance * 1).toFixed(2) + "m"
      const vHeight = result.verticalHeight > 1000 ? (result.verticalHeight / 1000).toFixed(2) + "km" : (result.verticalHeight * 1).toFixed(2) + "m"
      const hDistance = result.horizontalDistance > 1000 ? (result.horizontalDistance / 1000).toFixed(2) + "km" : (result.horizontalDistance * 1).toFixed(2) + "m"
      handlerHeight.disLabel.text = "空间距离:" + distance;
      handlerHeight.vLabel.text = "垂直高度:" + vHeight;
      handlerHeight.hLabel.text = "水平距离:" + hDistance;
    });
    handlerHeight.activeEvt.addEventListener(function (isActive) {
      if (isActive == true) {
        viewer.enableCursorStyle = false;
        viewer._element.style.cursor = "";
      } else {
        viewer.enableCursorStyle = true;
      }
    });
    handlerHeight && handlerHeight.activate();
    this.DrawingResult.push(handlerHeight);
  }

  /***
   * @function measuringArea
   * @description 测量面积
   * @param viewer {Object} 部件
   */
  measuringArea(viewer) {
    const handlerArea = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.Area)
    // 注册测距功能事件
    handlerArea.measureEvt.addEventListener(function (result) {
      const area = result.area > 1000000 ? result.area / 1000000 + 'km²' : result.area + '㎡'
      handlerArea.areaLabel.text = '面积:' + area;
    });
    // handlerArea.activeEvt.addEventListener(function(isActive) {
    //   if (isActive == true) {
    //     viewer.enableCursorStyle = false;
    //     viewer._element.style.cursor = "";
    //   } else {
    //     viewer.enableCursorStyle = true;
    //   }
    // });
    handlerArea && handlerArea.activate();
    this.DrawingResult.push(handlerArea);
  }

  /***
   * @function Visibleanalysis
   * @description 可视域分析
   * @param viewer {Object} 部件
   * @constructor
   */
  Visibleanalysis(viewer) {
    const _that = this
    if (this.viewshed3DList != "") {
      this.viewer.scene.viewFlag = true;
      this.pointHandler.clear();
      this.viewshed3DList.distance = 0.1;
    }
    this.viewer = viewer;
    const scene = viewer.scene
    let viewPosition
    if (!scene.pickPositionSupported) {
      alert("不支持深度纹理,可视域分析功能无法使用（无法添加观测）！");
    }
    // 先将此标记置为true，不激活鼠标移动事件中对可视域分析对象的操作
    scene.viewFlag = true;
    // 创建点位对象
    const pointHandler = new Cesium.DrawHandler(viewer, Cesium.DrawMode.Point)
    // 创建可视域分析对象
    this.viewshed3DList = new Cesium.ViewShed3D(scene);
    //可视域分析对象属性
    const viewModel = {
      direction: 1.0,
      pitch: 1.0,
      distance: 1.0,
      verticalFov: 1.0,
      horizontalFov: 1.0,
    }
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
    handler.setInputAction(function (e) {
      //鼠标右键事件回调，不再执行鼠标移动事件中对可视域的操作
      scene.viewFlag = true;
      viewModel.direction = _that.viewshed3DList.direction;
      viewModel.pitch = _that.viewshed3DList.pitch;
      viewModel.distance = _that.viewshed3DList.distance;
      viewModel.horizontalFov = _that.viewshed3DList.horizontalFov;
      viewModel.verticalFov = _that.viewshed3DList.verticalFov;
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    //激活绘制点类
    pointHandler.activate();
    pointHandler.drawEvt.addEventListener(function (result) {
      const point = result.object
      const position = point.position
      viewPosition = position;
      // 将获取的点的位置转化成经纬度
      const cartographic = Cesium.Cartographic.fromCartesian(position)
      const longitude = Cesium.Math.toDegrees(cartographic.longitude)
      const latitude = Cesium.Math.toDegrees(cartographic.latitude)
      const height = cartographic.height + 1.8
      point.position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);
      if (scene.viewFlag) {
        // 设置视口位置
        _that.viewshed3DList.viewPosition = [longitude, latitude, height];
        _that.viewshed3DList.build();
        // 将标记置为false以激活鼠标移动回调里面的设置可视域操作
        scene.viewFlag = false;
      }
    });
    // 鼠标移动时间回调
    handler.setInputAction(function (e) {
      // 若此标记为false，则激活对可视域分析对象的操作
      if (!scene.viewFlag) {
        //获取鼠标屏幕坐标,并将其转化成笛卡尔坐标
        const position = e.endPosition
        const last = scene.pickPosition(position)
        //计算该点与视口位置点坐标的距离
        const distance = Cesium.Cartesian3.distance(viewPosition, last)
        if (distance > 0) {
          // 将鼠标当前点坐标转化成经纬度
          const cartographic = Cesium.Cartographic.fromCartesian(last)
          const longitude = Cesium.Math.toDegrees(cartographic.longitude)
          const latitude = Cesium.Math.toDegrees(cartographic.latitude)
          const height = cartographic.height
          // 通过该点设置可视域分析对象的距离及方向
          _that.viewshed3DList.setDistDirByPoint([longitude, latitude, height]);
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.pointHandler = pointHandler;
  }

  /***
   * @function skylineanalysis
   * @description 天际线分析
   * @param viewer {Object} 部件
   */
  skylineanalysis(viewer) {
    var scene = viewer.scene;
    if (this.skyline) {
      this.skyline.clear();
    }
    this.skyline = new Cesium.Skyline(scene);//创建天际线分析对象
    var cartographic = scene.camera.positionCartographic;
    var longitude = Cesium.Math.toDegrees(cartographic.longitude);
    var latitude = Cesium.Math.toDegrees(cartographic.latitude);
    var height = cartographic.height;
    //天际线分析的视口位置设置成当前相机位置
    this.skyline.viewPosition = [longitude, latitude, height];
    //设置俯仰和方向
    this.skyline.pitch = Cesium.Math.toDegrees(scene.camera.pitch);
    this.skyline.direction = Cesium.Math.toDegrees(scene.camera.heading);
    this.skyline.radius = 10000; // 天际线分析半径设置为10000米
    this.skyline.build();
  }

  /***
   * @function panorama
   * @description 回归初始化视角
   * @param viewer {Object} 部件
   * @param position {Object} 坐标
   * @param Directional {Object} 方向角度
   */
  panorama(viewer, position, Directional) {
    viewer.camera.setView({
      destination: new Cesium.Cartesian3(position.longitude, position.latitude, position.height),
      orientation: {
        heading: Directional.heading,
        pitch: Directional.pitch,
        roll: Directional.roll
      }
    });
  }

  /***
   * @function clear
   * @description 清除所有绘制效果
   */
  clear(viewer) {
    this.viewer = viewer;
    if (this.DrawingResult.length != 0) {
      this.DrawingResult.filter((i) => i.clear());
      this.DrawingResult = [];
    }
    if (this.viewer.entities.values.length != 0) {
      this.viewer.entities.removeAll();
    }
    if (this.skyline.viewPosition != undefined) {
      this.skyline.clear();
      this.skyline = {};
    }
    if (this.viewshed3DList.viewPosition != undefined) {
      this.viewer.scene.viewFlag = true;
      this.viewshed3DList.distance = 0.1;
      this.viewshed3DList = new Cesium.ViewShed3D(this.viewer.scene);
      this.pointHandler.clear();
      this.viewshed3DList = {};
    }
  }
}

export default {
  Maptools
};