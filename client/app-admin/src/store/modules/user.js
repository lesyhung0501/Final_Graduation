import { getAllUserAPI, removeUserAPI, addUserAPI, updateUserAPI } from "../../api/user";
import { formatDate } from "./../../utils/format-date";
const state = () => {
  return {
    userList: [],
  };
};

const mutations = {
  setUserListMutation(state, payload) {
    state.userList = payload;
  },
};

const actions = {
  async getAllUserAction(context) {
    const data = await getAllUserAPI();
    context.commit("setUserListMutation", data);
  },
  async removeUserAction(context, data) {
    await removeUserAPI(data);
    context.dispatch("getAllUserAction");
    alert("Xóa người dùng thành công");
  },
  async addUserAction(context, data) {
    await addUserAPI(data); 
    context.dispatch("getAllUserAction");
    alert("Thêm người dùng thành công");
  },
  async updateUserAction(context, data) {
    await updateUserAPI(data); 
    context.dispatch("getAllUserAction");
    alert("Cập nhật người dùng thành công");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
