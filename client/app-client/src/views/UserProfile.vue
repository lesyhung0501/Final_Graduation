<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <div class="container">
      <div class="row sticky-wrapper">
        <div class="col-lg-4 col-md-4 margin-top-0">
          <user-detail-side-bar></user-detail-side-bar>
        </div>

        <div class="col-lg-8 col-md-8 padding-left-30">
          <listing-trip-booking></listing-trip-booking>
        </div>
      </div>
    </div>
    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const auth = createNamespacedHelpers("auth");
const ticket = createNamespacedHelpers("ticket");
import ListingTripBooking from "../components/ListingTripBooking.vue";
import UserDetailSideBar from "../components/UserDetailSideBar.vue";
export default {
  components: { UserDetailSideBar, ListingTripBooking },
  data() {
    return {};
  },
  computed: {
    ...auth.mapState({
      userLogin: (state) => state.userLogin,
    }),
  },
  methods: {
    ...auth.mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
    ...ticket.mapActions({
      getTicketListByUserId: "getTicketListByUserIdAction",
    }),
  },
  created() {
    this.loadUserLoginFromLocalStorage();
    this.getTicketListByUserId(this.$route.params.userId);
  },
};
</script>

<style>
#wrapper {
  margin-top: 80px;
}
</style>
