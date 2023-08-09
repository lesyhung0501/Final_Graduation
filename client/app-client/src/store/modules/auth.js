import { signInAPI, signUpAPI, getDetailUserAPI, getAlllUserAPI } from "../../api/auth";

const state = () => {
  return {
    userRegister: {},
    userLogin: {},
    allUser: [],
  };
};

const mutations = {
  setAllUserMutation(state, payload) {
    state.allUser = payload;
  },
  setUserRegisterMutation(state, payload) {
    state.userRegister = payload;
  },
  setUserLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
  },

  setUserLoginAfterUpdateMutation(state, payload) {
    state.userLogin.user = payload;
    localStorage.setItem("userLogin", JSON.stringify(state.userLogin));
  },
};

const actions = {
  async getAllUserAction(context, data) {
    const userList = await getAlllUserAPI();
    context.commit("setAllUserMutation", userList);
  },
  async signUpAction(context, { data, router }) {
    const userRegister = await signUpAPI(data);
    alert("Đăng ký thành công");
    router.push("/sign-in");
    context.commit("setUserRegisterMutation", userRegister);
  },
  async signInAction(context, { data, router, pageRouter }) {
    try {
      const userLogin = await signInAPI(data);
      router.push(`${pageRouter}`);
      context.commit("setUserLoginMutation", userLogin);
      alert("Đăng nhập thành công")
    } catch (error) {
      alert("tài khoản hoặc mật khẩu không chính xác");
    }
  },
  async setUserLoginAfterUpdateAction(context, data ) {
    try {
      const userLogin = await getDetailUserAPI(data);
      context.commit("setUserLoginAfterUpdateMutation", userLogin);
    } catch (error) {
      console.log(error);
    }
  },
  
  loadUserLoginFromLocalStorageAction(context) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    context.commit("setUserLoginFromLocalStorage", userLogin);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
