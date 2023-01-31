const { userService } = require("../service");
const bcrypt = require('bcrypt');
const util = require('../misc/util')

const userController = {

  async getUser(req, res, next) {
    const data = await userService.listUser()
    res.json(util.buildResponse(data));
  },

  async addUser(req, res, next) {
    try {
      const { email, name, password, address } = req.body;
      const salt = await bcrypt.genSalt();
      const hashedPassword = bcrypt.hashSync(password, salt)
      const user = await userService.createUser({ email, name, password:hashedPassword, address });
      res.status(201).json(util.buildResponse(user));
    } catch (error) {
      next(error);
    }
  },

  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userService.loginUser(email, password);
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  },

  async logoutUser(req, res, next) {
    try{
        if(req.user) {
          req.logout(() => {
          res.cookie('token', null, {maxAge: 0,})
          res.send("로그아웃되었습니다.")
          });
        }
        else {
          res.send("로그인되어있지 않습니다.")
        }
    }
    catch(err) {
      next(err)
    }
  },
  
  async configUser(req, res, next) {
    try {
      if(!req.user) {
        throw new Error("로그인되어있지 않습니다.")
      }
      const {email} = req.user;
      const user = await userService.configUser({email});
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  
  }


};



module.exports = userController;
