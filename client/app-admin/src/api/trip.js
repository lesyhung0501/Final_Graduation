import axiosAPI from ".";

export const getAllTripAPI = () => {
  return axiosAPI.get("/api/v1/trips");
};

export const addTripAPI = (data) => {
  return axiosAPI.post("/api/v1/trips", data, {
    // headers: {
    //   token,
    // },
  });
};

export const uppdateTripAPI = (data) => {
  return axiosAPI.put(`/api/v1/trips/${data.id}`, data, {
    // headers: {
    //   token,
    // },
  });
};

export const removeTripAPI = (tripId) => {
  return axiosAPI.delete(`/api/v1/trips/${tripId}`);
};
