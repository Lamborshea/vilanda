const express = require("express");
const multer = require("multer");
const app = express();
const router = express.Router();
const upload = require("../../utils/upload");
//单个文件上传
router.post("/single", upload.single("attachFileName"), (req, res) => {
  console.log(req.file);
  res.json({
    code: "0000",
    type: "single",
    originalname: req.file.originalname
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
    code: "0000",
    type: "multer",
    fileList: fileList
  });
});

module.exports = router;
