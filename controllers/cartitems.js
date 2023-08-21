const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/User");
const Product = require("../models/Product");
const CartItem = require("../models/CartItem");
const ErrorResponse = require("../utils/errorResponse");

module.exports.addCartItem = asyncHandler(async (req, res, next) => {
  const { UserID, ProductID, Quantity, Price } = req.body;
  const user = await User.findByPk(UserID);
  if (!user) {
    return next(new ErrorResponse(`User not found`, 404));
  }

  const product = await Product.findByPk(ProductID);
  if (!product) {
    return next(new ErrorResponse(`Product not found`, 404));
  }

  const cartitem = await CartItem.create({
    UserID,
    ProductID,
    Quantity,
    Price,
  });
  if (!cartitem) {
    return next(new ErrorResponse(`Error Syntax`, 403));
  }

  res
    .status(200)
    .json({ status: "success", msg: "Cart Item was added successfully" });
});

module.exports.removeCartItem = asyncHandler(async (req, res, next) => {
  const cartId = req.params.id;

  const cartitem = await CartItem.destroy({
    where: {
      CartItemID: cartId,
    },
  });

  if (!cartitem) {
    return next(new ErrorResponse(`Error Syntax or Cart Item not exist`, 403));
  }

  res
    .status(200)
    .json({ status: "success", msg: "Cart Item was removed successfully" });
});
