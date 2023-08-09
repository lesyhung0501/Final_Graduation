<template>
  <div
    class="col-md-12 browse-all-user-listings"
    style="margin: 10px 0 22px 0; padding: 0"
  >
    <button
      style="
        background-color: #19b453;
        border-radius: 4px;
        color: #fff;
        border: none;
        padding: 6px 20px;
        font-size: 16px;
        font-weight: 500;
        cursor: none;
        width: 100%;
      "
    >
      Danh sách vé đã đặt
    </button>
  </div>
  <div class="row">
    <!-- Listing Item -->
    <div
      v-for="(ticket, index) in ticketByUser"
      :key="index"
      class="col-lg-12 col-md-12"
    >
      <trip-item :ticket="ticket"></trip-item>
    </div>
    <!-- Listing Item / End -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ticket");
import TripItem from "./ListingTripItem.vue";
export default {
  components: { TripItem },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ticketByUser: (state) => state.ticketByUser,
    }),
  },
};
</script>

<style></style>
