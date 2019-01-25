import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { ROUTER_DEFAULT_CONFIG } from "../config/index";
import {
  rootRouteBeforeGuard,
  rootRouteAfterGuard,
  rootRouteBeforeResolve,
  routerReadyCallBack
} from "@/config/interceptor/router";
Vue.use(Router);

const router = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
router.onReady(routerReadyCallBack);
router.beforeEach(rootRouteBeforeGuard);
router.afterEach(rootRouteAfterGuard);
router.beforeResolve(rootRouteBeforeResolve);
export default router;
