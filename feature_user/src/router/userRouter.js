const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
const passport = require('passport');
const { setUserToken } = require('../misc/util');

const userRouter = express.Router();

userRouter.get('/admin',
  userController.configAdminUser
);

userRouter.put('/admin/:userId',
  userController.editAdminUser
);

userRouter.delete('/admin/:userId',
  userController.deleteAdminUser
);

userRouter.post('/add',
  userMiddleware.checkCompleteUserFrom("body"),
  userController.addUser
);

userRouter.post('/login', 
  userMiddleware.checkUserFrom("body"),
  passport.authenticate('local', {session: false}), (req, res, next) => 
  {
    setUserToken(res, req.user)
    res.json(req.user);
  }
);

userRouter.get('/logout', 
  userController.logoutUser
);

userRouter.get('/config',
  userController.configUser
);

userRouter.put('/edit',
  userController.editUser
);

userRouter.delete('/withdraw',
  userController.deleteUser
);

module.exports = userRouter;
