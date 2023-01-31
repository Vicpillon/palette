const jwt = require('jsonwebtoken');

function sanitizeObject(obj) {
  const result = Object.entries(obj).reduce((map, [key, value]) => {
    if (value !== undefined) {
      map[key] = value;
    }
    return map;
  }, {});
  return result;
}

function buildResponse(data, errorMessage) {
  return {
    error: errorMessage ?? null,
    data,
  };
}


const setUserToken = (res, user) => {
  // 유저 jwt 토큰생성
  // 토큰을 쿠키로 전달
  const token = jwt.sign(user, process.env.SECRET)

  res.cookie('token', token)
}



module.exports = {
  sanitizeObject,
  buildResponse,
  setUserToken,
};
