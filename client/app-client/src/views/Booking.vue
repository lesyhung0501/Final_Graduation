<template>
  <!-- Wrapper -->
  <div id="wrapper" style="margin-bottom: 50px">
    <!-- Gradient-->
    <div class="single-listing-page-titlebar"></div>

    <div class="container">
      <div class="row sticky-wrapper">
        <div class="col-lg-8 col-md-8 padding-right-30">
          <div
            class="boxed-widget opening-hours summary margin-top-30 padding-top-0"
            style="background-color: #f0f0f0"
          >
            <h3 class="padding-top-10">
              <i class="fa fa-calendar-check-o"></i> Chi tiết chuyến đi
            </h3>
            <ul>
              <li>
                Lộ trình
                <span
                  >{{ tripDetail.provinceFromStation }} -
                  {{ tripDetail.provinceToStation }}</span
                >
              </li>
              <li>
                Bến xe đi
                <span
                  >{{ tripDetail.stationFrom }} -
                  {{ tripDetail.addressFromStation }}</span
                >
              </li>

              <li>
                Bến xe đến
                <span
                  >{{ tripDetail.stationTo }} -
                  {{ tripDetail.addressToStation }}</span
                >
              </li>

              <li>
                Dịch vụ
                <span>{{
                  tripDetail.bedroom == 1 ? "Giường nằm" : "Ghế ngồi"
                }}</span>
                <span>{{ tripDetail.wifi == 1 ? "Wifi" : "" }}&nbsp;</span>
                <span>{{ tripDetail.toilet == 1 ? "Toilet" : "" }}&nbsp;</span>
                <span
                  >{{
                    tripDetail.airConditioner == 1 ? "Điều hòa" : ""
                  }}&nbsp;</span
                >
                <span
                  >{{
                    tripDetail.fastFood == 1 ? "Đồ ăn nhanh" : ""
                  }}&nbsp;</span
                >
              </li>

              <li>
                Ngày đi <span>{{ tripDetail.startTime }}</span>
              </li>
              <li>
                Giờ đi <span>{{ tripDetail.hour }}</span>
              </li>
              <li>
                Tổng thời gian dự kiến
                <span>{{ tripDetail.estimatedPeriod }}</span>
              </li>

              <li class="total-costs">
                Giá vé
                <span style="font-size: 17px">{{
                  tripDetail.price?.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
                }}</span>
              </li>
              <li>
                Số lượng
                <span style="color: #f91742; font-weight: 600; font-size: 17px"
                  >x {{ selectedTickets }}</span
                >
              </li>
              <li>
                Tổng tiền
                <span style="color: #f91742; font-weight: 600; font-size: 17px"
                  >{{
                    (tripDetail.price * selectedTickets)?.toLocaleString(
                      "it-IT",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )
                  }}
                </span>
              </li>
            </ul>
          </div>

          <div class="listing-item-container compact order-summary-widget">
            <div
              class="listing-item"
              style="height: 468px; border-radius: 20px"
            >
              <img :src="tripDetail.imageCompany" alt="" style="opacity: 0.8" />

              <div class="listing-item-content" style="top: 0">
                <h3 style="text-align: center; font-weight: 900">
                  {{ tripDetail.companyName }}
                </h3>
                <h3 style="text-align: center; font-weight: 900">
                  {{ tripDetail.descriptionCompany }}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 margin-top-30 sticky">
          <div
            class="verified-badge with-tip"
            data-tip-content="Listing has been verified and belongs the business owner or manager."
          >
            <i class="sl sl-icon-check"></i> Vui lòng chọn chỗ ngồi
          </div>

          <div
            id="booking-widget-anchor"
            class="boxed-widget booking-widget margin-top-0"
            style="padding: 20px"
          >
            <div
              class="title"
              style="display: flex; justify-content: space-between"
            >
              <h3 style="margin: 0; border: 0; margin-left: 12px">
                <i class="fa fa-calendar-check-o"></i> Chỗ ngồi
              </h3>
              <h3 style="margin: 0; border: 0; margin-right: 12px">
                Chú thích
              </h3>
            </div>

            <div
              class="myBooking"
              style="display: flex; justify-content: space-between"
            >
              <div
                class="coach"
                style="padding-right: 50px; border-right: 1px solid #e8e8e8"
              >
                <seat-item
                  v-for="(ticketItem, id) in ticketListByTripId"
                  :key="id"
                  :handleClick="handleClick"
                  :ticket="ticketItem"
                  :row="id"
                />
              </div>

              <div class="booking-note">
                <div
                  class="note-one"
                  style="
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  "
                >
                  <h5>Còn trống</h5>
                  <td class="seat" style="padding: 0 5px">
                    <div class="" style="height: 50px">
                      <svg fill="none" style="width: 35px; height: 50px">
                        <rect
                          :class="{ active: ticket?.ticketId }"
                          x="3"
                          y="3"
                          width="29"
                          height="44"
                          rx="2"
                          fill="#FFF"
                          stroke="#B8B8B8"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></rect>
                        <text x="6" y="20" font-size="14" fill="#707070">
                          {{ ticket?.seatName }}
                        </text>
                        <rect
                          x="6"
                          y="28"
                          width="23"
                          height="7"
                          rx="2"
                          fill="#FFF"
                          stroke="#B8B8B8"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></rect>
                      </svg>
                    </div>
                  </td>
                </div>
                <br />

                <div
                  class="note-two"
                  style="
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  "
                >
                  <h5>Đã bán</h5>
                  <td class="seat" style="padding: 0 5px">
                    <div class="" style="height: 50px">
                      <svg fill="none" style="width: 35px; height: 50px">
                        <rect
                          :class="{ active: ticket?.ticketId }"
                          class="active"
                          x="3"
                          y="3"
                          width="29"
                          height="44"
                          rx="2"
                          fill="#FFF"
                          stroke="#B8B8B8"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></rect>
                        <text x="6" y="20" font-size="14" fill="#707070">
                          {{ ticket?.seatName }}
                        </text>
                        <rect
                          x="6"
                          y="28"
                          width="23"
                          height="7"
                          rx="2"
                          fill="#FFF"
                          stroke="#B8B8B8"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></rect>
                      </svg>
                    </div>
                  </td>
                </div>
                <br />

                <div
                  class="note-three"
                  style="
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  "
                >
                  <h5>Đang chọn</h5>
                  <td class="seat" style="padding: 0 5px">
                    <div class="" style="height: 50px">
                      <svg fill="none" style="width: 35px; height: 50px">
                        <rect
                          :class="{ active: ticket?.ticketId }"
                          class="selectNow"
                          x="3"
                          y="3"
                          width="29"
                          height="44"
                          rx="2"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></rect>
                        <text x="6" y="20" font-size="14" fill="#707070">
                          {{ ticket?.seatName }}
                        </text>
                        <rect
                          x="6"
                          y="28"
                          width="23"
                          height="7"
                          rx="2"
                          fill="#FFF"
                          stroke="#B8B8B8"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></rect>
                      </svg>
                    </div>
                  </td>
                </div>
              </div>
            </div>

            <button
              class="button"
              style="width: 100%; margin-top: 15px"
              @click="handleBooking"
            >
              Đặt ngay
            </button>
          </div>

          <!-- Contact -->
          <div class="boxed-widget margin-top-35" v-if="userLogin.user">
            <div class="hosted-by-title">
              <h4>
                <span>Khách hàng</span>
                <a>{{ userLogin?.user?.name }}</a>
              </h4>
            </div>
            <ul class="listing-details-sidebar">
              <li>
                <i class="sl sl-icon-phone"></i>
                {{ userLogin?.user?.numberphone }}
              </li>

              <li>
                <i class="fa fa-envelope-o"></i>
                <span>{{ userLogin?.user?.email }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import SeatItem from "../components/SeatItem.vue";
import { createNamespacedHelpers } from "vuex";
const trip = createNamespacedHelpers("trip");
const auth = createNamespacedHelpers("auth");
const ticket = createNamespacedHelpers("ticket");
import { bookingTripAPI } from "../api/ticket";
export default {
  components: {
    SeatItem,
  },
  data() {
    return {
      seat_ids: [],
      numberClick: new Array(16).fill(0),
      selectedTickets: 0,
    };
  },
  computed: {
    ...trip.mapState({
      tripDetail: (state) => state.tripDetail,
    }),
    ...trip.mapState({
      isTripAround: (state) => state.isTripAround,
    }),
    ...ticket.mapState({
      ticketNotSoldList: (state) => state.ticketNotSoldList,
    }),
    ...ticket.mapState({
      ticketListByTripId: (state) => state.ticketListByTripId,
    }),
    ...ticket.mapState({
      isBooking: (state) => state.isBooking,
    }),
    ...auth.mapState({
      userLogin: (state) => state.userLogin,
    }),
  },
  methods: {
    ...trip.mapActions({
      getTripDetail: "getTripDetailAction",
      setIsTripAround: "setIsTripAroundAction",
    }),
    ...ticket.mapActions({
      getTicketNotSoldByTripId: "getTicketNotSoldByTripIdAction",
      getAllTicketByTripId: "getAllTicketByTripIdAction",
      setIsBooking: "setIsBookingAction",
    }),
    ...auth.mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
    handleClick({ row, ticket }) {
      if (!ticket.ticketId) {
        this.numberClick[row]++;
        let elementSVG = document.getElementsByTagName("svg")[row];
        if (this.numberClick[row] % 2 == 1) {
          this.selectedTickets++;
          this.seat_ids.push(ticket.seatId);
          elementSVG.firstChild?.classList.add("selectNow");
        } else {
          this.selectedTickets--;
          this.seat_ids.splice(this.seat_ids.indexOf(ticket.seatId), 1);
          elementSVG.firstChild?.classList.remove("selectNow");
        }
      }
    },
    async handleBooking() {
      if (this.userLogin.user) {
        const data = {
          trip_id: parseInt(this.$route.params.tripId),
          user_id: this.userLogin.user.id,
          seat_ids: this.seat_ids,
          userName: this.userLogin.user.name,
          userMail: this.userLogin.user.email,
          companyName: this.tripDetail.companyName,
          phoneCompany: this.tripDetail.phoneCompany,
          provinceFrom: this.tripDetail.provinceFromStation,
          provinceTo: this.tripDetail.provinceToStation,
          startTime: this.tripDetail.startTime,
          hour: this.tripDetail.hour,
          price: this.tripDetail.price,
        };

        await bookingTripAPI(data);
        if (this.isTripAround) {
          this.$router.push(`/trips-around`);
          this.setIsTripAround(!this.isTripAround);
        } else {
          this.$router.push(`/user-profile/${data.user_id}`);
        }
        alert("Đặt vé thành công");
      } else {
        this.setIsBooking(true);
        this.$router.push(`/sign-in`);
        window.scrollTo(0, 0);
      }
    },
  },
  created() {
    this.loadUserLoginFromLocalStorage();
    this.getTripDetail(this.$route.params.tripId);
    this.getTicketNotSoldByTripId(this.$route.params.tripId);
    this.getAllTicketByTripId(this.$route.params.tripId);
    console.log("booking");
  },
  unmounted() {
    console.log("Unmounted trip detail");
  },
};
</script>

<style>
.listTicketContainer {
  color: aliceblue;
}

.listTicketContainer .ticketItem {
  width: 30px;
  height: 50px;
  background-color: #000;
}

.selectNow {
  stroke: rgb(39, 174, 96);
  fill: rgb(139, 229, 176);
}

.active {
  fill: rgb(224, 224, 224);
}
</style>
