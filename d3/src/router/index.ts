import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Base from "../views/Base.vue";
import Base1 from "../views/Base1.vue";
import Base2 from "../views/Base2.vue";
import Home from "../views/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Base2",
    component: Base2
  },
  {
    path: "/base1",
    name: "Base1",
    component: Base1
  },
  {
    path: "/base",
    name: "Base",
    component: Base
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
