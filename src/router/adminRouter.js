const express = require("express");
const { orderController } = require("../controller");

const adminRouter = express.Router();

// 관리자 전체 주문 정보 조회
adminRouter.get("/orders", orderController.getOrders);

//관리자 개별 상품 주문 수정
adminRouter.put("/orders/:id", orderController.putOrderAdmin);

//관리자 개별 상품 주문 삭제
adminRouter.delete("/orders/:id", orderController.deleteOrder);



module.exports = adminRouter;