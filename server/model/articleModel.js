var mongoose = require('../conf/mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  title: String,
  content: String,
  catalog: Array,
  create_time: Date,
  update_time: Date,
  catagory: {
    type: String,
    ref: 'catagory'
  }
});
var articleModel = mongoose.model('article', articleSchema, 'article');

module.exports = articleModel;