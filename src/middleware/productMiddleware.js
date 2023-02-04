const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");
const Joi = require("joi");

const checkCompleteProductFrom = (from) => async (req, res, next) => {
  const { name, price, summary, description, company, category, remaining, image } = req[from];

  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    summary: Joi.string().max(50).required(),
    description: Joi.string().max(100).required(),
    company: Joi.string().required(),
    category: Joi.string().required(),
    remaining: Joi.number().required(),
    image: Joi.string().required()
  })

  try {
    await schema.validateAsync({
      name, 
      price, 
      summary, 
      description, 
      company,
      category, 
      remaining, 
      image
    })
  } catch(error) {
    const result = Object.entries(req[form]).reduce((map, [key, value])=>{
        map += `[${key} : ${value}] `;
        return map;
    }, '');
    next(
        new AppError(commonErrors.inputError, 400, `${result}: 유효한 데이터 셋이 아닙니다.`)
    )
  }
};

const checkProductIdFrom = (from) => (req, res, next) => {
  const { id } = req[from];

  if (id === undefined) {
    next(
      new AppError(commonErrors.inputError, 400, `${from}: id는 필수값입니다.`)
    );
  }
  next();
};

const checkMinProductConditionFrom = (from) => (req, res, next) => {
  const { name, price, summary, description, company, category, remaining, image } = req[from];

  if (name === undefined && price === undefined && summary === undefined ) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 값이 최소 하나는 필요합니다.`
      )
    );
  }
  next();
};

module.exports = {
  checkCompleteProductFrom,
  checkProductIdFrom,
  checkMinProductConditionFrom,
};
