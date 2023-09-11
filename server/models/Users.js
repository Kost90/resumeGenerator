const { DataTypes } = require("sequelize");
const {sequelize} = require('./Conn');

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Firstname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    Lastname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    validate: true,
    default: {
      allowNull: false,
    },
  }
);


module.exports = Users;
