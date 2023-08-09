import { getTotalIncome, getQuantityBookedTicket, getQuantityBookedTicketByMaxCompany, 
  getQuantityTicketNotPayment, getQuantityTicketOfAllCompany } from "../../api/statistic";
const state = () => {
  return {
    totalIncome: 0,
    quantityBookingTicket: 0,
    company: {},
    quantityTicketNotPayment: 0,
    quantityTicketOfAllCompany: [],
  };
};

const mutations = {
  setTotalIncomeMutation(state, payload) {
    const {total} = payload;
    state.totalIncome = total;
  },

  setQuantityBookedTicketMutation(state, payload) {
    const {quantityBookedTicket} = payload;
    state.quantityBookingTicket = quantityBookedTicket;
  },

  setQuantityBookedTicketByMaxCompanyMutation(state, payload) {
    console.log(payload);
    state.company = payload;
  },

  setQuantityTicketNotPaymentMutation(state, payload) {
    const {quantityTicketNotPayment} = payload;
    state.quantityTicketNotPayment = quantityTicketNotPayment;
  },

  setQuantityTicketOfAllCompanyMutation(state, payload) {
    state.quantityTicketOfAllCompany = payload;
  },
};

const actions = {
  async getTotalIncomeAction(context) {
    const data = await getTotalIncome();
    context.commit("setTotalIncomeMutation", data);
  },

  async getQuantityBookedTicketAction(context) {
    const data = await getQuantityBookedTicket();
    context.commit("setQuantityBookedTicketMutation", data);
  },

  async getQuantityBookedTicketByMaxCompanyAction(context) {
    const data = await getQuantityBookedTicketByMaxCompany();
    context.commit("setQuantityBookedTicketByMaxCompanyMutation", data);
  },

  async getQuantityTicketNotPaymentAction(context) {
    const data = await getQuantityTicketNotPayment();
    context.commit("setQuantityTicketNotPaymentMutation", data);
  },

  async getQuantityTicketOfAllCompanyAction(context) {
    const data = await getQuantityTicketOfAllCompany();
    context.commit("setQuantityTicketOfAllCompanyMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
