// @ts-ignore
import request from "../utils/request";

// 获取三维数据
export function get3Ddata() {
  return request({
    url: 'http://221.130.54.58:8091/iserver/services/3D-FengxianV/rest/realspace/datas.rjson',
    method: 'get',
  });
}