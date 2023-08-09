<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="name">Họ tên</label>
          <input
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
            type="text"
            class="form-control"
            id="email"
            placeholder="Nhập email"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Nhập số điện thoại"
            v-model="user.numberphone"
          />
        </div>
        <div class="form-group">
          <label for="birthday">Ngày sinh</label>
          <input
            type="text"
            class="form-control"
            id="birthday"
            placeholder="Nhập ngày sinh"
            v-model="user.birthday"
          />
        </div>
        <div class="form-group">
          <label for="name">Giới tính</label>
          <select v-model="user.gender">
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Nhập địa chỉ"
            v-model="user.address"
          />
        </div>
        <div class="form-group">
          <label for="name">Loại</label>
          <select v-model="user.type">
            <option value="CLIENT">CLIENT</option>
            <option value="ADMIN">ADMIN</option>
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
import { createNamespacedHelpers } from "vuex";
const user = createNamespacedHelpers("user");
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
        numberphone: "0123456789",
        birthday: "01-01-2001",
        address: "",
        gender: "Nam",
        type: "CLIENT",
      },
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      if (this.userInfo) {
        // update
        this.updateUser(this.user);
      } else {
        this.addUser(this.user);
      }
    },
    ...user.mapActions({
      addUser: "addUserAction",
      updateUser: "updateUserAction",
    }),
  },
  created() {
    // chuyển đổi props thành data
    if (this.userInfo) {
      /// ... để tránh tham chiếu
      this.user = { ...this.userInfo };
    }
    // this.getAllCompany();
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
