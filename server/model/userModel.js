var mongoose = require('../conf/mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});

var userModel = mongoose.model('user', userSchema, 'user');

/**查询*/
module.exports = userModel;