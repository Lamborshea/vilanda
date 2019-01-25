const ROAClient = require("@alicloud/pop-core").ROAClient;

const client = new ROAClient({
  accessKeyId: "LTAILNisNgFeMupt",
  accessKeySecret: "l72MWghRcyZMRxJpmIZIUhu2bREFAq",
  endpoint: "https://dysmsapi.aliyuncs.com/",
  apiVersion: "2017-05-25"
});

// => returns Promise
// request(HTTPMethod, uriPath, queries, body, headers, options);
// options => {timeout}
client.request("GET", "/regions");
