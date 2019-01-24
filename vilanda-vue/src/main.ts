import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import antd from "ant-design-vue";
Vue.use(antd);

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#vilanda");

export default vm;
