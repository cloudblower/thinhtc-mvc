const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const CartItem = sequelize.define(
  "CartItem",
  {
    CartItemID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    UserID: {
      type: DataTypes.INTEGER,
    },
    ProductID: {
      type: DataTypes.INTEGER,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = CartItem;
