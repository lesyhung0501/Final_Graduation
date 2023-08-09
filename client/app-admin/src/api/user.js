import axiosAPI from ".";

export const getAllUserAPI = () => {
  return axiosAPI.get("/api/v1/users");
};

export const addUserAPI = (data) => {
  return axiosAPI.post("/api/v1/users/register", data, {
    // headers: {
    //   token,
    // },
  });
};

export const updateUserAPI = (data) => {
  return axiosAPI.put(`/api/v1/users/${data.id}`, data, {
    // headers: {
    //   token,
    // },
  });
};

export const removeUserAPI = (userId) => {
  return axiosAPI.delete(`/api/v1/users/${userId}`);
};
