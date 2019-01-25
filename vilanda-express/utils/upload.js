const express = require("express");
const multer = require("multer");
const path = require("path");
const destination = path.join(__dirname, "../uploads/");

const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, destination);
    },
    filename: function(req, file, cb) {
      //file.originalname上传文件的原始文件名
      var changedName = new Date().getTime() + "-" + file.originalname;
      cb(null, changedName);
    }
  })
});

module.exports = upload;
