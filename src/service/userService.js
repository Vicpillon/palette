const { userDAO } = require("../data-access");

const userService = {
  async listUser() {
    const user = await userDAO.find({});
    return user;
  },

  async createUser({ email, name, password, address }) {
    const createdUser = await userDAO.create({
      email,
      name,
      password,
      address,
    });
    return createdUser;
  },



};

module.exports = userService;