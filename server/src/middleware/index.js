module.exports = function (app) {
  app.use((req, res, next) => {
    req.feathers.ip = req.ip;
    req.feathers.headers = req.headers;

    next();
  });
};
