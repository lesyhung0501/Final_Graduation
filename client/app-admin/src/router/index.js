import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";
import StationManagement from "../views/StationManagement.vue";
import TripManagement from "../views/TripManagement.vue";
import UserManagement from "../views/UserManagement.vue";
import TicketManagement from "../views/TicketManagement.vue";
import CompanyManagement from "../views/CompanyManagement.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      console.log(to, from, next);
      const { user } = JSON.parse(localStorage.getItem("userLogin"));
      if (user.type === "ADMIN") {
        next();
      } else {
        next("/");
        alert("Bạn Không có quyền vào trang quản trị");
      }
    },
  },
  // {
  //   path: "/booking",
  //   name: "Booking",
  //   component: Booking,
  //   beforeEnter(to, from, next) {
  //     console.log(to, from, next);
  //     const { user } = JSON.parse(localStorage.getItem("userLogin"));
  //     if (user.type === "ADMIN") {
  //       next();
  //     } else {
  //       next("/");
  //       alert("Bạn Không có quyền vào trang quản trị");
  //     }
  //   },
  // },
  {
    path: "/station-management",
    name: "StationManagement",
    component: StationManagement,
  },
  {
    path: "/trip-management",
    name: "TripManagement",
    component: TripManagement,
  },
  {
    path: "/user-management",
    name: "UserManagement",
    component: UserManagement,
  },
  {
    path: "/ticket-management",
    name: "TicketManagement",
    component: TicketManagement,
  },
  {
    path: "/company-management",
    name: "CompanyManagement",
    component: CompanyManagement,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
});

export default router;
