const { userService } = require("../service");
const util = require('../misc/util')
const bcrypt = require('bcrypt');

const userController = {

  async configAdminUser(req, res, next) {
    try {
      const data = await userService.listUser()
      res.json(util.buildResponse(data));
    }
    catch(err) {
      next(err)
    }
  },
  
  async editAdminUser(req, res, next) {
    try {
      const {userId} = req.params;
      const {email, name, password, address, phoneNumber} = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10)

      const data = await userService.configUser({_id:userId});
      const {_id} = data;
      await userService.editUser({_id, email, name, password:hashedPassword, address, phoneNumber});
      const user = await userService.configUser({_id})
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  },

  async deleteAdminUser(req, res, next) {
    try {
      const {userId} = req.params;
      await userService.deleteUser({_id:userId});
      const text = "계정 탈퇴가 완료되었습니다."
      res.json(util.buildResponse(text))
    }
    catch(err) {
      next(err)
    }

  },

  async addUser(req, res, next) {
    try {
      const { email, name, password, address, phoneNumber } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10)
      const user = await userService.createUser({ email, name, password:hashedPassword, address, phoneNumber });
      res.status(201).json(util.buildResponse(user));
    } catch (err) {
      next(err);
    }
  },

  async logoutUser(req, res, next) {
    try{
        req.logout(() => {
        res.cookie('token', null, {maxAge: 0,})
        res.send("로그아웃되었습니다.")
        });
    }
    catch(err) {
      next(err)
    }
  },
  
  async configUser(req, res, next) {
    try {

      const {_id} = req.user;
      const user = await userService.configUser({_id});
      res.json(util.buildResponse(user));

    }
    catch(err) {
      next(err)
    }
  },

  async editUser (req, res, next) {
    try{
      const {email, name, password, address, phoneNumber} = req.body;
      const {_id} = req.user;
      const hashedPassword = bcrypt.hashSync(password, 10)
      await userService.editUser({_id, email, name, password:hashedPassword, address, phoneNumber});
      const user = await userService.configUser({_id})
      res.json(util.buildResponse(user));
    }
    catch(err) {
      next(err)
    }
  },

  async deleteUser (req, res, next) {
    try {
      const {_id} = req.user;
      await userService.deleteUser({_id});
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
