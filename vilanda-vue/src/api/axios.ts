import axios from "axios";
import { AXIOS_DEFAULT_CONFIG } from "@/config";
import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor
} from "@/config/interceptor/http";

const instance: any = axios.create({
  ...AXIOS_DEFAULT_CONFIG
});

instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

instance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default instance;
