import Vue from "vue";
import Router from "vue-router";
import todolist from "@/router/modules/todolist";
import wechat from "@/router/modules/wechat";
import blog from "@/router/modules/blog";
import search from "@/router/modules/search";
import settings from "@/router/modules/settings";
import music from "@/router/modules/music";
import video from "@/router/modules/video";
import login from "@/router/modules/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      alias: "index",
      meta: {
        title: "主页",
        isShowTabbar: true
      },
      component: () => import("@/views/Home.vue")
    },
    ...todolist,
    ...wechat,
    ...blog,
    ...search,
    ...settings,
    ...video,
    ...music,
    ...login,
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    }
  ]
});
