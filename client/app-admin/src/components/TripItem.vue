<template>
  <tr>
    <td>{{ trip.id }}</td>
    <td>Bx. {{ trip.nameStationFrom.slice(7) }} - {{ trip.fromProvince }}</td>
    <td>Bx. {{ trip.nameStationTo.slice(7) }} - {{ trip.toProvince }}</td>
    <td>{{ trip.startTime }}</td>
    <td>{{ trip.hour }}</td>
    <td>{{ trip.price }} VND</td>
    <td>{{ trip.companyName }}</td>
    <td class="actionBtn">
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text removeBtn"
        @click="removeTrip(trip.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Xóa
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text editBtn"
        @click="handleOpenModalEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Sửa
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal :isOpen="isModalEdit" :handelCloseModal="handleCloseModalEdit">
      <trip-form :tripInfo="trip"></trip-form>
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import TripForm from "./TripForm.vue";
const { mapActions } = createNamespacedHelpers("trip");
export default {
  components: {
    TripForm,
  },
  data() {
    return {
      isModalEdit: false,
    };
  },
  props: {
    trip: {
      type: Object,
    },
  },
  methods: {
    handleCloseModalEdit() {
      this.isModalEdit = false;
    },
    handleOpenModalEdit() {
      this.isModalEdit = true;
    },
    ...mapActions({
      removeTrip: "removeTripAction",
    }),
  },
};
</script>

<style></style>
