const mongoose = require("../database");
const Schema = mongoose.Schema;
const models = require("./index");

// 定义 todo type实体对象模型
const todoSchema = new Schema({
  title: { type: String, default: "" },
  sub_title: { type: String, default: "" },
  checked: { type: Boolean, default: false },
  priority: { type: Number, default: 0 },
  note: { type: String, default: "" },
  sort: { type: Number },
  is_delete: { type: Boolean, default: false },
  tag_ids: { type: Array, default: [] },
  project: { type: String, default: "" },
  created_time: { type: Date, default: Date.now },
  start_date_time: { type: Date, default: null },
  end_date_time: { type: Date, default: null },
  deadline_date_time: { type: Date, default: null }
});

mongoose.model(models.TO_DO_MODEL, todoSchema);

module.exports = mongoose.model(models.TO_DO_MODEL, todoSchema);
