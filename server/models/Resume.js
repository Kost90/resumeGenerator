const { DataTypes } = require("sequelize");
const { sequelize } = require("./Conn");

const Resume = sequelize.define("Resume", {
  Firstname: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  Lastname: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    validate: { isEmail: true },
    allowNull: false,
  },
  phone:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  workexpr:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  education:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills:{
    type: DataTypes.STRING,
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

module.exports = Resume;
