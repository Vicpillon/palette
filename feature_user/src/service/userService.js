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

  async loginUser(email, password) {
    const loginUser = await userDAO.findUser(email, password);
    return loginUser;
  },

  async configUser({email}) {
    const configUser = await userDAO.findConfig({email});
    return configUser;
  }


};

module.exports = userService;
