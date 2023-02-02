const express = require("express");
const { userController } = require("../controller");
const { userMiddleware } = require("../middleware");
const passport = require('passport');
const { setUserToken } = require('../misc/util');

const userRouter = express.Router();

userRouter.post('/add',
  userMiddleware.checkCompleteUserFrom("body"),
  userController.addUser
);

userRouter.post('/login', 
  userMiddleware.checkUserFrom("body"),
  passport.authenticate('local'), (req, res, next) => 
  {
    setUserToken(res, req.user);
    // res.redirect('/Landing');
  }
);

userRouter.get('/logout', 
  userMiddleware.validateUser,
  userController.logoutUser
);

userRouter.get('/config',
  userMiddleware.validateUser,
  userController.configUser
);

userRouter.put('/edit',
  userMiddleware.validateUser,
  userController.editUser
);

userRouter.delete('/withdraw',
  userMiddleware.validateUser,
  userController.deleteUser
);

userRouter.get('/verify',
  userMiddleware.validateUser,
  userMiddleware.verifyUser
);

userRouter.get('/reissuance',
  userMiddleware.validateUser, (req, res, next) => 
  {
    setUserToken(res, req.user);
    // res.redirect('/Landing');
  }
);

module.exports = userRouter;
