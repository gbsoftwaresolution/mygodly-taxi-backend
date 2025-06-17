const { createClient } = require("redis");
const config = require("../config/config");

let redisClient;

async function connectRedis() {
  redisClient = createClient({
    socket: {
      host: config.redis.host,
      port: config.redis.port,
    },
    password: config.redis.password,
  });

  redisClient.on("error", (err) => console.error("Redis Client Error", err));
  await redisClient.connect();
  console.log("Redis connected");
}

module.exports = { connectRedis, redisClient };
