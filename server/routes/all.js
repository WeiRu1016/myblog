module.exports = function (app) {
  // app.use('/api/login', loginPlugin.isNotLogin, require('./login'));
  app.use('/api/test', function (req, res, next) {
    res.send('success~.~ baomax');
  });
  app.use('/api/login', require('./login'));
  app.use('/api/article', require('./article'));
  app.use('/api/catagory', require('./catagory'));
}