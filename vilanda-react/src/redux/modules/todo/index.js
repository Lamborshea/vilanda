/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import { fromJS, Map, List } from "immutable";
// const initialState = Map({
//   todoList: []
// });
const initialState = {
  todoList: []
};

export const types = {
  FETCH_TODO: "TODO/FETCH_TODO",
  ADD_TODO: "TODO/ADD_TODO",
  UPDATE_TODO: "TODO/UPDATE_TODO",
  DELETE_TODO: "TODO/DELETE_TODO",
  FETCH_REQUESTED: "TODO/FETCH_REQUESTED",
  FETCH_SUCCEEDED: "TODO/FEATCH_SUCCEEDED",
  FETCH_FAILED: "TODO/FETCH_FAILED"
};

// selectors
export const getTodoListSelector = state => {
  const todo = state.todo.toJS();
  console.log(todo.todoList);
  return todo.todoList;
};

export const actions = {
  fetchTodo() {
    return {
      type: types.FETCH_TODO
    };
  },
  fetchTodoRequested() {
    return {
      type: types.FETCH_REQUESTED
    };
  },

  addTodo(title) {
    return {
      type: types.ADD_TODO,
      title
    };
  },

  updateTodo(todo) {
    return {
      type: types.UPDATE_TODO,
      todo
    };
  },

  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id
    };
  },

  fetchTodoSuccess(todoList) {
    return {
      type: types.FETCH_SUCCEEDED,
      payload: {
        todoList
      }
    };
  },
  fetchTodoFailed(error) {
    return {
      type: types.FETCH_FAILED,
      payload: {
        message: error.message
      }
    };
  }
};

export default function reducer(state = fromJS(initialState), action = {}) {
  const { type } = action;
  switch (type) {
    case types.ADD_TODO:
      state.todoList = state.todoList.concat({
        id: new Date().getTime(),
        title: action.title,
        checked: false
      });
    case types.UPDATE_TODO:
      state.todoList = state.todoList.map(item => {
        return item.id === action.todo.id ? action.todo : item;
      });
    case types.DELETE_TODO:
      state.todoList = state.todoList.filter(item => {
        return item.id !== action.id;
      });
    case types.FETCH_SUCCEEDED:
      return state.merge(
        fromJS({
          todoList: action.payload.todoList
        })
      );
    case types.FETCH_FAILED:
      console.log(action);
      return state;
    default:
      return state;
  }
}
