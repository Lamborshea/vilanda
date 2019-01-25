import {
  GetterTree,
  MutationTree,
  ActionTree,
  Commit,
  Module,
  ActionContext,
  Payload
} from "vuex";
import { UserState } from "@/store/modules/user/interface";
import { RootState } from "@/store/interface";
import * as types from "@/store/modules/user/types";
import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
import Request from "@/api/Request";
import Cookies from "js-cookie";
const ls = window.localStorage;
const state: UserState = {
  _id: "",
  avatar: "",
  username: "",
  password: ""
};

const getters: GetterTree<UserState, RootState> = {
  [types.GET_USER_INFO](state) {
    return {
      _id: state._id,
      username: ls.getItem("username"),
      password: state.password,
      avatar: state.avatar
    };
  }
};

const mutations: MutationTree<UserState> = {
  [types.STORE_USER_INFO](state, user) {
    state._id = user._id;
    state.avatar = user.avatar;
    state.username = user.username;
    ls.setItem("username", user.username);
  }
};

const actions: ActionTree<UserState, RootState> = {
  async [types.LOGIN]({ commit }, user) {
    const result = await Request.login.login(user.username, user.password);
    if (result.code === Code.SUCCESS) {
      commit(types.STORE_USER_INFO, result.data);
      return true;
    } else {
      return false;
    }
  },
  async [types.REGISTER]({ commit }, user) {
    const result = await Request.login.register(user.username, user.password);
    if (result.code === Code.SUCCESS) {
      return true;
    } else {
      return false;
    }
  }
};

const namespaced: boolean = true;
const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};

export default user;
