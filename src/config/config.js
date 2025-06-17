require("dotenv").config();

module.exports = {
  port: process.env.PORT || 4000,
  db: {
    host: process.env.DB_HOST || "localhost",
    port: +process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || "taxi_db",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: +process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASS || undefined,
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "your_jwt_secret_key",
    expiration: process.env.JWT_EXPIRATION || "1d",
  },
};
