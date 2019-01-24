export default [
  {
    path: "/blog",
    name: "blog",
    meta: {
      title: "vilanda-blog",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "blogIndex" */ "@/views/blog/Index.vue")
  }
];
