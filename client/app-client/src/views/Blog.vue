<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <div class="container" style="margin-top: 120px">
      <!-- Blog Posts -->
      <div class="blog-page">
        <div class="row">
          <div class="col-lg-9 col-md-8 padding-right-30">
            <!-- Blog Post -->
            <div class="blog-post">
              <!-- Img -->
              <div>
                <img
                  src="/images/bookingbanner.jpg"
                  alt=""
                  style="width: 100%"
                />
              </div>

              <!-- Content -->
              <div class="post-content">
                <h3>
                  <span>Giới thiệu hệ thống vé xe online</span>
                </h3>

                <ul class="post-meta">
                  <li style="color: red">Kết nối người dùng với nhà xe</li>
                  <li style="color: red">Dịch vụ đặt vé</li>
                  <li style="color: red">Cam kết chất lượng</li>
                </ul>

                <p style="text-align: justify">
                  Trong thời đại mở cửa như hiện nay, nhu cầu về đi lại của con
                  người ngày càng tăng cao, con người cần đi lại để phục vụ quá
                  trình công tác, về quê, du lịch hay là đi học tập đối với
                  những bạn học sinh, sinh viên. Và với mong muốn giải quyết vấn
                  đề đặt vé trong những chuyến xe để mang đến sự thuận tiện cho
                  người dùng thì chúng tôi đã nghiên cứu và phát triển một hệ
                  thống đặt vé online. Những quy trình đặt vé đơn giản, tiện lợi
                  sẽ giúp tiết kiệm thời gian và chi phí của cả khách hàng lẫn
                  doanh nghiệp. Hệ thống sẽ giải quyết được những vấn đề còn tồn
                  tại của các cách mua vé truyền thống. Lúc đó sẽ không còn thấy
                  cảnh các hàng dài hành khách chen lấn xô đẩy để mua vé, không
                  còn thấy nhiều người tiêu dùng phải chờ đợi hàng tiếng đồng hồ
                  nhưng lúc đến lượt thì nhà xe lại thông báo hết vé.
                </p>
              </div>
            </div>
            <!-- Blog Post / End -->
          </div>

          <!-- Blog Posts / End -->

          <!-- Widgets -->
          <div class="col-lg-3 col-md-4">
            <div class="sidebar right">
              <!-- Widget -->
              <div>
                <h3 style="margin-top: 0">Nhà xe phổ biến</h3>
                <ul class="widget-tabs">
                  <!-- Post #1 -->
                  <li>
                    <div class="widget-content">
                      <div class="widget-thumb">
                        <div>
                          <img src="/images/NhaxePhuongTrang.jpg" alt="" />
                        </div>
                      </div>

                      <div class="widget-text">
                        <span> PHƯƠNG TRANG FUTA - CHẤT LƯỢNG LÀ DANH DỰ</span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </li>

                  <!-- Post #2 -->
                  <li>
                    <div class="widget-content">
                      <div class="widget-thumb">
                        <div>
                          <img src="/images/nhaxethanhbuoi.jpg" alt="" />
                        </div>
                      </div>

                      <div class="widget-text">
                        <span>THÀNH BƯỞI - ĐI ĐẾN NƠI, VỀ ĐẾN CHỐN</span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </li>

                  <!-- Post #3 -->
                  <li>
                    <div class="widget-content">
                      <div class="widget-thumb">
                        <div>
                          <img src="/images/nhaxethuanthao.jpg" alt="" />
                        </div>
                      </div>

                      <div class="widget-text">
                        <span>THUẬN THẢO - UY TÍN TẠO DỰNG THÀNH CÔNG</span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </li>

                  <li>
                    <div class="widget-content">
                      <div class="widget-thumb">
                        <div><img src="/images/nhaxevanminh.jpg" alt="" /></div>
                      </div>

                      <div class="widget-text">
                        <span>VĂN MINH - CHẤT LƯỢNG TÍCH LŨY NIỀM TIN</span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </li>

                  <li>
                    <div class="widget-content">
                      <div class="widget-thumb">
                        <div><img src="/images/nhaxemailinh.jpg" alt="" /></div>
                      </div>

                      <div class="widget-text">
                        <span>VĂN MINH - ĐÚNG GIỜ, KHÔNG KHÓI THUỐC</span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </li>

                  <li>
                    <div class="widget-content">
                      <div class="widget-thumb">
                        <div><img src="/images/nhaxekumo.jpg" alt="" /></div>
                      </div>

                      <div class="widget-text">
                        <span
                          >KUMO - ẤM ÁP NHƯ GIA ĐÌNH, THÂN THIỆN NHƯ BẠN
                          BÈ</span
                        >
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Widget / End-->
              <div class="clearfix"></div>
              <div class="margin-bottom-40"></div>
            </div>
          </div>
        </div>
        <!-- Sidebar / End -->
      </div>
    </div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
  },
  created() {
    this.loadUserLoginFromLocalStorage();
  },
};
</script>

<style></style>
