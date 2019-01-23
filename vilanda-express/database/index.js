"use strict";
const mongoose = require("mongoose");
const config = require("../config/env.config");

mongoose.connect(
  config.DATABASE,
  { useNewUrlParser: true }
);

const database = mongoose.connection;

database.on("open", function(callback) {
  console.log("mongodb connected successfully!");
});

database.on("error", console.error.bind(console, "MongoDB connection error:"));

/**
 * 连接成功
 */
database.on("connected", function() {
  console.log("Mongoose connection open to " + config.DATABASE);
});

/**
 * 连接异常
 */
database.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});

/**
 * 连接断开
 */
database.on("disconnected", function() {
  console.log("Mongoose connection disconnected");
});

module.exports = mongoose;
