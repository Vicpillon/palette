// controller - presentation Layer
// 사용자의 input을 주고 받는 것을 담당

const { orderService } = require("../service");
const util = require('../misc/util')

const orderController = {
  
  async postOrder(req, res, next) {
    try {
      const { productId, userId, totalPrice, address, phoneNumber } = req.body;
      const order = await orderService.createOrder({ productId, userId, totalPrice, address, phoneNumber });
      res.status(201).json(util.buildResponse(order));
    } catch(error) {
      next(error);
    }
  },

  // 주문 하나 삭제
  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const order = await postService.deleteOrder(id);
      res.json(util.buildResponse(order));
    } catch (error) {
      next(error);
    }
  },
  // 주문 하나 조회
  async getOrder(req, res, next) {
    const data = await orderService.listOrder()
    const name = data[1].userId.name;
    const category = data[1].productId.category;
    const title = data[1].productId.title;
    res.json(util.buildResponse(`name: ${name}, category: ${category}, title: ${title}`));
    // `name: ${name}, category: ${category}, title: ${title}`
  },

};



module.exports = orderController;