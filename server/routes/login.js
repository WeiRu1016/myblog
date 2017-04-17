var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

router.post('/', function (req, res, next) {
  var username = req.body.username,
      password = req.body.password;
  userController.check(username, password).then(function(doc){
    if (doc && doc.length > 0) {
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