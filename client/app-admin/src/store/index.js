import { createStore } from "vuex";
import auth from "./modules/auth";
import station from "./modules/station";
import trip from "./modules/trip";
import passengerCarCompany from "./modules/passengerCarCompany";
import user from "./modules/user";
import ticket from "./modules/ticket";
import statistic from "./modules/statistic";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    station,
    trip,
    passengerCarCompany,
    user,
    ticket,
    statistic,
  },
});
