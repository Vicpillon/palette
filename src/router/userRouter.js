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
  userMiddleware.existsToken,
  passport.authenticate('local'), (req, res, next) => 
  {
    setUserToken(res, req.user);
    // res.redirect('/Landing');
  }
);

userRouter.get('/logout', 
  userController.logoutUser
);

userRouter.get('/config',
  userMiddleware.verifyUser,
  userController.configUser
);

userRouter.put('/edit',
  userMiddleware.verifyUser,
  userController.editUser
);

userRouter.delete('/withdraw',
  userMiddleware.verifyUser,
  userController.deleteUser
);

userRouter.get('/verify',
  userMiddleware.verifyUser,
  (req, res, next) => {
    res.json(req.cookies.token)
  }
);

module.exports = userRouter;
