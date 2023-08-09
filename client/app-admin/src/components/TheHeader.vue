<template>
  <header id="header-container" class="fixed fullwidth dashboard">
    <div id="header" class="not-sticky">
      <div class="container">
        <div class="left-side">
          <div id="logo">
            <router-link to="/dashboard" class="dashboard-logo"
              ><img src="/images/logo2.png" alt=""
            /></router-link>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <router-link to="/dashboard">Trang chủ</router-link>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>

        <div class="right-side">
          <div class="header-widget">
            <div class="user-menu">
              <div class="user-name">
                <span
                  ><img
                    :src="userLogin?.user?.avatar"
                    alt=""
                    style="border-radius: 20px"
                /></span>
                {{ userLogin?.user?.name }}
              </div>
            </div>
          </div>
        </div>
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
  methods: {},
};
</script>

<style>
.user-menu .user-name span {
  left: -18px;
  top: -2px;
}
.user-menu .user-name span:after {
  content: none;
}
.user-menu .user-name:after {
  content: "";
}
</style>
