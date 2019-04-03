import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import todo from "@/store/modules/todo";
import user from "@/store/modules/user";
import { RootState } from "@/store/interface";
import { tabbar } from "@/config/tabbar";
import * as rootTypes from "@/store/types";
Vue.use(Vuex);

const store = new Vuex.Store<RootState>({
  state: {
    tabbar: tabbar
  },
  getters: {
    [rootTypes.GET_TABBAR](state: RootState) {
      return state.tabbar;
    }
  },
  mutations: {},
  actions: {},
  modules: {
    todo,
    user
  },

  strict: process.env.NODE_ENV !== "production"
});

if (module.hot) {
  module.hot.accept(["./modules/todo", "./modules/user"], () => {
    const newTodo = require("./modules/todo").default;
    const newUser = require("./modules/todo").default;
    store.hotUpdate({
      // getters: require("./getters"),
      // actions: require("./actions"),
      // mutations: require("./mutations")
      modules: {
        todo: newTodo,
        user: newUser
      }
    });
  });
}

export default store;
