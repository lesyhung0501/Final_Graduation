<template>
  <tbody>
    <station-item
      v-for="(station, index) in stationList"
      :key="index"
      :station="station"
    ></station-item>
  </tbody>
</template>

<script>
import StationItem from "../components/StationItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("station");
export default {
  components: {
    StationItem,
  },
  data: function () {
    return {};
  },
  watch: {},
  // computed: mapState(["userList"]),
  computed: {
    ...mapState({
      stationList: (state) => state.stationList,
    }),
    // ...mapGetters({
    //   userListFilterBoy: "userListByBoy",
    //   userListBySearchName: "userListBySearchName",
    // }),
  },
  methods: {
    ...mapActions({
      getAllStation: "getAllStationAction",
    }),
  },
  created() {
    this.getAllStation();
  },
};
</script>

<style></style>
