export default [
  {
    path: "/login",
    name: "login",
    alias: "signin",
    meta: {
      title: "login",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "loginIndex" */ "@/views/login/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    alias: "signup",
    meta: {
      title: "register",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "registerIndex" */ "@/views/login/Register.vue")
  }
];
