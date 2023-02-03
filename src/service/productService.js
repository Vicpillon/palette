const { productDAO } = require("../data-access");

const productService = {

  async listProduct() {
    const product = await productDAO.find({});
    return product;
  },

  async createProduct({category, title, content}) {
    const createdProduct = await productDAO.create({
      category,
      title,
      content
    });
    return createdProduct;
  },

};

module.exports = productService;