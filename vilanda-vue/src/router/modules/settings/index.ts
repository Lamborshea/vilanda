export default [
  {
    path: "/settings",
    name: "settings",
    meta: {
      title: "个人中心",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "settingsIndex" */ "@/views/settings/Index.vue")
  }
];
