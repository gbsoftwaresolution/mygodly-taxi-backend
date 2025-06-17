const pino = require("pino");

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  level: "info",
});

const stream = {
  write: (msg) => logger.info(msg.trim()),
};

module.exports = { logger, stream };
