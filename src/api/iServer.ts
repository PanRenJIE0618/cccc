// @ts-ignore
import request from "../utils/request";

// 获取三维数据
export function get3Ddata() {
  return request({
    url: '/api/iserver/services/3D-FengxianV/rest/realspace/datas.rjson',
    method: 'get',
  });
}
// 获取三维数据
export function get3Dblock() {
  return request({
    url: '/api/iserver/services/3D-local3DCache-HB84/rest/realspace/datas.rjson',
    method: 'get',
  });
}
