import axiosAPI from ".";
export const getStationListAPI = (station) => {
  return axiosAPI.get(`/api/v1/stations?province=${station}`);
};

export const getSuggestProvinceAPI = (userId) => {
  return axiosAPI.get(`/api/v1/stations/getSuggestProvince?userId=${userId}`);
};
