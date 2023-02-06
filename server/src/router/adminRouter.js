const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
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

module.exports = adminRouter;
