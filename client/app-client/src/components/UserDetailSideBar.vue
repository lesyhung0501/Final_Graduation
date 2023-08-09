<template>
  <!-- Verified Badge -->
  <div
    class="verified-badge with-tip"
    style="
      cursor: none;
      font-size: 16px;
      padding: 6px 20px;
      margin: 10px 0 20px 0;
    "
  >
    <i class="sl sl-icon-user-following"></i> Cập nhật ảnh đại diện
  </div>

  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="field">
      <input
        style="margin-bottom: 8px"
        type="file"
        ref="file"
        @change="selectFile"
      />
    </div>

    <div class="field">
      <button
        style="
          background-color: #19b453;
          border-radius: 4px;
          color: #fff;
          border: none;
          font-weight: 500;
          margin-left: 20px;
          padding: 4px;
        "
      >
        Cập nhật
      </button>
    </div>
  </form>

  <!-- Contact -->
  <div class="boxed-widget margin-top-30 margin-bottom-50">
    <h3>Thông tin cá nhân</h3>
    <ul class="listing-details-sidebar">
      <li style="display: flex; align-items: center">
        <i class="sl sl-icon-user-following" style="top: 4px"></i
        ><span>Họ tên: {{ userLogin.user?.name }}</span>
      </li>
      <li style="display: flex; align-items: center">
        <i class="im im-icon-Birthday-Cake" style="top: 0"></i
        ><span>Ngày sinh: {{ userLogin.user?.birthday }}</span>
      </li>
      <li style="display: flex; align-items: center">
        <i class="sl sl-icon-phone" style="top: 4px"></i
        ><span>
          Số điện thoại:
          {{ userLogin.user?.numberphone }}
        </span>
      </li>
      <li style="display: flex; align-items: center">
        <i class="im im-icon-MaleFemale" style="top: 0"></i
        ><span>
          Giới tính:
          {{ userLogin.user?.gender }}
        </span>
      </li>
      <li style="display: flex; align-items: center">
        <i class="im im-icon-Location-2" style="top: 0"></i
        ><span>
          Địa chỉ:
          {{ userLogin.user?.address }}
        </span>
      </li>
      <li style="display: flex; align-items: center">
        <i class="im im-icon-Mail-2" style="top: 0"></i
        ><span>
          Email:
          {{ userLogin.user?.email }}
        </span>
      </li>
      <button
        style="
          background-color: #19b453;
          border-radius: 4px;
          color: #fff;
          border: none;
          font-weight: 500;
          padding: 4px;
        "
        @click="handleOpenModalEdit"
      >
        Cập nhật thông tin cá nhân
      </button>
    </ul>
  </div>
  <teleport to="#app">
    <app-modal :isOpen="isModalEdit" :handelCloseModal="handleCloseModalEdit">
      <user-form :userInfo="userLogin.user"></user-form>
    </app-modal>
  </teleport>
  <!-- Contact / End-->
</template>

<script>
import { uploadAvatarAPI } from "../api/auth";
import UserForm from "./UserForm.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("auth");
export default {
  components: {
    UserForm,
  },
  data() {
    return {
      file: null,
      isModalEdit: false,
    };
  },
  computed: {
    ...mapState({
      userLogin: (state) => state.userLogin,
    }),
  },
  methods: {
    handleCloseModalEdit() {
      this.isModalEdit = false;
    },
    handleOpenModalEdit() {
      this.isModalEdit = true;
    },
    ...mapActions({
      setUserLoginAfterUpdate: "setUserLoginAfterUpdateAction",
    }),
    selectFile(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },
    async sendFile() {
      const formData = new FormData();
      formData.append("avatar", this.file);
      console.log(formData);
      try {
        await uploadAvatarAPI(formData);
        this.setUserLoginAfterUpdate(this.$route.params.userId);
        alert("Cập nhật ảnh đại diện thành công");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
