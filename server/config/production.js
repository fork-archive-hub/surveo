module.exports = {
  port: process.env.PORT,
  captcha: {
    secret: process.env.GOOGLE_RECAPTCHA_SECRET,
  },
  mongodb: process.env.MONGODB_CONNECTION_STRING,
};
