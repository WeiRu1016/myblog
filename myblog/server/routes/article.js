var express = require('express');
var router = express.Router();
var articleController = require('../controller/articleController');

router.get('/getOne/:id', function (req, res, next) {
  var id = req.params.id;
  articleController.findById(id).then(function (doc) {
    if (doc) {
      res.json({
        code: 'success',
        article: doc
      })
    }else{
      res.json({
        code: 'fail',
        msg: '没有此文章'
      })
    }
  })
});

router.get('/all', function (req, res, next) {
  var page = req.query.page || 0;
  var limit = req.query.limit || 20;

  articleController.findByLimit(page, limit).then(function(doc){
    res.json({
      article: doc
    })
  });
});

module.exports = router