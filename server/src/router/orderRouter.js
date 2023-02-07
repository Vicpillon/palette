const express = require("express");
const { orderController } = require("../controller");
//const { orderMiddleware } = require("../middleware");

const orderRouter = express.Router();

// ----------사용자 주문 추가-------------
orderRouter.post("/", orderController.postOrderUser);

// ----------사용자 주문 내역 조회--------
orderRouter.get("/:id", orderController.getOrderUser);

// 관리자 전체 주문 정보 조회
//orderRouter.get("/:id", orderController.getOrderAdmin);

// ----------사용자 주문 수정------------
orderRouter.put("/:id", orderController.putOrderUser);

// 관리자 주문 수정
//orderRouter.put("/:id", orderController.putOrderAdmin);

// ----------사용자 주문 삭제------------
orderRouter.delete("/:id", orderController.deleteOrderUser);

// 관리자 주문 삭제 
//orderRouter.delete("/:id", orderController.deleteOrderAdmin);

// 사용자 주문 완료
//orderRouter.get("/finalizeOrder", orderController.getOrder);

module.exports = orderRouter;
