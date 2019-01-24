export default [
  {
    path: "/wechat",
    name: "wechat",
    meta: {
      title: "vilanda-wechat",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "wechatIndex" */ "@/views/wechat/Index.vue")
  }
];
