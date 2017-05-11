var jwt  = require('jwt-simple');
var secret = require('../conf/secret').secret

module.exports = {
  isLogin: function(req, res, next) {
    var cookieJwt = req.cookies.jwt;
    if (!cookieJwt) {
      return res.status(401).end();
    }
    var jsonData = jwt.decode(cookieJwt, secret);
    if (jsonData.user_id) {
      next()
    } else {
      return res.status(401).end();
    }
  },
  isNotLogin: function(req, res, next) {
    var cookieJwt = req.cookies.jwt;
    if (!cookieJwt) {
      return next();
    }
    var jsonData = jwt.decode(cookieJwt, secret);
    if (jsonData.user_id) {
      res.end();
    } else {
      return next();
    }
  }
}