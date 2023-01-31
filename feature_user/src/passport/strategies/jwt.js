const JwtStrategy = require('passport-jwt').Strategy;
const cookieExtractor = (req) => {
  // req 의 cookies 에서 token 사용하기
  return req.cookies.token;
};

const opts = {
  secretOrKey: process.env.SECRET, 
  jwtFromRequest: cookieExtractor,
}

module.exports = new JwtStrategy(opts, (user, done) => {
  done(null, user);
});