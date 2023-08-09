<template>
  <tbody>
    <trip-item
      v-for="(trip, index) in tripList"
      :key="index"
      :trip="trip"
    ></trip-item>
  </tbody>
</template>

<script>
import TripItem from "../components/TripItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("trip");
export default {
  components: {
    TripItem,
  },
  data: function () {
    return {};
  },
  watch: {},
  // computed: mapState(["userList"]),
  computed: {
    ...mapState({
      tripList: (state) => state.tripList,
    }),
    // ...mapGetters({
    //   userListFilterBoy: "userListByBoy",
    //   userListBySearchName: "userListBySearchName",
    // }),
  },
  methods: {
    ...mapActions({
      getAllTrip: "getAllTripAction",
    }),
  },
  created() {
    this.getAllTrip();
  },
};
</script>

<style></style>
