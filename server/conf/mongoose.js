var mongoose = require('mongoose');
var conf = require('./mongoose.conf');

mongoose.Promise = global.Promise

mongoose.connect(conf.url);
var db = mongoose.connection;
db.on('error', function(err){
  throw new Error(err);
})
db.once('open', function (err, doc) {
  if (err) {
    throw new Error(err);
  }
  console.log('链接数据库~。~')
});

module.exports = mongoose;