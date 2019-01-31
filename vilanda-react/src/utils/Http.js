import "whatwg-fetch";
import { API_URL } from "../config";
export default class Http {
  /**
   * 基于 fetch 封装的 GET请求
   * @param url
   * @param params {}
   * @param headers
   * @returns {Promise}
   */
  static get = function(url, params, headers) {
    url = API_URL + url;
    if (params) {
      let paramsArray = [];
      //encodeURIComponent
      Object.keys(params).forEach(key =>
        paramsArray.push(key + "=" + params[key])
      );
      if (url.search(/\?/) === -1) {
        url += "?" + paramsArray.join("&");
      } else {
        url += "&" + paramsArray.join("&");
      }
    }
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: "GET",
        headers: headers
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            reject({ status: response.status });
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject({ status: -1 });
        });
    });
  };

  static post = function(url, data, headers) {
    url = API_URL + url;
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: data
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            reject({ status: response.status });
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject({ status: -1 });
        });
    });
  };
  static postFile = function(url, formData, headers) {
    url = API_URL + url;
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            reject({ status: response.status });
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject({ status: -1 });
        });
    });
  };
}
