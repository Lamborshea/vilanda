const express = require("express");
const objectid = require("mongoose").objectid;
const router = express.Router();
const Code = require("../../constants/error_code_constant");
const Msg = require("../../constants/message_constant");
const User = require("../../models/user");
router.post("/", (req, res, next) => {
  const requestBody = req.body;
  if (requestBody.username && requestBody.password) {
    User.findOne(
      {
        username: requestBody.username,
        password: requestBody.password
      },
      (err, result) => {
        if (err) console.log(err);
        res.json({
          code: Code.SUCCESS,
          data: {
            username: result.username,
            _id: result._id,
            avatar: result.avatar
          },
          msg: Msg.SUCCESS
        });
        next();
      }
    );
  } else {
    res.json({
      code: Code.SYSTEM_EROOR,
      data: null,
      msg: "无效的参数"
    });
    next();
  }
});

router.post("/register", (req, res, next) => {
  const requestBody = req.body;
  if (requestBody.username && requestBody.password) {
    let user = new User({
      username: requestBody.username,
      password: requestBody.password
    });
    user.save((err, result) => {
      if (err) {
        res.json({
          code: Code.SYSTEM_EROOR,
          data: err,
          msg: Msg.SYSTEM_EROOR
        });
        next();
      } else {
        res.json({
          code: Code.SUCCESS,
          data: {
            username: result.username,
            createdTime: result.created_time
          },
          msg: Msg.SUCCESS
        });
        next();
      }
    });
  } else {
    res.json({
      code: Code.SYSTEM_EROOR,
      data: null,
      msg: "无效的参数"
    });
    next();
  }
});

router.get("/users", (req, res, next) => {
  User.find({}, (error, result) => {
    if (error) console.log(error);
    res.json({
      code: Code.SUCCESS,
      data: result,
      msg: Msg.SUCCESS
    });
    next();
  });
});

module.exports = router;
