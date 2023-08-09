<template>
  <div
    class="main-search-container centered"
    style="background-image: url(images/main-search-background-01.jpg)"
  >
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Khởi hành cùng Vé Xe Online
              <span class="typed-words"></span>
            </h2>
            <h3>
              Trải nghiệm những cung đường mới, khám phá những tiện ích mới và
              hơn thế nữa
            </h3>

            <the-main-search></the-main-search>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h5 class="highlighted-categories-headline">
              Chúng tôi luôn cung cấp những dịch vụ tốt nhất trên mọi hành trình
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMainSearch from "./TheMainSearch.vue";
export default {
  components: {
    TheMainSearch,
  },
};
</script>

<style>
/* .main-search-container:before {
  background: linear-gradient(to right, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 120%);
} */

.highlighted-categories-headline {
  font-weight: bold;
}
</style>
