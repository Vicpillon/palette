// Persistence Layer : 영속성을 가져야하는 데이터를 관리.
// 데이터 소스와 비즈니스 레이어 사이에서 데이터를 읽고 쓰는 것이 역할
// 비즈니스에게 영속성 데이터를 제공하거나 받아서 처리함. DAO, Repository



const { User } = require("./model");

const userDAO = {
  async find({}) {
    const users = await User.find({})
    return users
  },

  async create({ email, name, password, address, phoneNumber }) {
    const verifyEmail = await User.findOne({email:email});
    if(!verifyEmail) {
      const user = await User.create({email, name, password, address, phoneNumber})
      return user;
    }
    else {
      throw new Error("중복된 이메일입니다.")
    }
  },

  async findConfig({_id}) {
    const user = await User.findOne({_id:_id});
    return user;
  },
  
  async editUser({_id, email, name, password, address, phoneNumber}) {
    const user = await User.findOneAndUpdate({_id:_id},{email:email, name:name, password:password, address:address, phoneNumber:phoneNumber});
    return user;
  },

  async deleteUser({_id}) {
    await User.deleteOne({_id:_id})
  },

};


module.exports = userDAO;
