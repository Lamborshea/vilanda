export default [
  {
    path: "/search",
    name: "search",
    meta: {
      title: "vilanda-search",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "searchIndex" */ "@/views/search/Index.vue")
  }
];
