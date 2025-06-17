const { Queue, Worker } = require("bullmq");
const { redisClient } = require("../common/redisClient");

let notificationQueue;

async function setupBullMQ() {
  notificationQueue = new Queue("notificationQueue", {
    connection: redisClient,
  });

  const worker = new Worker(
    "notificationQueue",
    async (job) => {
      console.log("Processing job:", job.name);
      // Implement job logic here
    },
    { connection: redisClient }
  );

  worker.on("completed", (job) => {
    console.log(`Job ${job.id} has been completed`);
  });

  worker.on("failed", (job, err) => {
    if (job) console.error(`Job ${job.id} failed:`, err);
  });

  console.log("BullMQ queues setup completed");
}

module.exports = { setupBullMQ, notificationQueue };
