var user = require('../model/userModel');
var userModel = user.model;
var ObjectId = user.ObjectId;

exports.findByName = function (username) {
  return userModel.findOne({username: username}).lean().exec();
}

exports.check = function (username, password) {
  return userModel.findOne({username: username,password: password}).lean().exec();
}

exports.insertOne = function (username, password) {
  var userEnity = new userModel({
    username: username,
    password: password
  });
  return userEnity.save()
}