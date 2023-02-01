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
  passport.authenticate('local', {session: false}), (req, res, next) => 
  {
    setUserToken(res, req.user)
    res.json(req.user);
    // res.redirect('/Landing');
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
