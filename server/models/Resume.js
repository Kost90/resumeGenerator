const { DataTypes } = require("sequelize");
const { sequelize } = require("./Conn");

const Resume = sequelize.define("Resume", {
  content: {
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
