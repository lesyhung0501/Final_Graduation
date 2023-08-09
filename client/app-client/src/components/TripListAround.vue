<template>
  <section class="listings-container margin-top-0">
    <div class="row fs-switcher">
      <div class="col-md-6">
        <p
          style="color: #cc2407"
          class="showing-results"
          v-if="tripListAround.length > 0"
        >
          Tìm thấy {{ tripListAround.length }} chuyến chiều về
        </p>
        <p v-else>KHÔNG TÌM THẤY CHUYẾN CHIỀU VỀ PHÙ HỢP</p>
      </div>
    </div>

    <!-- Listings -->
    <div class="row fs-listings" v-if="tripListAround.length > 0">
      <trip-list-items
        v-for="(trip, index) in tripListAround"
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
      tripListAround: (state) => state.tripListAround,
    }),
  },
};
</script>

<style></style>
