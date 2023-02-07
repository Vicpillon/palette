const { User, Order } = require("./model");

const orderDAO = {
  // 사용자 주문 추가
  async create(_id, data) {
    // user 데이터 추출 : address, phoneNumber, email, password, _id
    const userData = await User.findOne({ _id: _id });
    // _id.toString()
    const userDataId = userData._id.toString();

    //  처음 돌 때는 productId = "1"
    await Promise.all(
      data.map(async (item) => {
        const { productId, status, quantity, price } = item;
        await Order.create({
          productId,
          userId: userDataId,
          totalPrice: price * quantity,
          address: userData.address,
          status,
          quantity,
        });
      })
    );
    // 토큰에서 userId 추출
    const free = await Order.find({ userId: _id }); // 조회
    return free;
  },
  // 사용자 주문 내역 조회
  async findOne(id) {
    const order = await Order.findById(id).lean();
    return order;
  },
  async updateOne(id, { productId, userId, quantity, address, price }) {
    const order = await Order.findByIdAndUpdate(id, {
      productId: productId,
      userId: userId,
      quantity: quantity,
      address: address,
      totalPrice: price * quantity,
    });
    return order;
  },
  //사용자 주문 삭제
  async deleteOne(id) {
    const order = await Order.findByIdAndDelete({ _id: id });
    return order;
  },
};

module.exports = orderDAO;
