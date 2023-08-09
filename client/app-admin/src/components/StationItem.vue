<template>
  <tr>
    <td>
      {{ station.id }}
    </td>
    <td>{{ station.name }}</td>
    <td>
      {{ station.address }}
    </td>
    <td>{{ station.province }}</td>
    <td class="actionBtn">
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text removeBtn"
        @click="removeStation(station.id)"
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
      <station-form :stationInfo="station"></station-form>
    </app-modal>
  </teleport>
</template>

<script>
import StationForm from "./StationForm.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("station");
export default {
  components: {
    StationForm,
  },
  data() {
    return {
      isModalEdit: false,
    };
  },
  props: {
    station: {
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
      removeStation: "removeStationAction",
    }),
  },
};
</script>

<style></style>
