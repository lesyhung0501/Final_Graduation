<template>
  <section class="listings-container margin-top-0">
    <div class="row fs-switcher">
      <div class="col-md-6">
        <p
          style="color: #cc2407"
          class="showing-results"
          v-if="tripList.length > 0"
        >
          Tìm thấy {{ tripList.length }} chuyến chiều đi
        </p>
        <p v-else>KHÔNG TÌM THẤY CHUYẾN CHIỀU ĐI PHÙ HỢP</p>
      </div>
    </div>

    <!-- Listings -->
    <div class="row fs-listings" v-if="tripList.length > 0">
      <trip-list-items
        v-for="(trip, index) in tripList"
        :key="index"
        :trip="trip"
      />
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("trip");
import TripListItems from "./TripListItems.vue";
export default {
  components: {
    TripListItems,
  },
  computed: {
    ...mapState({
      tripList: (state) => state.tripList,
    }),
  },
};
</script>

<style></style>
