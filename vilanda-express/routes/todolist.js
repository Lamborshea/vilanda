const express = require("express");
const objectid = require("mongoose").objectid;
const router = express.Router();
const Todo = require("../models/todo.js");
const Code = require("../constants/error_code_constant");
const Msg = require("../constants/message_constant");
router.all("/", (req, res, next) => {
  res.json({
    data: "/todolist"
  });
  next();
});

router.all("/all", (req, res, next) => {
  Todo.find({}, (err, result) => {
    console.log(err);
    console.log(result);
    res.json({
      code: Code.SUCCESS,
      data: result,
      msg: Msg.SUCCESS
    });
    next();
  });
});

router.post("/add", (req, res, next) => {
  const requestBody = req.body;
  if (requestBody.title) {
    let todo = new Todo({
      title: requestBody.title
    });
    todo.save((err, result) => {
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
          data: result,
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

router.post("/update", (req, res, next) => {
  const requestBody = req.body;
  if (requestBody._id) {
    Todo.findByIdAndUpdate(
      requestBody._id,
      { checked: requestBody.checked },
      { new: true },
      (err, result) => {
        if (err) {
          res.json({
            code: Code.SYSTEM_ERROR,
            data: err,
            msg: Msg.SYSTEM_ERROR
          });
          next();
        } else {
          res.json({
            code: Code.SUCCESS,
            data: result,
            msg: Msg.SUCCESS
          });
          next();
        }
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

router.post("/delete", (req, res, next) => {
  const requestBody = req.body;
  if (requestBody._id) {
    Todo.findByIdAndRemove(requestBody._id, (err, result) => {
      if (err) {
        res.json({
          code: Code.SYSTEM_ERROR,
          data: err,
          msg: Msg.SYSTEM_ERROR
        });
        next();
      } else {
        res.json({
          code: Code.SUCCESS,
          data: result,
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

module.exports = router;
