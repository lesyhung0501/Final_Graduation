<template>
  <div id="mycode">
    <div class="row" style="margin-left: 300px">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Danh sách người dùng</h2>
            <div class="card-bar-controll">
              <div>
                <button
                  type="button"
                  class="mr-2 btn btn-gradient-primary btn-icon-text addBtn"
                  @click="handleOpenModalCartList"
                >
                  <i class="mdi mdi-account-plus btn-icon-prepend"></i> Thêm
                </button>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Họ tên</th>
                    <th class="th3">Email</th>
                    <th>Số điện thoại</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                  </tr>
                </thead>
                <user-list></user-list>
              </table>
            </div>
          </div>
        </div>
      </div>
      <teleport to="#app">
        <app-modal
          :isOpen="isOpenModalCartList"
          :handelCloseModal="handleCloseModalCartList"
        >
          <user-form></user-form>
        </app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import UserForm from "../components/UserForm.vue";
import UserList from "../components/UserList.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  components: {
    UserForm,
    UserList,
  },
  data() {
    return {
      isOpenModalCartList: false,
    };
  },
  methods: {
    ...mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
    handleOpenModalCartList() {
      this.isOpenModalCartList = true;
    },
    handleCloseModalCartList() {
      this.isOpenModalCartList = false;
    },
  },
  created() {
    this.loadUserLoginFromLocalStorage();
  },
};
</script>

<style>
#mycode {
  width: 100%;
}

#mycode .row {
  display: flex;

  flex-wrap: wrap;
  margin-right: -20px;
  margin-left: -20px;
}

#mycode .grid-margin {
  margin-bottom: 2.5rem;
}

#mycode .col-12 {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
}

#mycode .card {
  border: 0;
  background: #fff;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border-radius: 0.3125rem;
}

#mycode .card .card-body {
  padding: 2.5rem 2.5rem;
  flex: 1 1 auto;
  min-height: 1px;
  -webkit-box-flex: 1;
}

#mycode .card .card-body h4 {
  font-weight: 500;
  line-height: 1.2;
}

#mycode .card-bar-controll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#mycode .form-group {
  margin-bottom: 1.5rem;
}

#mycode .input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
}

#mycode .input-group-append {
  color: #c9c8c8;
  width: auto;
  border: none;
  margin-left: -1px;
}

#mycode button {
  color: #fff;
  border: none;
  font-size: 18px;
  display: block;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 20px;
}

#mycode .addBtn {
  background: linear-gradient(to right, #da8cff, #9a55ff);
}

#mycode h2.card-title {
  font-weight: bold;
  color: greenyellow;
}

#mycode td {
  padding: 0;
  vertical-align: middle;
}

#mycode .actionBtn {
  display: flex;
}

#mycode .actionBtn .removeBtn {
  background: linear-gradient(to right, #ffbf96, #fe7096);
  margin: 12px 8px;
}

#mycode .actionBtn .editBtn {
  background: linear-gradient(to right, #90caf9, #047edf 99%);
  margin: 12px 8px;
}
</style>

