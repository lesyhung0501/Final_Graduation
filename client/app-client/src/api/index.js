import axios from "axios";
import configs from "../configs";
const axiosAPI = axios.create({
  baseURL: configs.baseUrl,
});

axiosAPI.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAPI.interceptors.response.use(
  function (response) {

    //chỉ trả về data, không trả về các thứ còn lại như status code
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosAPI;
