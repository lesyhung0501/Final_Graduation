<template>
  <tr>
    <td>{{ ticket.ticketId }}</td>
    <td>{{ ticket.userName }}</td>
    <td>{{ ticket.companyName }}</td>
    <td>{{ ticket.startTime }}</td>
    <td>{{ ticket.seatName }}</td>
    <td>{{ ticket.ticketCreatedAt }}</td>
    <td>{{ ticket.ticketCode }}</td>
    <td>{{ ticket.status }}</td>
    <td class="actionBtn">
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text removeBtn"
        @click="removeTicket(ticket.ticketId)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Xóa bỏ
      </button>
      <button
        v-if="ticket.status == 'Chưa thanh toán'"
        type="button"
        class="btn btn-gradient-info btn-icon-text editBtn"
        @click="updateTicket(ticket.ticketId)"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Chấp nhận
      </button>
    </td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("ticket");
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    ticket: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      removeTicket: "removeTicketAction",
      updateTicket: "updateTicketAction",
    }),
  },
};
</script>

<style></style>
