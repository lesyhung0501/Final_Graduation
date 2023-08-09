import axiosAPI from ".";

export const getAllStationAPI = () => {
  return axiosAPI.get("/api/v1/stations");
};

export const addStationAPI = (data) => {
  return axiosAPI.post("/api/v1/stations", data, {
    // headers: {
    //   token,
    // },
  });
};

export const uppdateStationAPI = (data) => {
  return axiosAPI.put(`/api/v1/stations/${data.id}`, data, {
    // headers: {
    //   token,
    // },
  });
};

export const removeStationAPI = (stationId) => {
  return axiosAPI.delete(`/api/v1/stations/${stationId}`);
};
