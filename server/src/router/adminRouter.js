const express = require("express");
const { userController, orderController } = require("../controller");
const { userMiddleware, orderMiddleware } = require("../middleware");
const adminRouter = express.Router();

// 관리자 계정 / 계정 목록 조회
adminRouter.get(
  "/",
  userMiddleware.verifyUser,
  userMiddleware.verifyAdmin,
  userController.configAdminUser
);

// 관리자 계정 / 계정 수정
adminRouter.put(
  "/:userId",
  userMiddleware.verifyUser,
  userMiddleware.verifyAdmin,
  userController.editAdminUser
);

// 관리자 계정 / 계정 삭제
adminRouter.delete(
  "/:userId",
  userMiddleware.verifyUser,
  userMiddleware.verifyAdmin,
  userController.deleteAdminUser
);

// 주문 관련 기능
// 관리자 - 사용자 주문 정보 조회
adminRouter.get("/orders", orderController.getOrderAdmin);

// 관리자 - 사용자 배송 상태 수정
adminRouter.put(
  "/orders/:id",
  orderMiddleware.checkOrderIdFrom("params"),
  orderMiddleware.checkAdminOrderConditionFrom("body"),
  orderController.putOrderAdmin
);

// 관리자 - 사용자 주문 삭제
adminRouter.delete(
  "/orders/:id",
  orderMiddleware.checkOrderIdFrom("params"),
  orderController.deleteOrderAdmin
);

module.exports = adminRouter;
