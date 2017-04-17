var mongoose = require('../conf/mongoose');

var Schema = mongoose.Schema;

var catagorySchema = new Schema({
    name: String,
    create_time: Date,
    articleList: [{
        type: Objectid,
        ref: 'articles'
    }]
})

var catagoryModel = mongoose.model('catagory', catagorySchema);

module.exports = catagoryModel