var articleModle = require('../model/articleModel');

exports.findById = function(id) {
    return articleModle.findOne({
        _id: id
    }).populate('catagories', 'name').lean().exec();
}

exports.addOne = function(obj) {
    obj.create_time = new Date();
    obj.update_time = new Date();
    var articleEntiy = new articleModle(obj);
    return articleEntiy.save();
}

exports.edit = function(id, obj) {
    obj.update_time = new Date();
    return articleModle.where({
        '_id': id
    }).update({ $set: obj }).populate('catagories', 'name').exec()
}

exports.delete = function(id) {
    return articleModle.remove({
        '_id': id
    }).exec();
}

exports.findByLimit = function(page, limit) {
    return articleModle.find().populate('catagories', 'name').sort({ 'create_time': -1 }).skip(page * limit).limit(limit).lean().exec();
}