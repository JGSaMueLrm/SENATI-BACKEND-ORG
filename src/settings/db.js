const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "senati-personas", "root", "", { host: "localhost", dialect: "mysql" }
);

module.exports = sequelize;