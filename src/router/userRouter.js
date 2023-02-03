const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");

const userRouter = express.Router();

userRouter.get('/',
  userController.getUser
);

userRouter.post('/',
  userController.postUser
);
module.exports = userRouter;
