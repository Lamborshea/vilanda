export default [
  {
    path: "/video",
    name: "video",
    meta: {
      title: "vilanda-video",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "videoIndex" */ "@/views/video/Index.vue")
  }
];
