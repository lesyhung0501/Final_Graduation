import axiosAPI from ".";

export const getAllCompanyAPI = () => {
  return axiosAPI.get("/api/v1/passengerCarCompanies");
};

export const addCompanyAPI = (data) => {
  console.log(data);
  return axiosAPI.post("/api/v1/passengerCarCompanies", data, {
    // headers: {
    //   token,
    // },
  });
};

export const uppdateCompanyAPI = (data) => {
  return axiosAPI.put(`/api/v1/passengerCarCompanies/${data.id}`, data, {
    // headers: {
    //   token,
    // },
  });
};

export const removeCompanyAPI = (stationId) => {
  return axiosAPI.delete(`/api/v1/passengerCarCompanies/${stationId}`);
};
