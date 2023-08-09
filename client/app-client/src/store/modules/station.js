import { getStationListAPI, getSuggestProvinceAPI } from "../../api/station";

const state = () => {
  return {
    fromStationList: [],
    toStationList: [],
    suggestStation: {},
  };
};

const mutations = {
  setFromStationMutation(state, payload) {
    // console.log(payload);
    state.fromStationList = payload;
  },
  setToStationMutation(state, payload) {
    state.toStationList = payload;
  },
  setSuggestProvinceMutation(state, payload) {
    state.suggestStation = payload;
  },
};

const actions = {
  async getFromStationListAction(context, payload) {
    const data = await getStationListAPI(payload);
    context.commit("setFromStationMutation", data);
  },
  async getToStationListAction(context, payload) {
    const data = await getStationListAPI(payload);
    context.commit("setToStationMutation", data);
  },
  async getSuggestProvinceAction(context, payload) {
    const data = await getSuggestProvinceAPI(payload);
    context.commit("setSuggestProvinceMutation", data);
  },
  // async setFromStationListAction(context, payload) {
  //   context.commit("setFromStationMutation", payload);
  // },
  // async setToStationListAction(context, payload) {
  //   context.commit("setToStationMutation", payload);
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
