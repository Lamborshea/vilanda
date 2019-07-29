import {
  call,
  take,
  put,
  takeEvery,
  all,
  takeLatest
} from "redux-saga/effects";
import Api from "../../../api/index";
import { actions } from "./index";
import { types } from "./index";
function* actionWatcher() {
  yield takeLatest(types.FETCH_REQUESTED, function* fetchTodo() {
    try {
      const todoList = yield call(Api.todolist.getData);
      yield put(actions.fetchTodoSuccess(todoList));
    } catch (error) {
      console.log(error);
      // ???
      // yield put(actions.fetchTodoFailed, error);
    }
  });
}

function* todoSaga() {
  yield all([actionWatcher()]);
}

export default todoSaga;
