var mongoose = require('../conf/mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});

var userModel = mongoose.model('user', userSchema, 'user');

/**查询*/
module.exports = {
    model: userModel,
    ObjectId: mongoose.Types.ObjectId
};