import { getAllTicketByAdmin, removeTicketAPI, uppdateTicketAPI } from "../../api/ticket";
import { formatDate } from "./../../utils/format-date";
const state = () => {
  return {
    ticketList: [],
  };
};

const mutations = {
  setTicketListMutation(state, payload) {
    state.ticketList = payload.map((item) => ({
      ...item,
      ticketCreatedAt: formatDate(item.ticketCreatedAt),
      startTime: formatDate(item.startTime),
    }));
  },
};

const actions = {
  async getAllTicketAction(context) {
    const data = await getAllTicketByAdmin();
    context.commit("setTicketListMutation", data);
  },
  async removeTicketAction(context, data) {
    await removeTicketAPI(data);
    context.dispatch("getAllTicketAction");
    alert("Xóa vé thành công");
  },
  async updateTicketAction(context, data) {
    await uppdateTicketAPI(data); 
    context.dispatch("getAllTicketAction");
    alert("Chấp nhận vé thành công");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
