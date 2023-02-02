const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");
const Joi = require('joi');
const config = require('../config');
const jwt = require('jsonwebtoken');


const checkCompleteUserFrom = (from) => async (req, res, next) => {
  const { email, name, password, address, phoneNumber } = req[from];

  const schema = Joi.object({
    email: Joi.string()
              .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
              .required(),
    password: Joi.string()
                 .required(),
    name: Joi.string()
             .required(),
    address: Joi.string()
                .required(),
    phoneNumber: Joi.string()
                    .pattern(new RegExp('^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$'))
                    .required()
  })

  try {
    await schema.validateAsync({ email, name, password, address, phoneNumber })
  }
  catch(err) {
    const result = Object.entries(req[from]).reduce((map, [key, value]) => {
      map += '['+key+':'+value+"]"+" ";
      return map
  }, '');
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${result}: 유효한 데이터셋이 아닙니다.`
      )
    );
  }
  next()
};

const checkUserFrom = (from) => async (req, res, next) => {
  const { email, password } = req[from];

  const schema = Joi.object({
    email: Joi.string()
              .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
              .required(),
    password: Joi.string()
                 .required(),
  })

  try {
    await schema.validateAsync({ email, password })
  }
  catch(err) {
    const result = Object.entries(req[from]).reduce((map, [key, value]) => {
      map += '['+key+':'+value+"]"+" ";
      return map
  }, '');
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${result}: 유효한 데이터셋이 아닙니다.`
      )
    );
  }
  next();
};

const validateUser  = (req, res, next) => {
  if (!req.user) {
    next(
      new AppError(
        commonErrors.authenticationError,
        400,
        `로그인되어있지 않습니다.`
      )
    );
  }
  next();
};

const validateAdmin  = (req, res, next) => {
  if (req.user._id !== config.admin) {
    next(
      new AppError(
        commonErrors.authorizationError,
        400,
        `관리자 계정이 아닙니다.`
      )
    );
  }
  next();
};

const verifyUser = (req, res, next) => {
  try {
    jwt.verify(req.cookies.token, process.env.SECRET)
    res.json(req.cookies.token)
  }
  catch (err) {
    next(
      new AppError(
        commonErrors.jsonWebTokenError,
        500,
        `JWT 토큰이 만료되었거나 없습니다.`
      )
    );
  }
  next();
};



module.exports = {
  checkCompleteUserFrom,
  checkUserFrom,
  validateUser,
  validateAdmin,
  verifyUser
};
