var mongoose = require('../conf/mongoose');
var Schema = mongoose.Schema;
console.log('articleSchema', Schema.Types.ObjectId);
var articleSchema = new Schema({
    title: String,
    content: String,
    catalog: Array,
    create_time: Date,
    update_time: Date,
    status: {
        type: String,
        enum: ['published', 'default', 'delete'],
        default: 'default'
    },
    catagory: {
        type: Schema.Types.ObjectId,
        ref: 'catagories'
    }
});
var articleModel = mongoose.model('article', articleSchema);

module.exports = { 
    model: articleModel,
    ObjectId: mongoose.Types.ObjectId
};