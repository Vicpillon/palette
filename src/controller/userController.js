const { userService } = require("../service");
const util = require('../misc/util')

const userController = {

  async postUser(req, res, next) {
    const {email, name, password, address} = req.body;
    const data = await userService.createUser({email, name, password, address})
    res.json(util.buildResponse(data));
  },

  async getUser(req, res, next) {
    const data = await userService.listUser()
    res.json(util.buildResponse(data));
  },

};



module.exports = userController;