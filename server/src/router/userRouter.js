const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");

const userRouter = express.Router();

// 회원가입
userRouter.post(
  "/",
  userMiddleware.checkCompleteUserFrom("body"),
  userController.addUser
);

// 사용자 정보 조회
userRouter.get("/", userMiddleware.verifyUser, userController.configUser);

// 사용자 정보 수정
userRouter.put("/", userMiddleware.verifyUser, userController.editUser);

// 사용자 정보 삭제
userRouter.delete("/", userMiddleware.verifyUser, userController.deleteUser);

module.exports = userRouter;
