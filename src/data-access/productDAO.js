const { Product } = require("./model");

const productDAO = {
  // 전체 상품 조회
  async find() {
    const products = await Product.find({});
    return products;
  },
  // 개별 상품 상세 조회
  async findOne(id) {
    const product = await Product.findById(id).lean();
    return product;
  },
  // 상품 추가
  async create({category, title, content}) {
    const products = await Product.create({category, title, content})
    return products
  }

};


module.exports = productDAO;
