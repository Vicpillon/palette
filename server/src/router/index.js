const express = require("express");
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");
const orderRouter = require("./orderRouter");
const adminRouter = require("./adminRouter");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const cors = require("cors");

const v1Router = express.Router();

v1Router.use(cors());
v1Router.use("/products", productRouter);
v1Router.use("/categories", categoryRouter);
v1Router.use("/orders", orderRouter);
v1Router.use("/admin", adminRouter);
v1Router.use("/users", userRouter);
v1Router.use("/auth", authRouter);

module.exports = {
  v1: v1Router,
};
