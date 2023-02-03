const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");
const Joi = require('joi');
const config = require('../config');
const jwt = require('jsonwebtoken');
const jwt_decode = require("jwt-decode");

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



const verifyAdmin  = (req, res, next) => {
  const decode_token = jwt_decode(req.cookies.token)
  const {role} = decode_token;
  if (role) {
    next();
    return;
  }
  next(
    new AppError(
      commonErrors.authorizationError,
      400,
      `관리자 계정이 아닙니다.`
    )
  );
};



const verifyUser = (req, res, next) => {
  try {
    jwt.verify(req.cookies.token, process.env.SECRET)
  }
  catch (err) {
    next(
      new AppError(
        commonErrors.jsonWebTokenError,
        401,
        `JWT 토큰이 만료되었거나 없습니다.`
      )
    );
  }
  next();
};


const existsToken = (req, res, next) => {
  if(req.cookies.token) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `로그인되어 있습니다`
      )
    );
    return;
  }
  next()
}


module.exports = {
  checkCompleteUserFrom,
  checkUserFrom,
  verifyAdmin,
  verifyUser,
  existsToken
};
