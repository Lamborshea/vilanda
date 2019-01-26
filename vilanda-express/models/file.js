const mongoose = require("../database");
const Schema = mongoose.Schema;
const models = require("./index");

// 定义 todo type实体对象模型
const fileSchema = new Schema({
  originalname: { type: String, default: "" },
  filename: { type: String, default: "" },
  fieldname: { type: String, default: "" },
  destination: { type: String, default: "" },
  filePath: { type: String, defualt: "" },
  encoding: { type: String, default: "" },
  mimetype: { type: String, default: "" },
  size: { type: Number, default: 0 }
});

mongoose.model(models.FILE_MODEL, fileSchema);

module.exports = mongoose.model(models.FILE_MODEL, fileSchema);
