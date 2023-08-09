<template>
  <tbody>
    <ticket-item
      v-for="(ticket, index) in ticketList"
      :key="index"
      :ticket="ticket"
    ></ticket-item>
  </tbody>
</template>

<script>
import TicketItem from "../components/TicketItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("ticket");
export default {
  components: {
    TicketItem,
  },
  data: function () {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      ticketList: (state) => state.ticketList,
    }),
  },
  methods: {
    ...mapActions({
      getAllTicket: "getAllTicketAction",
    }),
  },
  created() {
    this.getAllTicket();
  },
};
</script>

<style></style>
