<template>
  <div class="col-lg-12 col-md-12">
    <div
      @click="handleCLick"
      class="listing-item-container list-layout"
      data-marker-id="2"
    >
      <a class="listing-item" style="height: 270px">
        <div class="listing-item-image">
          <img :src="trip.imageCompany" alt="" />
        </div>

        <div class="listing-item-content">
          <div class="listing-item-inner">
            <h3 style="color: #0c90abbf">{{ trip.companyName }}</h3>
            <h4 style="color: #0c90abbf">Điểm đi: {{ trip.fromProvince }}</h4>
            <h5 style="color: #0c90abbf; font-weight: 500">
              Nơi đón: {{ trip.stationFrom }}
            </h5>
            <h4 style="color: #0c90abbf">Điểm đến: {{ trip.toProvince }}</h4>
            <h5 style="color: #0c90abbf; font-weight: 500">
              Nơi trả: {{ trip.stationTo }}
            </h5>
            <h5 style="color: #0c90abbf">
              Dịch vụ:
              <span style="color: rgba(12, 144, 171, 0.75); font-size: 14px">{{
                trip.bedroom == 1 ? "Giường nằm" : "Ghế ngồi"
              }}</span
              >&nbsp;
              <span style="color: rgba(12, 144, 171, 0.75); font-size: 14px">{{
                trip.wifi == 1 ? "Wifi" : ""
              }}</span
              >&nbsp;
              <span style="color: rgba(12, 144, 171, 0.75); font-size: 14px">{{
                trip.toilet == 1 ? "Toilet" : ""
              }}</span
              >&nbsp;
              <span style="color: rgba(12, 144, 171, 0.75); font-size: 14px">{{
                trip.airConditioner == 1 ? "Điều hòa" : ""
              }}</span
              >&nbsp;
              <span style="color: rgba(12, 144, 171, 0.75); font-size: 14px">{{
                trip.fastFood == 1 ? "Đồ ăn nhanh" : ""
              }}</span>
            </h5>
            <h5 style="color: #0c90abbf">
              Tổng thời gian dự kiến: {{ trip.estimatedPeriod }}
            </h5>

            <h5 style="color: #0c90abbf; font-weight: 600">
              Ngày đi: {{ trip.startTime }}
            </h5>
            <div class="star-rating" data-rating="5.0">
              <div
                class="rating-counter"
                style="font-weight: 600; color: #0c90abbf"
              >
                Giờ đi: {{ trip.hour }}
              </div>
            </div>
          </div>

          <div
            class="listing-item-details"
            style="color: #0c90abbf; font-weight: 600"
          >
            Giá tiền :
            {{
              trip.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trip: {
      type: Object,
    },
  },
  methods: {
    handleCLick() {
      this.$router.push(`/booking/${this.trip.tripId}`);
    },
  },
};
</script>

<style></style>
