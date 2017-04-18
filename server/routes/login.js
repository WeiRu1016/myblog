var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
// var loginPlugin = require('../plugin/loginPlugin'); 
var jwt  = require('jwt-simple');
var secret = require('../conf/secret').secret

router.post('/', multipartMiddleware,  function (req, res, next) {
  var username = req.body.username,
      password = req.body.password;
  userController.check(username, password).then(function(doc){
    if (doc) {
      var payload = {
        user_id: doc._id
      };
      var token = jwt.encode(payload, secret);
      res.cookie('jwt', token, {domain:'.baobao.com', httpOnly: true, maxAge: 1000*60*60});
      res.json({
        code: 'success',
        username: doc.username,
        id: doc._id
      })
    } else {
      res.json({
        code: 'fail',
        msg: '用户名或密码不正确'
      })
    }
  })
})

router.get('/', function (req, res, next){
  var username = req.query.username;
  userController.findByName(username).then(function(doc){
    if (doc) {
      res.json({
        code: 'success',
        username: doc.username,
        id: doc._id
      })
    } else {
      res.json({
        code: 'fail',
        msg: '用户不存在'
      })
    }
  })
})

module.exports = router;