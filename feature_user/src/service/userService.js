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

  async configUser({_id}) {
    const configUser = await userDAO.findConfig({_id});
    return configUser;
  },

  async editUser({_id, email, name, password, address}) {
    const editUser = await userDAO.editUser({_id, email, name, password, address});
    return editUser;

  },

  async deleteUser({_id}) {
    await userDAO.deleteUser({_id})
  },


};

module.exports = userService;
