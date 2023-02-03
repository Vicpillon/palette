const express = require("express");
const { productController } = require("../controller");


const productRouter = express.Router();

productRouter.post('/',
  productController.postProduct
);

productRouter.get('/',
  productController.getProduct
);

module.exports = productRouter;