const express = require("express");
const userRouter = require("./userRouter");
const adminRouter = require('./adminRouter');
const v1Router = express.Router();

v1Router.use("/users", userRouter);

v1Router.use("/admin", adminRouter);

module.exports = {
  v1: v1Router,
};
