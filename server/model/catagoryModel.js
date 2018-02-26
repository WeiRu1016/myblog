var mongoose = require('../conf/mongoose');

var Schema = mongoose.Schema;
console.log('catagorySchema:', Schema.Types.ObjectId);
var catagorySchema = new Schema({
    name: {
        type: Schema.Types.String,
        unique: true
    }, // 文集名称
    create_time: Date, // 文件创建时间
    articleList: [{
        type: Schema.Types.ObjectId,
        ref: 'articles'
    }] // 文集包含文章列表
})

var catagoryModel = mongoose.model('catagory', catagorySchema);

module.exports = {
    model: catagoryModel,
    ObjectId: mongoose.Types.ObjectId
}