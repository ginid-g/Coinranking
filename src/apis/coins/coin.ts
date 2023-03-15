import axios from "../axios";

export const getCointList = () => {
  return axios.get("/coins");
};

export const getCoinPriceHistroy = (uuid: string) => {
  return axios.get(`/coin/${uuid}/history`);
};
