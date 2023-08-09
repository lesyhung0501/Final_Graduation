import { getAllCompanyAPI, addCompanyAPI, uppdateCompanyAPI, removeCompanyAPI } from "../../api/passengerCarCompany";
const state = () => {
  return {
    companyList: [],
  };
};

const mutations = {
  setCompanyListMutation(state, payload) {
    state.companyList = payload;
  },
};

const actions = {
  async getAllCompanyAction(context) {
    const data = await getAllCompanyAPI();
    context.commit("setCompanyListMutation", data);
  },
  async removeCompanyAction(context, data) {
    await removeCompanyAPI(data);
    context.dispatch("getAllCompanyAction");
    alert("Xóa nhà xe thành công");
  },
  async addCompanyAction(context, data) {
    await addCompanyAPI(data); 
    context.dispatch("getAllCompanyAction");
    alert("Thêm nhà xe thành công");
  },
  async updateCompanyAction(context, data) {
    await uppdateCompanyAPI(data); 
    context.dispatch("getAllCompanyAction");
    alert("Cập nhật nhà xe thành công");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
