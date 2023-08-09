import { 
  getAllTicketByTripId,
  getAllTicketNotSoldByTripId, 
  getTicketListByUserIdAPI, 
  cancelTicketAPI,
  // bookingTripAPI 
} from "../../api/ticket";
import { formatDate } from "../../utils/format-date";

const state = () => {
  return {
    ticketListByTripId: [],
    ticketNotSoldList: [],
    ticketByUser: [],
    isBooking: false,
  };
};

const mutations = {
  setTicketListByUserIdMutation(state, payload) {
    state.ticketByUser = payload.map((item) => ({
      ...item,
      startTime: formatDate(item.startTime)
    }))
  },

  setAllTicketByTripIdMutation(state, payload) {
    state.ticketListByTripId = payload;
  },
  
  setTicketNotSoldByTripIdMutation(state, payload) {
    state.ticketNotSoldList = payload;
  },

  setIsBookingMutation(state, payload) {
    state.isBooking = payload;
  },
};

const actions = {
  async getAllTicketByTripIdAction(context , payload) {
    const data = await getAllTicketByTripId(payload);
    context.commit("setAllTicketByTripIdMutation", data);
  },

  async getTicketNotSoldByTripIdAction(context , payload) {
    const data = await getAllTicketNotSoldByTripId(payload);
    context.commit("setTicketNotSoldByTripIdMutation", data);
  },

  // async bookingTicketAction(context , { data, router, checkTripAround }) {
  //   await bookingTripAPI(data);
  //   if(checkTripAround) {
  //     router.push(`/trips-around`);
  //   } else {
  //     router.push(`/user-profile/${data.user_id}`);
  //   }
  // },
  async cancelTicketAction(context, data) {
    await cancelTicketAPI(data.ticketId);
    context.dispatch("getTicketListByUserIdAction", data.userId);
    alert("Hủy vé thành công");
  },

  async getTicketListByUserIdAction(context, payload) {
    const data = await getTicketListByUserIdAPI(payload);
    context.commit("setTicketListByUserIdMutation", data);
  },

  async setIsBookingAction(context, payload) {
    context.commit("setIsBookingMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
