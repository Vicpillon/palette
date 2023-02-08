const express = require("express");
const { orderController } = require("../controller");
const { orderMiddleware } = require("../middleware");

const orderRouter = express.Router();

// 사용자 - 주문 추가
orderRouter.post(
  "/",
  orderMiddleware.checkCompleteOrderFrom("body"),
  orderController.postOrderUser
);

// 사용자 - 주문 내역 조회
orderRouter.get(
  "/:id",
  orderMiddleware.checkOrderIdFrom("params"),
  orderController.getOrderUser
);

// 사용자 - 전체 주문 내역 조회
orderRouter.get("/", orderController.getAllOrderUser);

// 사용자 - 주문 수정
orderRouter.put(
  "/:id",
  orderMiddleware.checkOrderIdFrom("params"),
  orderMiddleware.checkUserOrderConditionFrom("body"),
//   orderMiddleware.checkStatus("params"),
  orderController.putOrderUser
);

// 사용자 - 주문 삭제
orderRouter.delete(
  "/:id",
  orderMiddleware.checkOrderIdFrom("params"),
  orderController.deleteOrderUser
);

module.exports = orderRouter;
