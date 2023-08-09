<template>
  <div class="listing-item-container list-layout">
    <a class="listing-item" style="height: 275px">
      <!-- Image -->
      <div class="listing-item-image">
        <img :src="ticket.companyImage" alt="" />
      </div>

      <!-- Content -->
      <div class="listing-item-content">
        <div
          class="listing-badge now-open"
          :class="{ listingNoAccept: ticket.status == 'Chưa thanh toán' }"
        >
          {{ ticket.status }}
        </div>

        <div class="listing-item-inner" style="padding-right: 0px">
          <h3 style="color: #0c90abbf">{{ ticket.companyName }}</h3>
          <h4 style="color: #0c90abbf">
            {{ ticket.fromStationProvince }} - {{ ticket.toStationProvince }}
          </h4>
          <h4 style="color: #0c90abbf">Bến đi: {{ ticket.fromStationName }}</h4>
          <h5 style="margin-left: 62px; color: #0c90abbf">
            {{ ticket.fromStationAddress }}
          </h5>
          <h4 style="color: #0c90abbf">Bến đến: {{ ticket.toStationName }}</h4>
          <h5 style="margin-left: 78px; color: #0c90abbf">
            {{ ticket.toStationAddress }}
          </h5>
          <h4 style="color: #0c90abbf">
            Xuất phát:
            <span style="font-weight: 500; color: #e30b0b"
              >{{ ticket.hour }} ngày {{ ticket.startTime }}</span
            >
          </h4>
          <h4 style="color: #0c90abbf">
            Mã vé:
            <span style="font-weight: 500; color: #e30b0b">{{
              ticket.ticketCode
            }}</span>
          </h4>
          <div
            style="padding: 0; display: flex; justify-content: space-between"
          >
            <div style="color: #0c90abbf; font-weight: 600">
              Giá vé:
              {{
                ticket.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </div>
            <button
              v-show="ticket.status == 'Chưa thanh toán'"
              style="
                background-color: #19b453;
                border-radius: 4px;
                color: #fff;
                border: none;
                font-weight: 500;
              "
              @click="cancelTicket(ticket)"
            >
              Hủy vé
            </button>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("ticket");
export default {
  props: {
    ticket: {
      type: Object,
    },
  },

  methods: {
    ...mapActions({
      cancelTicket: "cancelTicketAction",
    }),
  },
};
</script>

<style>
.listingNoAccept.now-open {
  background-color: #e30b0b;
}
</style>
