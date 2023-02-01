const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
const adminRouter = express.Router();

adminRouter.get('/',
  userMiddleware.validateUser,
  userMiddleware.validateAdmin,
  userController.configAdminUser
);

adminRouter.put('/:userId',
  userMiddleware.validateUser,
  userMiddleware.validateAdmin,
  userController.editAdminUser
);

adminRouter.delete('/:userId',
  userMiddleware.validateUser,
  userMiddleware.validateAdmin,
  userController.deleteAdminUser
);


module.exports = adminRouter;