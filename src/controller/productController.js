const { productService } = require("../service");
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
