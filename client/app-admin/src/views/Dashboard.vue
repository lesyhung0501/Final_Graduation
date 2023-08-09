<template>
  <!-- Content
	================================================== -->
  <div class="dashboard-content" style="padding-top: 10px">
    <!-- Content -->
    <div class="row">
      <!-- Item -->
      <div class="col-lg-3 col-md-6">
        <div class="dashboard-stat color-1">
          <div class="dashboard-stat-content" style="width: 50%; left: 10px">
            <h4 style="font-size: 30px">
              {{
                totalIncome.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </h4>
            <span>Tổng doanh thu</span>
          </div>
          <div class="dashboard-stat-icon">
            <i class="im im-icon-Map2"></i>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col-lg-3 col-md-6">
        <div class="dashboard-stat color-2">
          <div class="dashboard-stat-content" style="width: 70%">
            <h4>{{ quantityBookingTicket }}</h4>
            <span>Số vé được đặt</span>
          </div>
          <div class="dashboard-stat-icon">
            <i class="im im-icon-Line-Chart"></i>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col-lg-3 col-md-6">
        <div class="dashboard-stat color-3">
          <div class="dashboard-stat-content" style="width: 70%">
            <h4>{{ quantityTicketNotPayment }}</h4>
            <span>Số vé chưa thanh toán</span>
          </div>
          <div class="dashboard-stat-icon">
            <i class="im im-icon-Add-UserStar"></i>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col-lg-3 col-md-6">
        <div class="dashboard-stat color-4">
          <div class="dashboard-stat-content" style="width: 71%">
            <span style="font-weight: 600">{{ company?.companyName }}</span>
            <span>Nhà xe được yêu thích</span>
          </div>
          <div class="dashboard-stat-icon">
            <i class="im im-icon-Heart"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <canvas id="myChart" style="height: 450px; margin: auto"></canvas>
    </div>
  </div>
  <!-- Content / End -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const auth = createNamespacedHelpers("auth");
const statistic = createNamespacedHelpers("statistic");
export default {
  components: {},
  computed: {
    ...statistic.mapState({
      totalIncome: (state) => state.totalIncome,
      quantityBookingTicket: (state) => state.quantityBookingTicket,
      company: (state) => state.company,
      quantityTicketNotPayment: (state) => state.quantityTicketNotPayment,
      quantityTicketOfAllCompany: (state) => state.quantityTicketOfAllCompany,
    }),
  },
  methods: {
    ...auth.mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
    ...statistic.mapActions({
      getTotalIncome: "getTotalIncomeAction",
      getQuantityBookedTicket: "getQuantityBookedTicketAction",
      getQuantityBookedTicketByMaxCompany:
        "getQuantityBookedTicketByMaxCompanyAction",
      getQuantityTicketNotPayment: "getQuantityTicketNotPaymentAction",
      getQuantityTicketOfAllCompany: "getQuantityTicketOfAllCompanyAction",
    }),
  },
  created() {
    this.loadUserLoginFromLocalStorage();
    this.getTotalIncome();
    this.getQuantityBookedTicket();
    this.getQuantityBookedTicketByMaxCompany();
    this.getQuantityTicketNotPayment();
  },
  async mounted() {
    console.log("mounted");
    await this.getQuantityTicketOfAllCompany();
    console.log(this.quantityTicketOfAllCompany);
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.quantityTicketOfAllCompany.map((item) => item.companyName),
        datasets: [
          {
            label: "Biểu đồ thống kê số lượng vé đã bán của các nhà xe",
            data: this.quantityTicketOfAllCompany.map(
              (item) => item.listTicketCompany
            ),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
