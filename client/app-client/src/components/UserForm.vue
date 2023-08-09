<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="name">Họ tên</label>
          <input
            style="margin: 0 0 6px 0"
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập họ tên"
            v-model="user.name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            style="margin: 0 0 6px 0"
            type="text"
            class="form-control"
            id="email"
            placeholder="Nhập Email"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <label for="numberphone">Số điện thoại</label>
          <input
            style="margin: 0 0 6px 0"
            type="text"
            class="form-control"
            id="numberphone"
            placeholder="Nhập số điện thoại"
            v-model="user.numberphone"
          />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ</label>
          <input
            style="margin: 0 0 6px 0"
            type="text"
            class="form-control"
            id="address"
            placeholder="Nhập địa chỉ"
            v-model="user.address"
          />
        </div>
        <div class="form-group" style="display: flex; align-items: center">
          <label for="name" style="width: 12%; display: block">Giới tính</label>
          <select
            style="
              width: 58px;
              height: 32px;
              border: none;
              font-weight: 600;
              font-size: 15px;
              border-radius: 4px;
              padding: 0;
            "
            v-model="user.gender"
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
        <button
          style="
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
import { updateUserAPI } from "../api/auth";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        numberphone: "",
        address: "",
        gender: "",
      },
    };
  },
  methods: {
    ...mapActions({
      setUserLoginAfterUpdate: "setUserLoginAfterUpdateAction",
    }),
    async handleSubmit() {
      await updateUserAPI(this.user);
      this.setUserLoginAfterUpdate(this.$route.params.userId);
      alert("Cập nhật thông tin thành công");
    },
  },
  created() {
    // chuyển đổi props thành data
    if (this.userInfo) {
      /// ... để tránh tham chiếu
      this.user = { ...this.userInfo };
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
