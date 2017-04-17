var express = require('express');
var router = express.Router();
var articleController = require('../controller/articleController');

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
    })
});

router.get('/all', function(req, res, next) {
    var page = req.query.page || 0;
    var limit = req.query.limit || 20;

    articleController.findByLimit(page, limit).then(function(doc) {
        res.json({
            article: doc
        })
    });
});

router.post('/add', function(req, res, next) {
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
    })
});

router.post('/edit', function(req, res, next) {
    var id = req.query.id; //文章id
    var obj = req.body.obj; //修改的文章

    articleController.edit(id, obj).then(function(doc) {
        if (doc) {
            res.json({
                code: 'success',
                id: doc._id
            })
        } else {
            res.json({
                code: 'fail',
                msg: '修改不成功'
            })
        }
    });
})
module.exports = router