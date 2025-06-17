const app = require("./app");
const config = require("./config/config");
const { connectDB } = require("./db");
const { connectRedis } = require("./common/redisClient");
const { setupBullMQ } = require("./jobs/bullmq.setup");
const { connectRabbitMQ } = require("./messaging/rabbitmq");

async function startServer() {
  try {
    await connectDB();
    await connectRedis();
    await setupBullMQ();
    await connectRabbitMQ();

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
