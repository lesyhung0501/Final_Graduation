<template>
  <div class="main-search-input">
    <div class="main-search-input-item location" style="flex: 2">
      <div>
        <input type="text" placeholder="Điểm đi" v-model="fromStation" />
      </div>
      <a><i class="fa fa-map-marker"></i></a>
      <ul
        id="listFromStation"
        v-if="fromStationList.length > 0 && fromStation"
        class="list-location"
        ref="listFromStationTag"
      >
        <li
          v-for="(station, index) in fromStationList"
          :key="index"
          @click="handleClickFromStation(station)"
        >
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-tile">{{ station.province }}</span>
        </li>
      </ul>
    </div>

    <div class="main-search-input-item location" style="flex: 2">
      <div>
        <input type="text" placeholder="Điểm đến" v-model="toStation" />
      </div>
      <a><i class="fa fa-map-marker"></i></a>
      <ul
        id="listToStation"
        v-if="toStationList.length > 0 && toStation"
        class="list-location"
        ref="listToStationTag"
      >
        <li
          v-for="(station, index) in toStationList"
          :key="index"
          @click="handleClickToStation(station)"
        >
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-tile">{{ station.province }}</span>
        </li>
      </ul>
    </div>

    <div class="main-search-input-item search-date" style="flex: 1">
      <div>
        <input
          type="date"
          v-model="dateSearch"
          min="2023-05-16"
          max="2023-05-18"
          id="dateSearch"
        />
      </div>
    </div>

    <div
      style="padding: 10px 4px 1px 4px; margin-top: 3px; width: 80px"
      :class="{ borderRoundTrip: roundTrip }"
    >
      <label>
        <input
          type="checkbox"
          v-model="roundTrip"
          style="width: 12px; height: 12px; margin: 3px"
        />Khứ hồi
      </label>
    </div>

    <div
      v-show="roundTrip"
      class="main-search-input-item search-date"
      style="flex: 1"
    >
      <div>
        <input
          type="date"
          min="2023-05-16"
          max="2023-05-18"
          v-model="dateSearchRound"
        />
      </div>
    </div>

    <button class="button" @click="handleClickSearch">Tìm kiếm</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const auth = createNamespacedHelpers("auth");
const station = createNamespacedHelpers("station");
const trip = createNamespacedHelpers("trip");

export default {
  data() {
    return {
      fromStation: "",
      toStation: "",
      dateSearch: new Date().toISOString().split("T")[0],
      roundTrip: false,
      dateSearchRound: new Date().toISOString().split("T")[0],
    };
  },

  watch: {
    fromStation() {
      this.getAllFromStation(this.fromStation);
    },
    toStation() {
      this.getAllToStation(this.toStation);
    },
    roundTrip() {
      console.log("roundTrip: ", this.roundTrip);
      this.setIsTripAround(this.roundTrip);
    },
  },

  computed: {
    ...station.mapState({
      fromStationList: (state) => state.fromStationList,
      toStationList: (state) => state.toStationList,
      // suggestStation: (state) => state.suggestStation,
    }),
    ...trip.mapState({
      isTripAround: (state) => state.isTripAround,
    }),
    ...auth.mapState({
      userLogin: (state) => state.userLogin,
    }),
  },

  methods: {
    ...station.mapActions({
      getAllFromStation: "getFromStationListAction",
      getAllToStation: "getToStationListAction",
      // getSuggestProvince: "getSuggestProvinceAction",
    }),
    ...trip.mapActions({
      setDataSearch: "setDataSearchAction",
      setIsTripAround: "setIsTripAroundAction",
    }),
    handleClickFromStation(station) {
      this.fromStation = station.province;
      this.$refs.listFromStationTag.style.display = "none";
    },
    handleClickToStation(station) {
      this.toStation = station.province;
      this.$refs.listToStationTag.style.display = "none";
    },
    handleClickSearch() {
      const dataSearch = {
        fromStation: this.fromStation,
        toStation: this.toStation,
        dateSearch: this.dateSearch,
        dateSearchRound: this.dateSearchRound,
      };
      this.setDataSearch(dataSearch);
      this.$router.push("/trips");
    },
  },
};
</script>

<style lang="scss">
.main-search-input-item.location {
  position: relative;
  .list-location {
    position: absolute;
    top: 150%;
    list-style: none;
    background: #ffffff;
    color: #222;
    width: 100%;
    border-radius: 20px;
    padding: 7px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    li {
      padding: 10px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        background: #f7f7f7;
      }
      .location-item-tile {
        margin-left: 20px;
      }
    }
  }
}

.borderRoundTrip {
  border-right: 1px solid rgb(233, 233, 233);
}
</style>
