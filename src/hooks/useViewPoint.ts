import {http} from "../utils/http.ts";

export interface ViewPoint {
  "locationName": string,
  "locationX": string,
  "locationY": string,
  "locationZ": string,
  "rotaionPitch": string,
  "rotaionHeading": string,
  "rotationRoll": string
}

export const addViewPoint1 = (data: ViewPoint) => {
  http.post('/viewpointLocalization/save', data).then(res => {
    console.log('--res--');
    console.log(res);
  });
};

export const getViewPointList = () => {
  return http.get('/viewpointLocalization/getViewpointLocation');
};

export const deleteViewPointById = () => {

};

export const changeViewPoint = () => {

};

export const useViewPoint = () => {

};
