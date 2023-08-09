<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="name">Tên nhà xe</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập tên nhà xe"
            v-model="company.name"
          />
        </div>

        <div class="form-group">
          <label for="description">Mô tả</label>
          <input
            type="text"
            class="form-control"
            id="description"
            placeholder="Nhập mô tả"
            v-model="company.description"
          />
        </div>
        <button
          style="
            margin-top: 200px;
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
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("passengerCarCompany");
export default {
  props: {
    companyInfo: {
      type: Object,
    },
  },
  data() {
    return {
      company: {
        name: "Nhà xe",
        description: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.companyInfo) {
        // update
        this.updateCompany(this.company);
      } else {
        this.addCompany(this.company);
      }
    },
    ...mapActions({
      addCompany: "addCompanyAction",
      updateCompany: "updateCompanyAction",
    }),
  },
  created() {
    // chuyển đổi props thành data
    if (this.companyInfo) {
      /// ... để tránh tham chiếu
      this.company = { ...this.companyInfo };
    }
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
