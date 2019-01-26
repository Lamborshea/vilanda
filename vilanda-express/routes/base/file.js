const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const Msg = require("../../constants/message_constant");
const Code = require("../../constants/error_code_constant");
const File = require("../../models/file");
const uploadDirectory = path.join(__dirname, "../../uploads/");

router.get("/list", (req, res) => {
  let fileList = [];
  fs.readdir(uploadDirectory, (err, files) => {
    fileList = files;
    files.forEach(file => {
      console.log(file);
    });
    res.json({
      code: Code.SUCCESS,
      data: fileList,
      msg: Msg.SUCCESS
    });
  });
});

module.exports = router;
