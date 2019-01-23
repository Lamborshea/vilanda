import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "主页",
        isShowTabbar: true
      },
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/todo",
      name: "todo",
      meta: {
        title: "vilanda-todolist",
        isShowTabbar: true
      },
      component: () =>
        import(/* webpackChunkName: "todolist" */ "@/views/TodoList.vue")
    },
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
