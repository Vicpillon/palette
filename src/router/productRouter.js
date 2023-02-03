const express = require("express");
const { productController } = require("../controller");
<<<<<<< HEAD
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

productRouter.get("/", productController.getProducts);

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
=======


const productRouter = express.Router();

productRouter.post('/',
  productController.postProduct
);

productRouter.get('/',
  productController.getProduct
);

module.exports = productRouter;
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2
