import { getAllStationAPI, removeStationAPI, addStationAPI, uppdateStationAPI } from "../../api/station";
const state = () => {
  return {
    stationList: [],
  };
};

const mutations = {
  setStationListMutation(state, payload) {
    state.stationList = payload;
  },
};

const actions = {
  async getAllStationAction(context) {
    const data = await getAllStationAPI();
    context.commit("setStationListMutation", data);
  },
  async removeStationAction(context, data) {
    await removeStationAPI(data);
    context.dispatch("getAllStationAction");
    alert("Xóa bến xe thành công");
  },
  async addStationAction(context, data) {
    await addStationAPI(data); 
    context.dispatch("getAllStationAction");
    alert("Thêm bến xe thành công");
  },
  async updateStationAction(context, data) {
    await uppdateStationAPI(data); 
    context.dispatch("getAllStationAction");
    alert("Cập nhật bến xe thành công");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
