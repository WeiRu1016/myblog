var mongoose = require('mongoose');
var conf = require('./mongoose.conf');
console.log(conf);
// 设置全局的promise
mongoose.Promise = global.Promise;
// 链接数据库
mongoose.connect(conf.url);
var db = mongoose.connection;
db.on('error', function(err) {
    throw new Error(err);
});
db.once('open', function(err, doc) {
    if (err) {
        throw new Error(err);
    }
    console.log('链接数据库~。~');
});

module.exports = mongoose;