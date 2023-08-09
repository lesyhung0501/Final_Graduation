<template>
  <header id="header-container">
    <div id="header">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <div id="logo">
            <a><img src="/images/logo2.png" alt="" /></a>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <router-link to="/">Trang chủ</router-link>
              </li>
              <li>
                <router-link to="/blog">Giới thiệu</router-link>
              </li>
              <!-- <li>
                <router-link to="/contact">Liên hệ</router-link>
              </li> -->
            </ul>
          </nav>
          <div class="clearfix"></div>
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <div class="header-widget">
            <div class="user-menu" v-if="userLogin.user">
              <div class="user-name">
                <span><img :src="userLogin.user.avatar" alt="" /></span>
                {{ userLogin.user.name }}
              </div>
              <ul id="menu-profile">
                <li>
                  <router-link :to="`/user-profile/${userLogin.user.id}`"
                    ><i class="sl sl-icon-settings"></i> Cá nhân</router-link
                  >
                </li>
                <li>
                  <router-link to="/" @click="handleLogout()"
                    ><i class="sl sl-icon-power"></i> Đăng xuất</router-link
                  >
                </li>
              </ul>
            </div>
            <span v-else>
              <router-link to="/sign-in" class="sign-in popup-with-zoom-anim"
                ><i class="sl sl-icon-login"></i> Đăng nhập</router-link
              >
              <router-link to="/sign-up" class="sign-in popup-with-zoom-anim"
                ><i class="sl sl-icon-user-follow"></i> Đăng ký</router-link
              >
            </span>
          </div>
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
  </header>
  <div class="clearfix"></div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("auth");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userLogin: (state) => state.userLogin,
    }),
  },
  methods: {
    ...mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
    handleLogout() {
      localStorage.removeItem("userLogin");
      this.loadUserLoginFromLocalStorage();
    },
  },
};
</script>

<style>
#header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: #fff;
}
.user-menu ul {
  top: 20px;
  right: -14px;
  width: 146px;
}

.user-menu:hover #menu-profile {
  visibility: visible;
  opacity: 1;
}

.user-name span img {
  border-radius: 10px;
  height: 20px;
  width: 55px;
}

.user-name span:after {
  display: none;
}

.user-name span {
  top: 0;
  left: -20px;
}
</style>
