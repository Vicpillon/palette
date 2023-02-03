const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");

const checkCompleteOrderFrom = (from) => (req, res, next) => {
  const { productId, userId, totalPrice, address, phoneNumber } = req[from];
  if (productId === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: productId는 필수값입니다.`
      )
    );
  }
  if (userId === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: userId는 필수값입니다.`
      )
    );
  }
  if (totalPrice === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: totalPrice는 필수값입니다.`
      )
    );
  }
  if (address === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: address는 필수값입니다.`
      )
    );
  }
  if (phoneNumber === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: phoneNumber는 필수값입니다.`
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

const checkMinOrderConditionFrom = (from) => (req, res, next) => {
  const { title, content, author } = req[from];
  if (title === undefined && content === undefined && author === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: title, content, author중 최소 하나는 필요합니다.`
      )
    );
  }
  next();
};

module.exports = {
    checkCompleteOrderFrom,
    checkOrderIdFrom,
    checkMinOrderConditionFrom

};