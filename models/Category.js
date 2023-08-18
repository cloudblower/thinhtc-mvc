const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const Category = sequelize.define(
  "Category",
  {
    CategoryID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DeleteFlg: {
      type: DataTypes.TINYINT,
    },
  },
  { timestamps: false }
);

module.exports = Category;
