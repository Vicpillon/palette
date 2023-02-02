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
  const token = jwt.sign(user, process.env.SECRET, {expiresIn:"10000"})
  // expiresIn : 토큰에 대한 기한 "1d" "1h" 60*60(ms)
  res.cookie('token', token, {maxAge:30000}).json(token)
  /* res.cookie('token', token, { httpOnly: false, sameSite:"None", maxAge: 30000(ms), secure: false}).json(token)
  maxAge : 쿠키에 대한 기한
  */
}




module.exports = {
  buildResponse,
  setUserToken,
};
