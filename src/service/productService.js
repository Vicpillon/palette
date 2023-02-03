const { productDAO } = require("../data-access");

const productService = {
<<<<<<< HEAD
  async createProduct({ name, price, summary, description, company, category, remaining, image }) {
    const createdProduct = await productDAO.create({
      name, 
      price, 
      summary, 
      description, 
      company, 
      category,
      remaining, 
      image
=======

  async listProduct() {
    const product = await productDAO.find({});
    return product;
  },

  async createProduct({category, title, content}) {
    const createdProduct = await productDAO.create({
      category,
      title,
      content
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2
    });
    return createdProduct;
  },

<<<<<<< HEAD
  async getProduct(id) {
    const product = await productDAO.findOne(id);
    return product;
  },

  async getProducts({ name, price, summary, description, company, category, remaining, image }) {
    const products = await postDAO.findMany({ name, price, summary, description, company, category, remaining, image });
    return products;
  },

  async updateProduct(id, { name, price, summary, description, company, category, remaining, image }) {
    const updatedProduct = await productDAO.updateOne(id, { name, price, summary, description, company, category, remaining, image });
    return updatedProduct;
  },

  async deleteProduct(id) {
    const deletedPost = await productDAO.deleteOne(id);
    return deletedPost;
  },

  async deleteProducts({ name, price, summary, description, company, category, remaining, image }) {
    const deletedProducts = await productDAO.deleteMany({ name, price, summary, description, company, category, remaining, image });
    return deletedProducts;
  },
};

module.exports = productService;
=======
};

module.exports = productService;
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2
