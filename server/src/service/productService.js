const { productDAO } = require("../data-access");

const productService = {
  async createProduct({
    name,
    price,
    summary,
    description,
    company,
    category,
    remaining,
    image,
  }) {
    const createdProduct = await productDAO.create({
      name,
      price,
      summary,
      description,
      company,
      category,
      remaining,
      image,
    });
    return createdProduct;
  },

  async getProduct(id) {
    const product = await productDAO.findOne(id);
    return product;
  },

  async getProducts({
    name,
    price,
    summary,
    description,
    company,
    category,
    remaining,
    image,
  }) {
    const products = await postDAO.findMany({
      name,
      price,
      summary,
      description,
      company,
      category,
      remaining,
      image,
    });
    return products;
  },

  async updateProduct(
    id,
    { name, price, summary, description, company, category, remaining, image }
  ) {
    const updatedProduct = await productDAO.updateOne(id, {
      name,
      price,
      summary,
      description,
      company,
      category,
      remaining,
      image,
    });
    return updatedProduct;
  },

  async deleteProduct(id) {
    const deletedPost = await productDAO.deleteOne(id);
    return deletedPost;
  },

  async deleteProducts({
    name,
    price,
    summary,
    description,
    company,
    category,
    remaining,
    image,
  }) {
    const deletedProducts = await productDAO.deleteMany({
      name,
      price,
      summary,
      description,
      company,
      category,
      remaining,
      image,
    });
    return deletedProducts;
  },
};

module.exports = productService;
