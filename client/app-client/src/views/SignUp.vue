<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
    style="background-image: url(images/bg-login.jpeg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header" style="margin-bottom: 5px">
            <h3>Đăng ký</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div
                class="tab-content"
                id="tab2"
                style="padding: 0; border: none"
              >
                <form class="register" @submit.prevent="handleSubmit">
                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email:
                      <span
                        style="
                          color: rgb(241, 0, 0);
                          font-size: 40px;
                          position: relative;
                          top: 20px;
                        "
                        >*</span
                      >
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        v-model="userRegister.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password1"
                      >Mật khẩu:
                      <span
                        style="
                          color: rgb(241, 0, 0);
                          font-size: 40px;
                          position: relative;
                          top: 20px;
                        "
                        >*</span
                      >
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                        v-model="userRegister.password"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Nhập lại mật khẩu:
                      <span
                        style="
                          color: rgb(241, 0, 0);
                          font-size: 40px;
                          position: relative;
                          top: 20px;
                        "
                        >*</span
                      >
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                        v-model="userRegister.repeatPassword"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Họ tên:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        v-model="userRegister.name"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Điện thoại:
                      <i class="im im-icon-Phone-3G"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                        v-model="userRegister.phone"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="birthday"
                      >Ngày sinh:
                      <div style="display: flex">
                        <select v-model="userRegister.year">
                          <!-- <option hidden>Năm</option> -->
                          <option
                            v-for="(year, index) in arrayYear"
                            :key="index"
                            :value="year"
                          >
                            {{ year }}
                          </option>
                        </select>
                        <select v-model="userRegister.month">
                          <!-- <option value="1">Tháng</option> -->
                          <option
                            v-for="(month, index) in arrayMonth"
                            :key="index"
                            :value="month"
                          >
                            {{ month < 10 ? `0${month}` : month }}
                          </option>
                        </select>
                        <select v-model="userRegister.day">
                          <!-- <option value="1">Ngày</option> -->
                          <option
                            v-for="(day, index) in arrayDay"
                            :key="index"
                            :value="day"
                          >
                            {{ day < 10 ? `0${day}` : day }}
                          </option>
                        </select>
                      </div>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="gender"
                      >Giới tính:
                      <select v-model="userRegister.gender">
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="address"
                      >Địa chỉ:
                      <i class="im im-icon-Location-2"></i>
                      <input
                        class="input-text"
                        type="text"
                        name="address"
                        id="address"
                        v-model="userRegister.address"
                      />
                    </label>
                  </p>

                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                    value="Đăng ký"
                  />
                </form>
              </div>
            </div>
          </div>
          <button type="button" class="mfp-close" @click="close()"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArrayNumber } from "../utils/createArrayNumber";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("auth");
export default {
  data() {
    return {
      userRegister: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        phone: "",
        year: 2001,
        month: 10,
        day: 10,
        gender: "Nam",
        address: "",
      },
      arrayMonth: createArrayNumber(1, 12),
      arrayYear: createArrayNumber(1950, 2023),
      arrayDay: createArrayNumber(1, 31),
    };
  },
  computed: {
    ...mapState({
      allUser: (state) => state.allUser,
    }),
  },
  methods: {
    ...mapActions({
      signUp: "signUpAction",
      getAllUser: "getAllUserAction",
    }),
    handleSubmit() {
      if (
        this.userRegister.email == "" ||
        this.userRegister.password == "" ||
        this.userRegister.repeatPassword == ""
      ) {
        alert("Bạn chưa nhập đủ thông tin");
        return;
      }

      if (
        this.allUser.findIndex((ele) => ele.email == this.userRegister.email) >
        -1
      ) {
        alert("Email đã tồn tại");
        return;
      }

      if (this.userRegister.password === this.userRegister.repeatPassword) {
        const dayFormat =
          this.userRegister.day < 10
            ? `0${this.userRegister.day}`
            : this.userRegister.day;
        const monthFormat =
          this.userRegister.month < 10
            ? `0${this.userRegister.month}`
            : this.userRegister.month;
        const data = {
          name: this.userRegister.name,
          email: this.userRegister.email,
          password: this.userRegister.password,
          numberphone: this.userRegister.phone,
          birthday: `${dayFormat}-${monthFormat}-${this.userRegister.year}`,
          gender: this.userRegister.gender,
          address: this.userRegister.address,
        };
        const router = this.$router;
        this.signUp({ data, router });
      } else {
        alert("mật khẩu không khớp");
      }
    },
    close() {
      this.$router.push("/");
    },
  },
  created() {
    this.getAllUser();
  },
};
</script>

<style lang="scss">
.my-bg {
  background-size: cover;
  top: 0px;
  position: absolute;
  height: 100vh;
  overflow: scroll;
}
</style>
