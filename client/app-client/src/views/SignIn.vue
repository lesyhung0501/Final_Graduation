<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
    style="background-image: url(images/bg-login.jpeg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Đăng nhập</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Login -->
              <div class="tab-content" id="tab1" style="">
                <form @submit.prevent="handleSubmit" class="login">
                  <p class="form-row form-row-wide">
                    <label for="email"
                      >Email:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email"
                        v-model="userLogin.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password"
                        id="password"
                        v-model="userLogin.password"
                      />
                    </label>
                    <span class="lost_password">
                      <router-link
                        to="/sign-up"
                        style="color: #e01515; text-decoration: underline"
                        >Bạn chưa đăng ký tài khoản?</router-link
                      >
                    </span>
                  </p>

                  <div class="form-row">
                    <input
                      type="submit"
                      class="button border margin-top-5"
                      name="login"
                      value="Đăng nhập"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            title="Close (Esc)"
            type="button"
            class="mfp-close"
            @click="close()"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const auth = createNamespacedHelpers("auth");
const ticket = createNamespacedHelpers("ticket");
const trip = createNamespacedHelpers("trip");
export default {
  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...ticket.mapState({
      isBooking: (state) => state.isBooking,
    }),
    ...trip.mapState({
      tripDetail: (state) => state.tripDetail,
    }),
  },
  methods: {
    ...auth.mapActions({
      signIn: "signInAction",
    }),
    ...ticket.mapActions({
      setIsBooking: "setIsBookingAction",
    }),
    handleSubmit() {
      let pageRouter = "";
      if (!this.isBooking) {
        pageRouter = "/";
      } else {
        this.setIsBooking(false);
        pageRouter = `/booking/${this.tripDetail.tripId}`;
      }
      const router = this.$router;
      this.signIn({ data: this.userLogin, router, pageRouter });
    },
    close() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.my-bg {
  background-size: cover;
  top: 0px;
  position: absolute;
  height: 100vh;
}
</style>
