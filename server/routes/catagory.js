var express = require('express');
var router = new express.Router();
var catagoryController = require('../controller/catagoryController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var loginPlugin = require('../plugin/loginPlugin');

router.get('/all', function (req, res, next) {
  catagoryController.findAll().then(function(docs) {
    res.json({
      code: 'success',
      data: docs
    })
  }).catch(function(err) {
    console.error(err);
    res.json({
      code: 'fail',
      msg: err
    })
  });
});
router.get('/getByName', multipartMiddleware, function (req, res, next) {
  var name = req.query.name;
  catagoryController.findByName(name).then(function (doc) {
    if (doc) {
        res.json({
          code: 'success',
          name: doc.name,
          id: doc._id
        })
    } else{
        res.json({
          code: 'fail',
          msg: '没有查询的分类'
        })
    }
  }).catch(function (err) {
      console.error(err);
      res.json({
          code: 'fail',
          msg: err
      })
  })
});
router.post('/add', loginPlugin.isLogin, function (req, res, next) {
  var name = req.body.name;
  catagoryController.addOne(name).then(function (doc) {
      if (typeof (doc) === 'object') {
        res.json({
          code: 'success',
          name: doc.name,
          id: doc._id
        });
      } else {
          res.json({
            code: 'fail',
            msg: doc.toString()
          })
      }
  }).catch(function (err) {
    console,error(err);
    res.json({
      code: 'fail',
      msg: err
    })
  })
});
router.post('/changeName', loginPlugin.isLogin, function(req, res, next) {
  var name = req.body.name;
  var id = req.body.id;
  catagoryController.changeName(id, name).then(function(doc){
    if (doc) {
      res.json({
        code: 'success',
        data: doc,
        id: doc._id
      })
    }else{
      res.json({
        code: 'fail',
        msg: '修改的名字已重复'
      })
    }
  }).catch(function(err) {
    console.error(err);
    res.json({
      code: 'fail',
      msg: msg
    })
  })
});

router.post('/delete', loginPlugin.isLogin, function (req, res, next) {
  var id = req.body.id;
  if (id) {
    catagoryController.deleteOne(id).then(function(doc){
      res.json({
        code: 'success',
        msg: '删除成功'
      })
    }).catch(function (err) {
      console.error(err);
      res.json({
        code: 'fail',
        msg: msg
      })
    })
  } else {
    console.error(err);
    res.json({
      code: 'fail',
      msg: '文集id参数不正确'
    })
  }
});

module.exports = router;