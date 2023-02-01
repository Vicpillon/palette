const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
const adminRouter = express.Router();

adminRouter.get('/',
  userController.configAdminUser
);

adminRouter.put('/:userId',
  userController.editAdminUser
);

adminRouter.delete('/:userId',
  userController.deleteAdminUser
);


module.exports = adminRouter;