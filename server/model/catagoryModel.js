var mongoose = require('../conf/mongoose');

var Schema = mongoose.Schema;

var catagorySchema = new Schema({
  name: String,
  create_time: Date,
  articleList: [{
    type: Objectid,
    ref: 'article'
  }]
})

var catagoryModel = mongoose.model('catagory', catagorySchema, 'catagory');

module.exports = catagoryModel