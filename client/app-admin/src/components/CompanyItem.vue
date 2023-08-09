<template>
  <tr>
    <td>
      {{ company.id }}
    </td>
    <td style="text-align: left">
      <img
        :src="company.image"
        width="40"
        height="40"
        style="margin-right: 8px"
      />{{ company.name }}
    </td>

    <td>{{ company.description }}</td>
    <td class="actionBtn">
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text removeBtn"
        @click="removeCompany(company.id)"
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
      <company-form :companyInfo="company"></company-form>
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import CompanyForm from "./CompanyForm.vue";
const { mapActions } = createNamespacedHelpers("passengerCarCompany");
export default {
  components: {
    CompanyForm,
  },
  data() {
    return {
      isModalEdit: false,
    };
  },
  props: {
    company: {
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
      removeCompany: "removeCompanyAction",
    }),
  },
};
</script>

<style></style>
