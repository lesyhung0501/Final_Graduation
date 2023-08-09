import {
  getTripListByDataseachAPI,
  getTripListAroundByDataseachAPI,
  getTripDetailAPI,
  getTripListByDataseachOrderPriceAPI,
  getTripListByDataseachOrderPriceDescAPI,
  getTripListAroundByDataseachOrderPriceAPI,
  getTripListAroundByDataseachOrderPriceDescAPI,
} from "../../api/trips";
import { formatDate } from "../../utils/format-date";

const state = () => {
  return {
    dataSearch: {},
    isTripAround: false,
    tripList: [],
    tripListAround: [],
    tripDetail: {},
  };
};

const mutations = {
  setDataSearchMutation(state, payload) {
    state.dataSearch = payload;
  },
  setIsTripAroundMutation(state, payload) {
    state.isTripAround = payload;
  },
  setTripListMutation(state, payload) {
    state.tripList = payload;
  },
  setTripListAroundMutation(state, payload) {
    state.tripListAround = payload;
  },
  setTripDetailMutation(state, payload) {
    state.tripDetail = {
      ...payload,
      startTime: formatDate(payload.startTime)
    };
  },
};

const actions = {
  async setIsTripAroundAction(context, payload) {
    context.commit("setIsTripAroundMutation", payload);
  },

  async setDataSearchAction(context, payload) {
    context.commit("setDataSearchMutation", payload);
  },

  async getTripListAction(context, payload) {
    let data = await getTripListByDataseachAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
    context.commit("setTripListMutation", data);
  },

  async getTripListOrderPriceAction(context, payload) {
    let data = await getTripListByDataseachOrderPriceAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
    context.commit("setTripListMutation", data);
  },

  async getTripListOrderPriceDescAction(context, payload) {
    let data = await getTripListByDataseachOrderPriceDescAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
    context.commit("setTripListMutation", data);
  },

  async getTripListAroundAction(context, payload) {
    let data = await getTripListAroundByDataseachAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
    context.commit("setTripListAroundMutation", data);
  },

  async getTripListAroundOrderPriceAction(context, payload) {
    let data = await getTripListAroundByDataseachOrderPriceAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
    context.commit("setTripListAroundMutation", data);
  },

  async getTripListAroundOrderPriceDescAction(context, payload) {
    let data = await getTripListAroundByDataseachOrderPriceDescAPI(payload);
    console.log(data);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
    context.commit("setTripListAroundMutation", data);
  },

  async getTripListOrderHourAction(context, payload) {
    let data = await getTripListByDataseachAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime),
      hourForOrder: parseInt(item.hour.replace('-', ""))
    }));
    data.sort((item1, item2) => item1.hourForOrder - item2.hourForOrder);
    console.log(data);
    context.commit("setTripListMutation", data);
  },

  async getTripListOrderHourDescAction(context, payload) {
    let data = await getTripListByDataseachAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime),
      hourForOrder: parseInt(item.hour.replace('-', ""))
    }));
    data.sort((item1, item2) => item2.hourForOrder - item1.hourForOrder);
    console.log(data);
    context.commit("setTripListMutation", data);
  },

  async getTripListAroundOrderHourAction(context, payload) {
    let data = await getTripListAroundByDataseachAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime),
      hourForOrder: parseInt(item.hour.replace('-', ""))
    }));
    data.sort((item1, item2) => item1.hourForOrder - item2.hourForOrder);
    console.log(data);
    context.commit("setTripListAroundMutation", data);
  },

  async getTripListAroundOrderHourDescAction(context, payload) {
    let data = await getTripListAroundByDataseachAPI(payload);
    data = data.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime),
      hourForOrder: parseInt(item.hour.replace('-', ""))
    }));
    data.sort((item1, item2) => item2.hourForOrder - item1.hourForOrder);
    console.log(data);
    context.commit("setTripListAroundMutation", data);
  },

  async getTripDetailAction({ commit }, payload) {
    const tripDetail = await getTripDetailAPI(payload);
    console.log(tripDetail);
    commit("setTripDetailMutation", tripDetail);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
