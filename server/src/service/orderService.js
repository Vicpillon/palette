const { orderDAO } = require("../data-access");

const orderService = {
  // 사용자 주문 추가
  async createOrder(_id, data) {
    const createdOrder = await orderDAO.create(_id, data);
    return createdOrder;
  },
  // 사용자 주문 내역 조회
  async getOrder(id) {
    const getOrder = await orderDAO.findOne(id);
    return getOrder;
  },
  // 사용자 주문 수정
  async updateOrder(id, { productId, userId, quantity, address, price }) {
    const updatedOrder = await orderDAO.updateOne(id, {
      productId,
      userId,
      quantity,
      address,
      price,
    });
    return updatedOrder;
  },
  // 사용자 주문 삭제
  async deleteOrder(id) {
    const deletedOrder = await orderDAO.deleteOne(id);
    return deletedOrder;
  },
};

module.exports = orderService;
