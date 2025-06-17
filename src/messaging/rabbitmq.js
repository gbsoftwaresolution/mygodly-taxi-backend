const amqp = require("amqplib");
const config = require("../config/config");

let connection;
let channel;

async function connectRabbitMQ() {
  try {
    connection = await amqp.connect(config.rabbitmq.url);
    channel = await connection.createChannel();
    console.log("RabbitMQ connected");
  } catch (error) {
    console.error("Failed to connect to RabbitMQ:", error);
    throw error;
  }
}

module.exports = { connectRabbitMQ, connection, channel };
