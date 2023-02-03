const express = require("express");
const { orderController } = require("../controller");
const { orderMiddleware } = require("../middleware");

const orderRouter = express.Router();

// 사용자 상품 주문
orderRouter.post('/api/orders',
  orderMiddleware.checkCompleteOrderFrom("body"),
  orderController.postOrder
);

// 사용자 주문 정보 조회
orderRouter.get('/api/orders', 
  orderController.getOrder
);

// 관리자 전체 주문 정보 조회
orderRouter.get('/api/orders', 
  orderController.getOrders
);

// 사용자 개별 주문 정보 수정
orderRouter.put("/api/orders/:id", 
  orderMiddleware.checkOrderIdFrom("params"), 
  orderMiddleware.checkMinOrderConditionFrom("body"),
  orderController.putOrder
);

// 사용자 개별 주문 정보 삭제
orderRouter.delete("/api/orders/:id", 
  orderMiddleware.checkOrderIdFrom("params"), 
  orderController.deleteOrder
);

orderRouter.delete("/api/orders/:id", 
  orderMiddleware.checkMinOrderConditionFrom("body"), 
  orderController.deleteOrders
);

// 사용자 주문 완료

module.exports = orderRouter;



