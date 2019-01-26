const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const Msg = require("../../constants/message_constant");
const Code = require("../../constants/error_code_constant");
const File = require("../../models/file");
const uploadDirectory = path.join(__dirname, "../../uploads/");
//单个文件上传
router.all("/", (req, res) => {
  console.log(req.file);
  res.json({
    code: Code.SUCCESS,
    data: {},
    msg: Msg.SUCCESS
  });
});

router.get("/file", (req, res) => {
  console.log(req.query);
  let stat = fs.statSync(uploadDirectory + req.query.fileName);
  res.set({
    "Content-Type": "application/octet-stream",
    "Content-Disposition": "attachment; filename=" + req.query.fileName,
    "Content-Length": stat.size
  });
  let rd = fs
    .createReadStream(uploadDirectory + req.query.fileName, {
      highWaterMark: 5000000
    })
    .pipe(res);
  rd.on("end", () => {
    console.log("文件发送完毕");
    try {
      fs.unlink(_uploadDirectory + req.query.fileName, err => {
        !err && console.log("文件已被成功下载，已删除文件");
      });
    } catch (e) {
      console.log(e);
      res.send(404);
    }
  });
  // res.download(path, err => {});
});

module.exports = router;
