const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const OrderItem = sequelize.define(
  "OrderItem",
  {
    ItemID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    OrderID: {
      type: DataTypes.INTEGER,
    },
    Quantity: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    DeleteFlg: {
      type: DataTypes.TINYINT,
    },
  },
  { timestamps: false }
);

module.exports = OrderItem;
