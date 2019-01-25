import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import todo from "@/store/modules/todo";
import user from "@/store/modules/user/index";
import { RootState } from "@/store/interface";
import { tabbar } from "@/config/tabbar";
import * as rootTypes from "@/store/types";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
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
  }
};

export default new Vuex.Store<RootState>(store);
