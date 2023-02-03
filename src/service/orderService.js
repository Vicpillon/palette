const { orderDAO } = require("../data-access");

const orderService = {

  // async listOrder() {
  //   const order = await orderDAO.find();
  //   return order;
  // },
  // 주문 생성
  async createOrder({ productId, userId, totalPrice, address, status }) {
    const createdOrder = await orderDAO.create({
      productId,
      userId,
      totalPrice,
      address,
      status,
    });
    return createdOrder;
  },
  // 주문 하나 조회
  async getOrder(id) {
    const order = await orderDAO.findOne(id);
    return order;
  },
  // 전체 주문 조회
  async getOrders(filter) {
    const orders = await orderDAO.find(filter);
    return orders;
  },
  // 주문자 배송지 수정
  async updateOrder(id , { address }) {
    const order = await orderDAO.findOne(id);
    if (order.status !== "배송준비중") {
      console.log("배송 준비중인 상태의 주문만 변경이 가능합니다.");
      return;
    }
    const updatedOrder = await orderDAO.updateOne(id, { address });
    return updatedOrder;
  },
  // 주문 취소
  async deleteOrder(id) {
    const deletedOrder = await orderDAO.deleteOne(id);
    return deletedOrder;
  },

};

module.exports = orderService;