// const AppError = require("../misc/AppError");
// const commonErrors = require("../misc/commonErrors");

// const checkCompleteOrderFrom = (from) => (req, res, next) => {
//   const { productId, userId, totalPrice, address, status, quantity } = req[from];\
//   const schema = Joi.object({
//     //productId: Joi.string().required(),
//     //userId: Joi.number().required(),
//     totalPrice: Joi.number().max(30).required(),
//     address: Joi.string().max(100).required(),
//     status: Joi.string().required(),
//     quantity: Joi.string().required()
//   })

//   try {
//     await schema.validateAsync({
//       productId,
//       userId,
//       totalPrice,
//       address,
//       status,
//       quantity
//     })
//   } catch(error) {
//     const result = Object.entries(req[form]).reduce((map, [key, value])=>{
//         map += `[${key} : ${value}] `;
//         return map;
//     }, '');
//     next(
//         new AppError(commonErrors.inputError, 400, `${result}: 유효한 데이터 셋이 아닙니다.`)
//     )
//   }

// };

// const checkOrderIdFrom = (from) => (req, res, next) => {
//   const { id } = req[from];
//   if (id === undefined) {
//     next(
//       new AppError(commonErrors.inputError, 400, `${from}: id는 필수값입니다.`)
//     );
//   }
//   next();
// };

// const checkMinOrderConditionFrom = (from) => (req, res, next) => {
//   const { title, content, author } = req[from];
//   if (title === undefined && content === undefined && author === undefined) {
//     next(
//       new AppError(
//         commonErrors.inputError,
//         400,
//         `${from}: title, content, author중 최소 하나는 필요합니다.`
//       )
//     );
//   }
//   next();
// };

// module.exports = {
//     checkCompleteOrderFrom,
//     checkOrderIdFrom,
//     checkMinOrderConditionFrom

// };
