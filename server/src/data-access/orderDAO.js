const { User, Order } = require("./model");

const orderDAO = {
  // 사용자 주문 추가
  async create(_id, data) {
    // user 데이터 추출 : address, phoneNumber, email, password, _id
    const userData = await User.findOne({ _id: _id });
    // _id.toString()
    const userDataId = userData._id.toString();
    let orderList = [];
    //  처음 돌 때는 productId = "1"
    await Promise.all(
      data.map(async (item) => {
        const { productId, status, quantity, price, phoneNumber } = item;
        const file = await Order.create({
          productId,
          userId: userDataId,
          totalPrice: price * quantity,
          address: userData.address,
          status,
          quantity,
          phoneNumber: userData.phoneNumber,
        });
        orderList.push(file);
      })
    );
    console.log(orderList);
    return orderList;
  },
  // 사용자 주문 내역 조회
  async findOne(id) {
    const order = await Order.findById(id).lean();
    return order;
  },
  // 사용자 주문 내역 수정
  async updateOne(id, { address }) {
    const order = await Order.findByIdAndUpdate(id, { address: address });
    return order;
  },
  // 관리자 - 사용자 배송 상태 수정
  async updateStatus(id, { status }) {
    const updateStatus = await Order.findByIdAndUpdate(
      id,
      {
        status: status,
      },
      { new: true }
    );
    return updateStatus;
  },
  // 관리자 - 사용자 주문 정보 조회
  async find({}) {
    const orders = await Order.find({});
    return orders;
  },
  //사용자 주문 삭제
  async deleteOne(id) {
    const order = await Order.findByIdAndDelete({ _id: id });
    return order;
  },
};

module.exports = orderDAO;
