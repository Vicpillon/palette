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
  async findMany(filter) {
    const orders = await Order.find(filter).lean();
    return orders;
  },
  // 관리자는 주문자의 배송상태 수정
  async updateOneAdmin(id, { address, productId, status }) {
    const updatedOrder = await Order.findByIdAndUpdate(id, 
      { address, productId, status }).lean();
    return updatedOrder;
  },
  // 주문자는 배송 시작 전 주문정보 수정
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