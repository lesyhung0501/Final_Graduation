<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.numberphone }}</td>
    <td>{{ user.birthday }}</td>
    <td>{{ user.gender }}</td>
    <td>{{ user.address }}</td>
    <td class="actionBtn">
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text removeBtn"
        @click="removeUser(user.id)"
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
      <user-form :userInfo="user"></user-form>
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UserForm from "./UserForm.vue";
const { mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    UserForm,
  },
  data() {
    return {
      isModalEdit: false,
    };
  },
  props: {
    user: {
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
      removeUser: "removeUserAction",
    }),
  },
};
</script>

<style></style>
