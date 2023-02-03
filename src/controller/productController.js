const { productService } = require("../service");
const util = require('../misc/util')

const productController = {

  async postProduct(req, res, next) {
    const {category, title, content} = req.body;
    const data = await productService.createProduct({category, title, content})
    res.json(util.buildResponse(data));
  },
  
  async getProduct(req, res, next) {
    const data = await productService.listProduct()
    res.json(util.buildResponse(data));
  },

};



module.exports = productController;