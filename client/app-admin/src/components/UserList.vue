<template>
  <tbody>
    <user-item
      v-for="(user, index) in userList"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "../components/UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  data: function () {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getAllUserAction",
    }),
  },
  created() {
    this.getAllUser();
  },
};
</script>

<style></style>
