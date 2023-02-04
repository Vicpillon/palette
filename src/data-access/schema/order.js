// 주문 정보 - db에 배송 상태가 저장된다.					
// 주문 정보 - db에 배송지 정보, 주문 총액, 수령자 이름 및 연락처가 저장된다.		

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },

    userId: {
<<<<<<< HEAD
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
=======
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        type: String,
>>>>>>> fa513838f6ba9bfb692109f403dbfd351a7c2adf
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "배송준비중",
        required: true,
<<<<<<< HEAD
=======
    },
    quantity: {
        type: Number,
        required: true,
>>>>>>> fa513838f6ba9bfb692109f403dbfd351a7c2adf
    }
  }, {
        collection : "Order",
        timestamps: true,
    }
);

module.exports = orderSchema;