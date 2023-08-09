<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <div class="fs-container">
      <div
        class="fs-inner-container content"
        style="width: 60%; margin: 30px 20%; padding-top: 0"
      >
        <div style="display: flex">
          <select
            style="
              width: 140px;
              height: 32px;
              color: rgb(35 183 56);
              border: none;
              font-weight: 600;
              font-size: 15px;
              border-radius: 4px;
              margin-left: 40px;
              padding: 0;
            "
            v-model="orderPrice"
          >
            <option value="0">Sắp xếp theo giá</option>
            <option value="1">Giá tăng dần</option>
            <option value="2">Giá giảm dần</option>
          </select>

          <select
            style="
              width: 182px;
              height: 32px;
              color: rgb(35 183 56);
              border: none;
              font-weight: 600;
              font-size: 15px;
              border-radius: 4px;
              margin-left: 40px;
              padding: 0;
            "
            v-model="orderHour"
          >
            <option value="0">Sắp xếp theo thời gian</option>
            <option value="1">Khởi hành sớm nhất</option>
            <option value="2">Khởi hành muộn nhất</option>
          </select>
        </div>

        <div class="fs-content">
          <trip-list></trip-list>
        </div>
      </div>
    </div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const trip = createNamespacedHelpers("trip");
const auth = createNamespacedHelpers("auth");
import TripList from "../components/TripList.vue";
export default {
  components: {
    TripList,
  },
  data() {
    return {
      orderPrice: "0",
      orderHour: "0",
    };
  },

  watch: {
    orderPrice() {
      if (this.orderPrice == "0") {
        this.getTripList(this.dataSearch);
      } else if (this.orderPrice == "1") {
        this.getTripListOrderPrice(this.dataSearch);
      } else {
        this.getTripListOrderPriceDesc(this.dataSearch);
      }
    },
    orderHour() {
      if (this.orderHour == "0") {
        this.getTripList(this.dataSearch);
      } else if (this.orderHour == "1") {
        this.getTripListOrderHour(this.dataSearch);
      } else {
        this.getTripListOrderHourDesc(this.dataSearch);
      }
    },
  },

  computed: {
    ...trip.mapState({
      dataSearch: (state) => state.dataSearch,
      tripList: (state) => state.tripList,
    }),
  },

  methods: {
    ...trip.mapActions({
      getTripList: "getTripListAction",
      getTripListOrderPrice: "getTripListOrderPriceAction",
      getTripListOrderPriceDesc: "getTripListOrderPriceDescAction",
      getTripListOrderHour: "getTripListOrderHourAction",
      getTripListOrderHourDesc: "getTripListOrderHourDescAction",
    }),
    ...auth.mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
  },
  created() {
    this.getTripList(this.dataSearch);
    this.loadUserLoginFromLocalStorage();
  },
};
</script>

<style>
</style>
