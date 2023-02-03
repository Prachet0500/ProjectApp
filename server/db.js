const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecom", "postgres", "apples", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;