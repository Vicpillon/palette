const express = require("express");
const { productController } = require("../controller");
const { productMiddleware } = require("../middleware");

const productRouter = express.Router();

productRouter.post(
  "/",
  productMiddleware.checkCompleteProductFrom("body"),
  productController.createProduct
);

productRouter.get(
  "/:id",
  productMiddleware.checkProductIdFrom("params"),
  productController.getProduct
);

productRouter.get("/", productController.getAllProducts);

productRouter.put(
  "/:id",
  productMiddleware.checkProductIdFrom("params"),
  productMiddleware.checkMinProductConditionFrom("body"),
  productController.putProduct
);

productRouter.delete(
  "/:id",
  productMiddleware.checkProductIdFrom("params"),
  productController.deleteProduct
);

productRouter.delete(
  "/",
  productMiddleware.checkMinProductConditionFrom("body"),
  productController.deleteProducts
);

module.exports = productRouter;
