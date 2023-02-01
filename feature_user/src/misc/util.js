const jwt = require('jsonwebtoken');


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
  buildResponse,
  setUserToken,
};
