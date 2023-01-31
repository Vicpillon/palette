const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
const passport = require('passport');
const { setUserToken } = require('../misc/util');

const userRouter = express.Router();

userRouter.get('/',
  userController.getUser
);

userRouter.post('/add',
  userMiddleware.checkCompleteUserFrom("body"),
  userController.addUser
);

userRouter.post('/login', 
passport.authenticate('local', {session: false}), (req, res, next) => {
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

module.exports = userRouter;
