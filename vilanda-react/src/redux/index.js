import configureStore from "./configure_store";
import todoSaga from "./modules/todo/saga";

const store = configureStore();
store.runSaga(todoSaga);

export default store;
