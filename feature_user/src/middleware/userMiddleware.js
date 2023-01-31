const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");

const checkCompleteUserFrom = (from) => (req, res, next) => {
  const { email, name, password, address } = req[from];
  if (email === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: email은 필수값입니다.`
      )
    );
  }
  if (name === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: name은 필수값입니다.`
      )
    );
  }
  if (password === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: password는 필수값입니다.`
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
  next();
};

const checkUserFrom = (from) => (req, res, next) => {
  const { email, password } = req[from];
  if (email === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: email은 필수값입니다.`
      )
    );
  }
  if (password === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: password는 필수값입니다.`
      )
    );
  }
  next();
};

const checkMinPostConditionFrom = (from) => (req, res, next) => {
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
  checkCompleteUserFrom,
  checkUserFrom,
  checkMinPostConditionFrom,
};
