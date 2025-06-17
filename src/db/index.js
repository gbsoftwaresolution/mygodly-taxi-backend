const { Sequelize } = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: "mysql",
    logging: false,
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("MySQL database connected.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
}

module.exports = { sequelize, connectDB };
