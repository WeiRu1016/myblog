var mongoose = require('../conf/mongoose');

var Schema = mongoose.Schema;
console.log('catagorySchema:', Schema.Types.ObjectId);
var catagorySchema = new Schema({
    name: {
        type: Schema.Types.String,
        unique: true
    },
    create_time: Date,
    articleList: [{
        type: Schema.Types.ObjectId,
        ref: 'articles'
    }]
})

var catagoryModel = mongoose.model('catagory', catagorySchema);

module.exports = {
    model: catagoryModel,
    ObjectId: mongoose.Types.ObjectId
}