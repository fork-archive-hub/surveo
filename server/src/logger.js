const winston = require('winston');

const logger = winston.createLogger({
  exitOnError: false,
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf((log) => {
      if (log.stack) {
        return `[${log.level}] : ${log.timestamp} : ${log.stack}`;
      }
      return `[${log.level}] : ${log.timestamp} : ${log.message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      handleExceptions: true,
    }),
  ],
});

module.exports = logger;
