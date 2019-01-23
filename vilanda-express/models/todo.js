const mongoose = require("../database");
const Schema = mongoose.Schema;
const models = require("./index");

// 定义 todo type实体对象模型
const todoSchema = new Schema({
  subTitle: { type: String, default: "" },
  checked: { type: Boolean, default: false },
  title: { type: String, default: "" },
  project: { type: String, default: "" },
  createdTime: { type: Date, default: Date.now },
  startDateTime: { type: Date, default: null },
  endDateTime: { type: Date, default: null }
});

mongoose.model(models.TO_DO_MODEL, todoSchema);

module.exports = mongoose.model(models.TO_DO_MODEL, todoSchema);
