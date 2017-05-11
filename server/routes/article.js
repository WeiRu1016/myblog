var express = require('express');
var router = express.Router();
var articleController = require('../controller/articleController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var loginPlugin = require('../plugin/loginPlugin');

router.get('/getOne/:id', function(req, res, next) {
    var id = req.params.id;
    articleController.findById(id).then(function(doc) {
        if (doc) {
            res.json({
                code: 'success',
                article: doc
            })
        } else {
            res.json({
                code: 'fail',
                msg: '没有此文章'
            })
        }
    }).catch(function(err) {
        console.error(err);
        res.json({
          code: 'fail',
          msg: err
        })
    })
});

router.get('/all', function(req, res, next) {
    var page = req.query.page || 0;
    var limit = req.query.limit || 20;

    articleController.findByLimit(page, limit).then(function(doc) {
        res.json({
            article: doc
        })
    }).catch(function(err) {
        console.error(err);
        res.json({
          code: 'fail',
          msg: err
        })
    });
});

router.post('/add', loginPlugin.isLogin, multipartMiddleware, function(req, res, next) {
    var obj = {
        content: req.body.content,
        title: req.body.title,
        catalog: req.body.catalog,
        catagory: req.body.catagory
    }

    articleController.addOne(obj).then(function(doc) {
        if (doc) {
            res.json({
                code: 'success',
                id: doc._id
            })
        } else {
            res.json({
                code: 'fail',
                msg: '插入错误'
            })
        }
    }).catch(function(err) {
        console.error(err);
        res.json({
          code: 'fail',
          msg: err
        })
    });
});

router.post('/edit', loginPlugin.isLogin, multipartMiddleware, function(req, res, next) {
    var id = req.query.id; //文章id
    var obj = req.body; //修改的文章

    articleController.edit(id, obj).then(function(doc) {
        if (doc) {
            res.json({
                code: 'success',
                id: id
            })
        } else {
            res.json({
                code: 'fail',
                msg: '修改不成功'
            })
        }
    }).catch(function(err) {
        console.error(err);
        res.json({
          code: 'fail',
          msg: err
        })
    });
});

router.post('/delete', loginPlugin.isLogin, function (req, res, next) {
    var id = req.body.id;
    if (id) {
        articleController.deleteOne(id).then(function (doc) {
            res.json({
                code: 'success',
                msg: '删除成功'
            })
        }).catch(function (err) {
            res.json({
                code: 'fail',
                msg: err
            })
        })
    } else {
        res.json({
            code: 'fail',
            msg: '文章id参数错误'
        })
    }
});

router.post('/published', loginPlugin.isLogin, function (req, res, next) {
    var id = req.body.id;
    if (id) {
        articleController.publishedOne(id).then(function (doc) {
            if (doc) {
                res.json({
                    code: 'success',
                    msg: '发布成功',
                    data: doc
                })
            } else {
                res.json({
                    code: 'fail',
                    msg: '未找到此文章，发布不成功'
                })
            }
        }).catch(function (err) {
            res.json({
                code: 'fail',
                msg: err
            })
        })
    } else {
        res.json({
            code: 'fail',
            msg: '文章id参数错误'
        })
    }
});

router.get('/findByCatagory', function (req, res, next) {
    var id = req.query.id;
    articleController.findByCatagoryId(id).then(function(docs){
        if (docs) {
            res.json({
                code: 'success',
                data: docs
            })
        }else{
            res.json({
                code: 'fail',
                msg: '未找到此分类下的文章'
            })
        }
    }).catch(function(err){
        console.error(err);
        res.json({
          code: 'fail',
          msg: err
        })
    })
});

module.exports = router