const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
const adminRouter = express.Router();

adminRouter.get(
  "/",
  userMiddleware.verifyUser,
  userMiddleware.verifyAdmin,
  userController.configAdminUser
);

adminRouter.put(
  "/:userId",
  userMiddleware.verifyUser,
  userMiddleware.verifyAdmin,
  userController.editAdminUser
);

adminRouter.delete(
  "/:userId",
  userMiddleware.verifyUser,
  userMiddleware.verifyAdmin,
  userController.deleteAdminUser
);

module.exports = adminRouter;
