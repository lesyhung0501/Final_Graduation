<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="name">Tên bến xe</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập tên bến xe"
            v-model="station.name"
          />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Nhập địa chỉ"
            v-model="station.address"
          />
        </div>
        <div class="form-group">
          <label for="province">Tỉnh/Thành Phố</label>
          <input
            type="text"
            class="form-control"
            id="province"
            placeholder="Nhập tên tỉnh"
            v-model="station.province"
          />
        </div>
        <button
          style="
            margin-top: 100px;
            background-color: #19b453;
            border-radius: 4px;
            color: #fff;
            border: none;
            font-weight: 500;
            padding: 4px;
          "
          type="submit"
          class="btn btn-gradient-primary mr-2"
          @click.prevent="handleSubmit"
        >
          Cập nhật
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("station");
export default {
  props: {
    stationInfo: {
      type: Object,
    },
  },
  data() {
    return {
      station: {
        name: "Bến xe",
        address: "",
        province: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.stationInfo) {
        // update
        this.updateStation(this.station);
      } else {
        this.addStation(this.station);
      }
    },
    ...mapActions({
      addStation: "addStationAction",
      updateStation: "updateStationAction",
    }),
  },
  created() {
    // chuyển đổi props thành data
    if (this.stationInfo) {
      /// ... để tránh tham chiếu
      this.station = { ...this.stationInfo };
    }
  },
};
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
