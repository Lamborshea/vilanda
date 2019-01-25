import Vue from "vue";
import vm from "@/main";
import store from "@/store";
import router from "@/router";

import { AxiosRequestConfig, AxiosResponse } from "axios";
/**
 *  HTTP 请求发送之前的拦截操作
 * @param { Object } config
 */
export const requestInterceptor = (config: AxiosRequestConfig) => {
  console.log("requestInterceptor");
  console.log(config);

  return config;
};

/**
 * HTTP 请求错误时的回调函数
 * @param { Object } error
 */
export const requestErrorInterceptor = (error: any) => {
  console.log("requestErrorInterceptor");
  console.log(error);
  return Promise.reject(error);
};

/**
 * 接收到 HTTP 响应时的拦截操作
 *
 */
export const responseInterceptor = (response: AxiosResponse) => {
  console.log("responseInterceptor");
  console.log(response);

  return response;
};

/**
 * 响应错误拦截器
 * @param error 响应错误对象
 */
export const responseErrorInterceptor = (error: any) => {
  console.log("responseErrorInterceptor");
  console.log(error);
  error = handleError(error);
  return Promise.reject(error);
};

const handleError: any = (error: any) => {
  switch (error.toString()) {
    case "Error: Network Error":
      error = "网络错误，请检查你的网络连接";
      break;
    case "Error: Request failed with status code 404":
      error = "请求错误，没有发现该网络地址";
      break;
    default:
      break;
  }
  return error;
};
