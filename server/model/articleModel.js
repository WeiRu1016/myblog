var mongoose = require('../conf/mongoose');
var Schema = mongoose.Schema;
console.log('articleSchema', Schema.Types.ObjectId);
var articleSchema = new Schema({
    title: String, // 标题
    text: String, // 内容
    catalog: Array, // 目录
    create_time: Date, // 创建时间
    update_time: Date, // 最近更新时间
    status: {
        type: String,
        enum: ['published', 'default', 'delete'],
        default: 'default'
    }, // 文章状态, 已发布、个人可见、回收站
    catagory: {
        type: Schema.Types.ObjectId,
        ref: 'catagories'
    } // 所属文集
});
var articleModel = mongoose.model('article', articleSchema);

module.exports = { 
    model: articleModel,
    ObjectId: mongoose.Types.ObjectId
};