const qiniu = require("qiniu");
const config = require("../config/env.config.js");
const accessKey = config.QINIU_ACCESS_KEY;
const secretKey = config.QINIU_SECRET_KEY;

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: bucket,
  expires: 7200
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);
