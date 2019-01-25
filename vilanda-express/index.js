"use strict";
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const config = require("./config/env.config");
const bodyParser = require("body-parser");
const vueDistPath = path.resolve(__dirname, "../vilanda-vue/dist/");
const todolist = require("./routes/todolist");
const loginRoutes = require("./routes/login");
const uploadRoutes = require("./routes/base/upload");

app.use(express.static(vueDistPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  console.log(req.path);
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader("Content-Type", "application/json; charset=UTF-8");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

app.get("/", function(req, res, next) {
  res.sendfile(path.join(vueDistPath + "index.html"));
});

app.use("/todolist", todolist);
app.use("/login", loginRoutes);
app.use("/upload", uploadRoutes);
app.listen(config.port, () =>
  console.log(`vilanda-express app listening on port ${config.port}!`)
);
