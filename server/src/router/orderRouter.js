const express = require("express");
const { orderController } = require("../controller");
// const { orderMiddleware } = require("../middleware");

const orderRouter = express.Router();

// 사용자 상품 주문
orderRouter.post(
  "/",
  //orderMiddleware.checkCompleteOrderFrom("body"),
  orderController.postOrder
);

// 사용자 주문 정보 조회
orderRouter.get(
  "/:id",
  //orderMiddleware.checkOrderIdFrom("params"),
  orderController.getOrder
);

// 사용자 개별 주문정보 수정
orderRouter.put(
  "/:id",
  //orderMiddleware.checkOrderIdFrom("params"),
  //orderMiddleware.checkMinOrderConditionFrom("body"),
  orderController.putOrder
);

// 사용자 개별 주문정보 삭제
orderRouter.delete(
  "/:id",
  //orderMiddleware.checkOrderIdFrom("params"),
  orderController.deleteOrder
);

module.exports = orderRouter;
