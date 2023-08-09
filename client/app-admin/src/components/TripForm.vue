<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div
          class="form-group"
          style="display: flex; align-items: center; padding: 10px 0"
        >
          <label for="name" style="width: 15%; display: block">Điểm đi</label>
          <select
            v-model="trip.fromStation"
            style="
              width: 220px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 0;
            "
          >
            <option
              v-for="(station, id) in stationList"
              :key="id"
              :value="station.id"
              :selected="station.id == 3"
            >
              {{ station.name }}
            </option>
          </select>
        </div>

        <div
          class="form-group"
          style="display: flex; align-items: center; padding: 10px 0"
        >
          <label for="name" style="width: 15%; display: block">Điểm đến</label>
          <select
            style="
              width: 220px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 0;
            "
            v-model="trip.toStation"
          >
            <option
              v-for="(station, id) in stationList"
              :key="id"
              :value="station.id"
            >
              {{ station.name }}
            </option>
          </select>
        </div>
        <div
          class="form-group"
          style="display: flex; align-items: center; padding: 10px 0"
        >
          <label for="startTime" style="width: 15%; display: block"
            >Ngày đi</label
          >
          <input
            style="
              width: 132px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 0;
            "
            type="date"
            class="form-control"
            id="startTime"
            placeholder="Nhập ngày đi"
            v-model="trip.startTime"
          />
        </div>
        <div
          class="form-group"
          style="display: flex; align-items: center; padding: 10px 0"
        >
          <label for="name" style="width: 15%; display: block"
            >Thời gian đi</label
          >
          <select
            style="
              width: 44px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 0;
            "
            v-model="trip.hourTime"
          >
            <option
              v-for="(hourTime, id) in arrayHour"
              :key="id"
              :value="hourTime"
            >
              {{ hourTime < 10 ? `0${hourTime}` : hourTime }}
            </option>
          </select>
          <select
            style="
              width: 44px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 0;
              margin-left: 4px;
            "
            v-model="trip.minutesTime"
          >
            <option
              v-for="(minutesTime, id) in arrayMinutes"
              :key="id"
              :value="minutesTime"
            >
              {{ minutesTime < 10 ? `0${minutesTime}` : minutesTime }}
            </option>
          </select>
        </div>
        <div
          class="form-group"
          style="display: flex; align-items: center; padding: 10px 0"
        >
          <label for="price" style="width: 15%; display: block">Giá vé</label>
          <input
            style="
              width: 89px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 6px;
            "
            type="text"
            class="form-control"
            id="price"
            placeholder="Nhập tên tỉnh"
            v-model="trip.price"
          />
        </div>
        <div
          class="form-group"
          style="display: flex; align-items: center; padding: 10px 0"
        >
          <label for="name" style="width: 15%; display: block"
            >Tên công ty</label
          >
          <select
            style="
              width: 220px;
              height: 32px;
              border: 1px solid #ccc;
              font-weight: 500;
              font-size: 15px;
              border-radius: 4px;
              padding: 6px;
            "
            v-model="trip.company_id"
          >
            <option
              v-for="(company, id) in companyList"
              :key="id"
              :value="company.id"
            >
              {{ company.name }}
            </option>
          </select>
        </div>
        <button
          style="
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
import { createArrayNumber } from "../utils/createArrayNumber";
import { createNamespacedHelpers } from "vuex";
const trip = createNamespacedHelpers("trip");
const station = createNamespacedHelpers("station");
const passengerCarCompany = createNamespacedHelpers("passengerCarCompany");
export default {
  props: {
    tripInfo: {
      type: Object,
    },
  },
  data() {
    return {
      trip: {
        fromStation: 1,
        toStation: 2,
        company_id: 1,
        hourTime: 12,
        minutesTime: 0,
        startTime: "",
        price: 500000,
      },
      arrayHour: createArrayNumber(0, 23),
      arrayMinutes: createArrayNumber(0, 59),
    };
  },
  computed: {
    ...station.mapState({
      stationList: (state) => state.stationList,
    }),
    ...passengerCarCompany.mapState({
      companyList: (state) => state.companyList,
    }),
  },
  methods: {
    handleSubmit() {
      if (this.tripInfo) {
        // update

        if (this.trip.hourTime < 10) {
          this.trip.hourTime = "0" + this.trip.hourTime;
        } else {
          this.trip.hourTime = "" + this.trip.hourTime;
        }
        if (this.trip.minutesTime < 10) {
          this.trip.minutesTime = "0" + this.trip.minutesTime;
        } else {
          this.trip.minutesTime = "" + this.trip.minutesTime;
        }
        this.trip = {
          ...this.trip,
          hour: `${this.trip.hourTime}-${this.trip.minutesTime}`,
        };
        console.log(this.trip);
        this.updateTrip(this.trip);
      } else {
        if (this.trip.hourTime < 10) {
          this.trip.hourTime = "0" + this.trip.hourTime;
        } else {
          this.trip.hourTime = "" + this.trip.hourTime;
        }
        if (this.trip.minutesTime < 10) {
          this.trip.minutesTime = "0" + this.trip.minutesTime;
        } else {
          this.trip.minutesTime = "" + this.trip.minutesTime;
        }
        this.trip = {
          ...this.trip,
          hour: `${this.trip.hourTime}-${this.trip.minutesTime}`,
        };
        this.addTrip(this.trip);
      }
    },
    ...trip.mapActions({
      addTrip: "addTripAction",
      updateTrip: "updateTripAction",
    }),
    ...station.mapActions({
      getAllStation: "getAllStationAction",
    }),
    ...passengerCarCompany.mapActions({
      getAllCompany: "getAllCompanyAction",
    }),
  },
  created() {
    // chuyển đổi props thành data
    if (this.tripInfo) {
      const { hour } = this.tripInfo;
      const hourTime = parseInt(hour.slice(0, 2));
      const minutesTime = parseInt(hour.slice(-2));

      const { startTime } = this.tripInfo;
      const year = startTime.slice(-4);
      const month = startTime.slice(3, 5);
      const day = startTime.slice(0, 2);
      /// ... để tránh tham chiếu
      this.trip = {
        ...this.tripInfo,
        startTime: `${year}-${month}-${day}`,
        hourTime: hourTime,
        minutesTime: minutesTime,
      };
    }
    this.getAllStation();
    this.getAllCompany();
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
