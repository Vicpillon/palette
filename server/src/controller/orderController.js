const { orderService } = require("../service");
const util = require('../misc/util')

const orderController = {
  // 주문 생성
  async postOrder(req, res, next) {
    try {
      const { productId, userId, totalPrice, address, phoneNumber, status, quantity } = req.body;
      const order = await orderService.createOrder({ 
        productId, 
        userId, 
        totalPrice, 
        address, 
        phoneNumber, 
        status, 
        quantity 
      });
      res.status(201).json(util.buildResponse(order));
    } catch(error) {
      next(error);
    }
  },
  // 주문 하나 조회
  async getOrder(req, res, next) {
    try {
      const { id } = req.params;
      const order = await orderService.getOrder(id);
      res.json(util.buildResponse(order));
    } catch (error) {
      next(error);
    }
  },
  // 전체 주문 조회
  async getOrders(req, res, next) {
    try {
      const filter = util.sanitizeObject(req.query);
      const orders = await orderService.getPosts(filter);
      res.json(util.buildResponse(orders));
    } catch (error) {
      next(error);
    }
  },
  // 주문자 배송지 수정
  async putOrder(req, res, next) {
    try {
      const { id } = req.params;
      const { address } = req.body;
      const order = await orderService.updateOrder(id, { address });
      res.json(util.buildResponse(order));
    } catch (error) {
      next(error);
    }
  },
  // 관리자 주문상태 수정
  async putOrderAdmin(req, res, next) {
    try {
      const { id } = req.params;
      const { address, productId, status } = req.body;
      const order = await orderService.updateOrderAdmin(id, { address, productId, status });
      res.json(util.buildResponse(order));
    } catch (error) {
      next(error);
    }
  },
  // 주문 하나 삭제
  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const order = await orderService.deleteOrder(id);
      res.json(util.buildResponse(order));
    } catch (error) {
      next(error);
    }
  },
};



module.exports = orderController;