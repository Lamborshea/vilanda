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
import * as types from "@/store/modules/todo/types";
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
  [types.ADD_TODO](ToDoState, payload) {
    console.log("1111");
  }
};

const actions: ActionTree<ToDoState, RootState> = {
  async [types.GET_TODO_LIST]() {},
  async [types.FETCH_TODO_LIST]({ commit, state }) {
    await Request.todolist.getData().then((result: any) => {
      state.todoList = result.data;
    });
  },
  async [types.ADD_TODO]({ commit: commit, state: state }, todo) {
    commit("addTodo");
    const result = await Request.todolist.addData(todo);
    if (result.data) {
      state.todoList.push(result.data);
      return true;
    } else {
      return false;
    }
  },
  async [types.UPDATE_TODO]({ commit, state }, todo) {
    await Request.todolist.updateData(todo._id, todo.checked);
  },
  async [types.DELETE_TODO]({ commit: commit, state: state }, _id) {
    const result = await Request.todolist.deleteData(_id);
    if (result.data) {
      const index = state.todoList.findIndex((item: any) => {
        return item._id === _id;
      });
      state.todoList.splice(index, 1);
      return true;
    } else {
      return false;
    }
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
