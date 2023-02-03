const { Order } = require("./model");

const orderDAO = {
  // 주문 생성
  async create({ productId, userId, totalPrice, address, status }) {
    const order = new Order({
      productId,
      userId,
      totalPrice,
      address,
      status,
    });
    await order.save();
    return order.toObject();
  },
  // 주문 하나 조회
  async findOne(id) {
    const order = await Order.findById(id).lean();
    return order;
  },
  // 전체 주문 조회
  async find(filter) {
    const orders = await Order.find(filter).lean();
    return orders;
  },

  // 주문자 배송지 수정
  async updateOne(id, { address } ) {
    const updatedOrder = await Order.findByIdAndUpdate(id, { address }).lean();
    return updatedOrder;
  },
  // 개별 주문 삭제
  async deleteOne(id) {
    const deletedOrder = await Order.findByIdAndDelete({ _id: id }).lean();
    return deletedOrder;
  },
};

module.exports = orderDAO;