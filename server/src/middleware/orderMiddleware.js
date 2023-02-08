const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");
const Joi = require("joi");
//const { orderService } = require("../service");

// 주문 스키마
const schema = Joi.object({
  productId: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

const checkCompleteOrderFrom = (from) => async (req, res, next) => {
  try {
    console.log(req[from]);
    await Promise.all(
      req[from].map(async (item) => {
        const { productId, quantity, price } = item;
        await schema.validateAsync({
          productId,
          quantity,
          price,
        });
      })
    );
  } catch (error) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 유효한 데이터 셋이 아닙니다.`
      )
    );
  }
  next();
};

const checkOrderIdFrom = (from) => (req, res, next) => {
  const { id } = req[from];
  if (id === undefined) {
    next(
      new AppError(commonErrors.inputError, 400, `${from}: id는 필수값입니다.`)
    );
  }
  next();
};

const checkUserOrderConditionFrom = (from) => (req, res, next) => {
  const { address, phoneNumber } = req[from];
  if (address === undefined && phoneNumber === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: address, phoneNumber 수정이 필요합니다.`
      )
    );
  }
  next();
};

// const checkStatus = (from) => async (req, res, next) => {
//   const { id } = req[from];
//   const data = await orderService.getOrder(id);

//   if (data.status === "배송중" || data.status === "배송완료") {
//     next(
//       new AppError(
//         commonErrors.authenticationError,
//         400,
//         `배송 준비중인 상품만 정보를 변경할 수 있습니다.`
//       )
//     );
//     next();
//   }
// };

const checkAdminOrderConditionFrom = (from) => (req, res, next) => {
  const { status } = req[from];
  if (status === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: status 수정이 필요합니다.`
      )
    );
  }
  next();
};

module.exports = {
  checkCompleteOrderFrom,
  checkOrderIdFrom,
  checkUserOrderConditionFrom,
  //checkStatus,
  checkAdminOrderConditionFrom,
};
