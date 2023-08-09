<template>
  <tbody>
    <company-item
      v-for="(company, index) in companyList"
      :key="index"
      :company="company"
    ></company-item>
  </tbody>
</template>

<script>
import CompanyItem from "../components/CompanyItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
  "passengerCarCompany"
);
export default {
  components: {
    CompanyItem,
  },
  data: function () {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      companyList: (state) => state.companyList,
    }),
  },
  methods: {
    ...mapActions({
      getAllCompany: "getAllCompanyAction",
    }),
  },
  created() {
    this.getAllCompany();
  },
};
</script>

<style></style>
