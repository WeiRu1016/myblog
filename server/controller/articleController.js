var article = require('../model/articleModel');
var articleModle = article.model;
var ObjectId = article.ObjectId;

exports.findById = function(id) {
    id = ObjectId(id);
    return articleModle.findOne({
        '_id': id
    }).populate('catagories', '_id').lean().exec();
}

exports.addOne = function(obj) {
    obj.create_time = new Date();
    obj.update_time = new Date();
    var articleEntiy = new articleModle(obj);
    return articleEntiy.save();
}

exports.edit = function(id, obj) {
    id = ObjectId(id);
    obj.update_time = new Date();
    return articleModle.where({
        '_id': id
    }).update({ $set: obj }).populate('catagories', '_id').exec()
}

exports.deleteOne = function(id) {
    id = ObjectId(id);
    return articleModle.remove({
        '_id': id
    }).exec();
}

exports.findByLimit = function(page, limit) {
    return articleModle.find().populate('catagories', 'name').sort({ 'create_time': -1 }).skip(page * limit).limit(limit).lean().exec();
}

exports.findByCatagoryId = function (id) {
    id = ObjectId(id);
    return articleModle.find({catagory: id}).lean().sort({update_time: -1}).exec();
}

exports.deleteByCatagoryId = function (id) {
    id = ObjectId(id);
    return articleModle.where({catagory: id}).remove().lean().exec();
}

exports.publishedOne = function (id) {
    id = ObjectId(id);
    return articleModle.where({_id: id}).update({status: 'published'}).lean().exec();
}