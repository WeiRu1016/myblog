module.exports = function (app) {
  // app.use('/api/login', loginPlugin.isNotLogin, require('./login'));
  app.use('/api/login', require('./login'));
  app.use('/api/article', require('./article'));
  app.use('/api/catagory', require('./catagory'));
}