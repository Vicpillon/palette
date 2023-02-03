const { productService } = require("../service");
<<<<<<< HEAD
const util = require("../misc/util");

const productController = {
  async createProduct(req, res, next) {
    try {
      const { name, price, summary, description, company, category, remaining, image } = req.body;
      const product = await productService.createProduct({ name, price, summary, description, company, category, remaining, image });
      res.status(201).json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },

  async getProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await postService.getProduct(id);
      res.json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },

  async getProducts(req, res, next) {
    try {
      const { name, price, summary, description, company, category, remaining, image } = req.query;
      const products = await productService.getProducts({ name, price, summary, description, company, category, remaining, image });
      res.json(util.buildResponse(products));
    } catch (error) {
      next(error);
    }
  },

  async putProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price, summary, description, company, category, remaining, image } = req.body;
      const product = await productService.updateProduct(id, { name, price, summary, description, company, category, remaining, image });
      res.json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.deleteProduct(id);
      res.json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },

  async deleteProducts(req, res, next) {
    try {
      const { name, price, summary, description, company, category, remaining, image } = req.body;
      const products = await productService.deleteProducts({ name, price, summary, description, company, category, remaining, image });
      res.json(util.buildResponse(products));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;
=======
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
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2
