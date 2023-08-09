<template>
  <!-- Navigation
	================================================== -->

  <!-- Responsive Navigation Trigger -->
  <a href="#" class="dashboard-responsive-nav-trigger"
    ><i class="fa fa-reorder"></i> Dashboard Navigation</a
  >

  <div class="dashboard-nav">
    <div class="dashboard-nav-inner">
      <ul data-submenu-title="Quản trị" class="allSelectSideBar">
        <li class="active">
          <router-link to="/dashboard" @click="handleClick(0)"
            ><i class="sl sl-icon-settings"></i> Thống kê</router-link
          >
        </li>
        <li>
          <router-link to="/user-management" @click="handleClick(1)"
            ><i class="sl sl-icon-envelope-open"></i> Quản lý người dùng
          </router-link>
        </li>
        <li>
          <router-link to="/ticket-management" @click="handleClick(2)"
            ><i class="fa fa-calendar-check-o"></i>Quản lý vé</router-link
          >
        </li>
        <li>
          <router-link to="/station-management" @click="handleClick(3)"
            ><i class="sl sl-icon-wallet"></i>Quản lý bến xe</router-link
          >
        </li>
        <li>
          <router-link to="/trip-management" @click="handleClick(4)"
            ><i class="sl sl-icon-wallet"></i>Quản lý chuyến đi</router-link
          >
        </li>
        <li>
          <router-link to="/company-management" @click="handleClick(5)"
            ><i class="sl sl-icon-wallet"></i>Quản lý nhà xe</router-link
          >
        </li>
      </ul>

      <ul data-submenu-title="Tài khoản">
        <li>
          <router-link to="/" @click="handleLogout()"
            ><i class="sl sl-icon-power"></i> Đăng xuất</router-link
          >
        </li>
      </ul>
    </div>
  </div>
  <!-- Navigation / End -->
</template>

<script>
export default {
  methods: {
    handleLogout() {
      localStorage.removeItem("userLogin");
    },
    handleClick(id) {
      const liTagListElement = document.querySelectorAll(
        ".dashboard-nav .allSelectSideBar li"
      );
      for (let i = 0; i < liTagListElement.length; i++) {
        liTagListElement[i].setAttribute("class", "none");
      }
      liTagListElement[id].setAttribute("class", "active");
    },
  },
};
</script>

<style>
.active {
  border-color: #f91942;
}
.none {
  border-color: #66676b;
}
</style>
