const { User } = require("./model");

const userDAO = {
  async find({}) {
    const users = await User.find({})
    return users
  },

  async create({ email, name, password, address }) {
    const verifyEmail = await User.findOne({email:email});
    if(!verifyEmail) {
      const check = /\S+@\S+\.\S+/;
      if(!check.test(email)) {
        throw new Error("이메일 형식이 아닙니다.")
      }
      const user = await User.create({email, name, password, address})
      return user;
    }
    else {
      throw new Error("중복된 이메일입니다.")
    }
  },

  async findUser(email, password) {
    const user = await User.findOne({email:email});
    const check = /\S+@\S+\.\S+/;
    if(!check.test(email)) {
      throw new Error("이메일 형식이 아닙니다.")
    }
    if(!user) {
      throw new Error("회원을 찾지 못했습니다.")
    }
    if(user.password === password) {
      return user;
    }
    else {
      throw new Error("비밀번호가 다릅니다.")
    }

  },

  async findConfig({shortId}) {
    const user = await User.findOne({shortId:shortId});
    return user;
  },
  
  async editUser({shortId, email, name, password, address}) {
    const user = await User.findOneAndUpdate({shortId:shortId},{email:email, name:name, password:password, address:address});
    return user;
  },

  async deleteUser({shortId}) {
    await User.deleteOne({shortId:shortId})
  },

};


module.exports = userDAO;
