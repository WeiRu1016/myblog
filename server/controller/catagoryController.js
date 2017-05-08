var catagory = require('../model/catagoryModel');
var catagoryModel = catagory.model;
var ObjectId = catagory.ObjectId;
var articleController = require('../controller/articleController');

exports.findAll = function() {
    return catagoryModel.find().populate('articles', '_id').sort({ 'create_time': -1 }).lean().exec();
}

exports.findOne = function (id) {
    id = ObjectId(id);
    return catagoryModel.findOne({_id: id}).lean().exec();
}

exports.findByName = function(name) {
    return catagoryModel.findOne({
        name: name
    }).populate('articles', '_id').lean().exec();
}

exports.addOne = function (name) {
    return this.findByName(name).then(function(doc){
        if (!doc){
            var ent = new catagoryModel({
                name: name,
                create_time: new Date()
            })
            return ent.save();
        } else {
            return Promise.reslove('添加的文集已存在');
        }
    })
}

exports.changeName = function (id, name) {
    id = ObjectId(id);
    return this.findByName(name).then(function(doc){
        if (!doc) {
            return catagoryModel.where({_id: id}).update({name: name}).lean().exec();
        }else{
            return Promise.resolve(null);
        }
    })
}

exports.deleteOne = function (id) {
    id = ObjectId(id);
    return articleController.deleteByCatagoryId(id).then(function () {
        return catagoryModel.where({_id: id}).remove().lean().exec();
    }).catch(function (err) {
        return err;
    })
}

exports.addArticle = function(name, id) {
    id = ObjectId(id);
    return catagoryModel.where({ name: name }).lean().exec().then(function(doc) {
        doc.articleList.push(id);
    });
}