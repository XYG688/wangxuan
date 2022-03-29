import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
    children: [{
      path: "home",
      component: () => import("@/views/homepage/MyHome.vue")
    }, {
      path: "2-2",
      component: () => import("@/views/homepage/MyView.vue")
    }, {
      path: "2-1",
      component: () => import("@/views/homepage/MyVue.vue")
    }]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/MyLogin.vue")
  }
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next()
  } else {
    let token = localStorage.getItem("token")
    if (!token) return next({
      path: "/login"
    })
    next()
  }
})

export default router;