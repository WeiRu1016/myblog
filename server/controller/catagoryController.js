var catagoryModel = require('../model/catagoryModel');

exports.findAll = function() {
    return catagoryModel.find().populate('articles', '_id').sort({ 'create_time': -1 }).lean().exec();
}

exports.findByName = function(name) {
    return catagoryModel.findOne({
        name: name
    }).populate('articles', '_id').lean().exec();
}

exports.addArticle = function(name, id) {
    return catagoryModel.where({ name: name }).lean().exec().then(function(doc) {
        doc.articleList.push(id);
    });
}