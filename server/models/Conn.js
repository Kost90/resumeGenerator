const { Sequelize } = require("sequelize");
const {db, user, pw, host} = require('../config');

// DB Connection Configuration
const sequelize = new Sequelize(db, user, pw, {
    host: host,
    dialect: "postgres",
    dialectOptions:{
        ssl:true
    },
    logging: false
});

// Test connection function
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}

module.exports = {sequelize, testConnection}