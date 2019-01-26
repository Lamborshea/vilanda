const express = require("express");
// const multer = require("multer");
// const app = express();
const router = express.Router();
const upload = require("../../utils/upload");
const Msg = require("../../constants/message_constant");
const Code = require("../../constants/error_code_constant");
const File = require("../../models/file");
//单个文件上传
router.post("/single", upload.single("attachFileName"), (req, res) => {
  console.log(req.file);
  const file = new File({
    filePath: req.file.path,
    filename: req.file.filename,
    originalname: req.file.originalname,
    destination: req.file.destination,
    size: req.file.size,
    mimetype: req.file.mimetype,
    encoding: req.file.encoding,
    fieldname: req.file.fieldname
  });
  file.save(file, (error, result) => {});
  res.json({
    code: Code.SUCCESS,
    data: {
      type: "single",
      originalname: req.file.originalname
    },
    msg: Msg.SUCCESS
  });
});

//多个文件上传
router.post("/multer", upload.array("attachFileName"), (req, res) => {
  console.log(req.files);
  let fileList = [];
  req.files.map(elem => {
    fileList.push({
      originalname: elem.originalname
    });
  });
  res.json({
    code: Code.SUCCESS,
    data: {
      type: "multer",
      fileList: fileList
    },
    msg: Msg.SUCCESS
  });
});

module.exports = router;
