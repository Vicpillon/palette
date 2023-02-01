const { userService } = require("../service");
const bcrypt = require('bcrypt');
const util = require('../misc/util')
const config = require("../config");

const userController = {

  async configAdminUser(req, res, next) {
    try {
      if(!req.user) {
        throw new Error("로그인되어있지 않습니다.")
      }
      if(req.user.shortId !== config.admin) {
        throw new Error("관리자 계정이 아닙니다.")
      }
      const data = await userService.listUser()
      res.json(util.buildResponse(data));
    }
    catch(err) {
      next(err)
    }
  },
  
  async editAdminUser(req, res, next) {
    try {
      if(!req.user) {
        throw new Error("로그인되어있지 않습니다.")
      }
      if(req.user.shortId !== config.admin) {
        throw new Error("관리자 계정이 아닙니다.")
      }
      const {userId} = req.params;
      const data = await userService.configUser({shortId:userId});
      const {email, name, password, address} = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hashSync(password, salt)
      const {shortId} = data;
      await userService.editUser({shortId, email, name, password:hashedPassword, address});
      const user = await userService.configUser({shortId})
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  },

  async deleteAdminUser(req, res, next) {
    try {
      if(!req.user) {
        throw new Error("로그인되어있지 않습니다.")
      }
      if(req.user.shortId !== config.admin) {
        throw new Error("관리자 계정이 아닙니다.")
      }
      const {userId} = req.params;
      await userService.deleteUser({shortId:userId});
      const text = "계정 탈퇴가 완료되었습니다."
      res.json(util.buildResponse(text))
    }
    catch(err) {
      next(err)
    }

  },

  async addUser(req, res, next) {
    try {
      const { email, name, password, address } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10)
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
      const {shortId} = req.user;
      const user = await userService.configUser({shortId});
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  },

  async editUser (req, res, next) {
    try{
      if(!req.user) {
        throw new Error("로그인되어있지 않습니다.")
      }
      const {email, name, password, address} = req.body;
      const {shortId} = req.user;
      const hashedPassword = bcrypt.hashSync(password, 10)
      await userService.editUser({shortId, email, name, password:hashedPassword, address});
      const user = await userService.configUser({shortId})
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  },

  async deleteUser (req, res, next) {
    try {
      if(!req.user) {
        throw new Error("로그인되어있지 않습니다.")
      }
      const {shortId} = req.user;
      await userService.deleteUser({shortId});
      req.logout(() => {
        res.cookie('token', null, {maxAge: 0,})
        res.send("회원 탈퇴가 완료되었습니다.")
        });
    }
    catch(err) {
      next(err)
    }
  }


};



module.exports = userController;
