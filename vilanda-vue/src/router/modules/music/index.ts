export default [
  {
    path: "/music",
    name: "music",
    meta: {
      title: "vilanda-music",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "musicIndex" */ "@/views/music/Index.vue")
  }
];
