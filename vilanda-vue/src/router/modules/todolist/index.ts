export default [
  {
    path: "/todo",
    name: "todo",
    meta: {
      title: "vilanda-todolist",
      isShowTabbar: true
    },
    component: () =>
      import(/* webpackChunkName: "todolist" */ "@/views/TodoList.vue")
  }
];
