import {
  GetterTree,
  MutationTree,
  ActionTree,
  Commit,
  Module,
  ActionContext,
  Payload
} from "vuex";
import { ToDoState } from "@/store/modules/todo/interface";
import { RootState } from "@/store/interface";
import * as types from "@/store/modules/todo/mutation_types";
import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
import Request from "@/api/Request";

const state: ToDoState = {
  todoList: []
};

const getters: GetterTree<ToDoState, RootState> = {
  [types.GET_TODO_LIST](ToDoState) {
    return ToDoState.todoList;
  }
};

const mutations: MutationTree<ToDoState> = {
  [types.ADD_TODO](ToDoState, payload) {}
};

const actions: ActionTree<ToDoState, RootState> = {
  async [types.GET_TODO_LIST]() {},
  async [types.FETCH_TODO_LIST]({ commit, state }) {
    await Request.todolist.getData().then((result: any) => {
      state.todoList = result.data;
    });
  },
  async [types.ADD_TODO]({ commit, state }, todo) {
    await Request.todolist.addData(todo).then((result: any) => {
      state.todoList = result.data;
    });
  },
  async [types.UPDATE_TODO]({ commit, state }, todo) {
    await Request.todolist.updateData(todo._id, todo.checked);
  },
  async [types.DELETE_TODO]({ commit, state }, todo) {
    await Request.todolist.deleteData(todo).then((result: any) => {});
  }
};

const namespaced: boolean = true;
const todo: Module<ToDoState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};

export default todo;
