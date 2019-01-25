const mongoose = require("../database");
const Schema = mongoose.Schema;
const models = require("./index");

// 定义 todo type实体对象模型
const userSchema = new Schema({
  username: { type: String, default: "" },
  password: { type: String, default: "" },
  telephone: { type: String, default: "" },
  email: { type: String, default: "" },
  note: { type: String, default: "" },
  is_delete: { type: Boolean, default: false },
  avatar: { type: String, default: "" },
  real_name: { type: String, default: "" },
  salt: { type: String, default: "" },
  gender: { type: Number, default: 1 }, // male: 1, female: 2
  created_time: { type: Date, default: Date.now },
  birthday: { type: Date, default: null }
});

mongoose.model(models.USER_MODEL, userSchema);

module.exports = mongoose.model(models.USER_MODEL, userSchema);
