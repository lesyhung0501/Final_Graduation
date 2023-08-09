import axiosAPI from ".";

export const signUpAPI = (userRegister) => {
  return axiosAPI.post("/api/v1/users/register", userRegister);
};

export const signInAPI = (userLogin) => {
  return axiosAPI.post("/api/v1/users/login", userLogin);
};

export const uploadAvatarAPI = (data) => {
  
  let token = null;
  if(JSON.parse(localStorage.getItem("userLogin"))) {
    token = JSON.parse(localStorage.getItem("userLogin")).token;
  }
  console.log(token);
  return axiosAPI.post("/api/v1/users/upload-avatar", data, {
    headers: {
      token,
    },
  });
};

export const getDetailUserAPI = (userId) => {
  return axiosAPI.get(`/api/v1/users/${userId}`);
};

export const getAlllUserAPI = () => {
  return axiosAPI.get(`/api/v1/users/`);
};

export const updateUserAPI = (data) => {
  return axiosAPI.put(`/api/v1/users/${data.id}`, data, {
    // headers: {
    //   token,
    // },
  });
};
