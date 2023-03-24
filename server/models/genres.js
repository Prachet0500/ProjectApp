const Sequelize = require("sequelize");
const sequelize = require("../db");

const genre = sequelize.define("genre", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },


},
{
  timestamps:false,
});

module.exports = genre;


