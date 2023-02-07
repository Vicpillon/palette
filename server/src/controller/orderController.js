const util = require("../misc/util");
const jwt_decode = require("jwt-decode");
const { orderService } = require("../service");

const orderController = {
  // 사용자 주문 추가
  async postOrderUser(req, res, next) {
    try {
      // 사용자 토큰 : email, password, _id, role
      const decode_token = jwt_decode(req.cookies.token);
      const { _id } = decode_token; // 현재 사용자의 _id
      const data = req.body;
      console.log(data);
      const file = await orderService.createOrder(_id, data);
      res.status(201).json(util.buildResponse(file));
    } catch (error) {
      next(error);
    }
  },
  // 사용자 주문 내역 조회
  async getOrderUser(req, res, next) {
    try {
      const { id } = req.params;
      const file = await orderService.getOrder(id);
      res.status(201).json(util.buildResponse(file));
    } catch (error) {
      next(error);
    }
  },
  // 사용자 주문 수정
  async putOrderUser(req, res, next) {
    try {
      const { id } = req.params; 
      const { productId, userId, quantity, address, price } = req.body;
      const file = await orderService.updateOrder(id, {
        productId,
        userId,
        quantity,
        address,
        price,
      });
      res.status(201).json(util.buildResponse(file));
    } catch (error) {
      next(error);
    }
  },
  // 사용자 주문 삭제
  async deleteOrderUser(req, res, next) {
    try {
      const { id } = req.params; 
      const file = await orderService.deleteOrder(id);
      res.status(201).json(util.buildResponse(file));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;
