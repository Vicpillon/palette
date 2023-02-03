const express = require("express");
<<<<<<< HEAD
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");

const v1Router = express.Router();

v1Router.use("/products", productRouter);
v1Router.use("/categories", categoryRouter);
=======
const userRouter = require("./userRouter");
const orderRouter = require('./orderRouter')
const productRouter = require('./productRouter')

const v1Router = express.Router();

v1Router.use("/users", userRouter);

v1Router.use('/products', productRouter)


v1Router.use('/orders', orderRouter)
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2

module.exports = {
  v1: v1Router,
};
