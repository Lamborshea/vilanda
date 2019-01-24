import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import todo from "@/store/modules/todo";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todo
  }
});
