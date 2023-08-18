const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const Order = sequelize.define(
  "Order",
  {
    OrderID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    UserID: {
      type: DataTypes.INTEGER,
    },
    OrderDate: {
      type: DataTypes.DATE,
    },
    TotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    DeleteFlg: {
      type: DataTypes.TINYINT,
    },
  },
  { timestamps: false }
);

module.exports = Order;
