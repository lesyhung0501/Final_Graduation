import { createStore } from "vuex";
import auth from "./modules/auth";
import ticket from "./modules/ticket";
import station from "./modules/station";
import trip from "./modules/trip";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    ticket,
    station,
    trip,
  },
});
