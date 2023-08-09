import { getAllTripAPI, removeTripAPI, addTripAPI, uppdateTripAPI } from "../../api/trip";
import { formatDate } from "./../../utils/format-date";
const state = () => {
  return {
    tripList: [],
  };
};

const mutations = {
  setTripListMutation(state, payload) {
    state.tripList = payload.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime),
    }));
  },
};

const actions = {
  async getAllTripAction(context) {
    const data = await getAllTripAPI();
    context.commit("setTripListMutation", data);
  },
  async removeTripAction(context, data) {
    await removeTripAPI(data);
    context.dispatch("getAllTripAction");
    alert("Xóa chuyến đi thành công");
  },
  async addTripAction(context, data) {
    await addTripAPI(data); 
    context.dispatch("getAllTripAction");
    alert("Thêm chuyến đi thành công");
  },
  async updateTripAction(context, data) {
    await uppdateTripAPI(data); 
    context.dispatch("getAllTripAction");
    alert("Cập nhật chuyến đi thành công");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
