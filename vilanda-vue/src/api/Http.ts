import axios from "@/api/axios";
import store from "@/store";

export default class Http {
  /**
   * 提交数据
   * @param url { string }
   * @param data? { object }
   * @returns {Promise.<TResult>|*}
   */
  static post = (url = "", data?: any) => {
    if (!data) {
      data = {};
    }
    return axios({
      method: "post",
      url: url,
      data: JSON.stringify(data),
      timeout: 1000 * 60 * 2,
      xhrFields: {
        withCredentials: false
      },
      withCredentials: false,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Headers": "token"
      }
    });
  };
  /**
   * 获取数据
   * @param url
   * @param params
   * @returns {Promise.<TResult>|*}
   */
  static get = (url = "", data?: any) => {
    let params = new Object();
    if (!data) {
      data = {};
    }
    params = data;
    return axios({
      method: "get",
      url: url,
      params: params,
      dataType: "json",
      xhrFields: {
        withCredentials: false
      },
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Headers": "token"
      }
    });
  };

  /**
   *
   * @param url
   * @param data
   * @param toJsonFlag:是否转json
   * @returns {Promise<AxiosResponse<any>>}
   */
  static postFile = (url: string, data: any) => {
    let params: any = new FormData();
    for (let key in data) {
      // let attachFileName = [];
      // for (let i = 0; i < data[key].length; i++) {
      //   attachFileName.push(data[key][i].name);
      //   params.append(key, data[key][i]);
      // }
      params.append("attachFileName", data[key]);
    }

    return axios({
      method: "post",
      url: url,
      data: params,
      timeout: 30000,
      xhrFields: {
        withCredentials: false
      },
      withCredentials: false,
      //end 处理跨域代码
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Headers": "token",
        "Content-Type": "multipart/form-data"
      }
    });
  };

  static downloadFile = (url: string, data?: any) => {
    if (!data) {
      data = {};
    }
    return axios({
      method: "get",
      url: url,
      params: data,
      data: JSON.stringify(data),
      timeout: 60000,
      responseType: "blob",
      xhrFields: {
        withCredentials: false
      },
      withCredentials: false,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/Json; charset=UTF-8",
        "Access-Control-Allow-Headers": "token"
      }
    })
      .then((response: any) => {
        if (navigator.msSaveBlob) {
          //IE
          return navigator.msSaveBlob(new Blob([response.data]), data.fileName);
        } else {
          let url = window.URL.createObjectURL(new Blob([response.data]));
          let link = document.createElement("a");
          link.style.display = "none";
          link.href = url;
          link.target = "_blank";
          link.setAttribute("download", data.fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      })
      .catch(function() {});
  };
}
