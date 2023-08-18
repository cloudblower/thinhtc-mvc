const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const User = sequelize.define(
  "User",
  {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DeleteFlg: {
      type: DataTypes.TINYINT,
    },
  },
  { timestamps: false }
);

module.exports = User;
