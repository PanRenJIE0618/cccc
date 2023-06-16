import {http} from "../utils/http.ts";

export type ViewPoint = {
  "locationName": string,
  "locationX": string,
  "locationY": string,
  "locationZ": string,
  "rotaionPitch": string,
  "rotaionHeading": string,
  "rotationRoll": string
}

export const saveViewPoint = (data: ViewPoint) => {
  return http.post('/viewpointLocalization/save', data);
};

export const getViewPointList = () => {
  return http.get('/viewpointLocalization/getViewpointLocation');
};

export const deleteViewPointById = (id: string) => {
  return http.post(`/viewpointLocalization/delete/${id}`);
};

export const changeViewPoint = () => {

};

export const useViewPoint = () => {

};
