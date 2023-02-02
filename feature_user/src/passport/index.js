const passport = require('passport');

const local = require('./strategies/local');

module.exports = () => {
  passport.use(local);
  // jwt strategy 사용
  passport.serializeUser((user, callback) => {
    callback(null, user);
  });

  passport.deserializeUser((obj, callback) => {
    callback(null, obj);
  })
};