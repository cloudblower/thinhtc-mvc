const asyncHandler = require("../middlewares/asyncHandler");
const CartItem = require("../models/CartItem");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Product = require("../models/Product");

module.exports.checkoutCart = asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;
  const cartItems = await CartItem.findAll({
    where: { UserID: userId },
  });
  if (cartItems.length === 0) {
    return next(new ErrorResponse(`Cart is empty`, 400));
  }

  const newOrder = await Order.create({
    UserID: userId,
    OrderDate: new Date(),
    TotalAmount: 30,
  });

  for (const cartItem of cartItems) {
    await OrderItem.create({
      OrderID: newOrder.OrderID,
      ProductID: cartItem.ProductID,
      Quantity: cartItem.Quantity,
      Price: cartItem.Price,
    });
    await cartItem.destroy();
  }

  res.status(200).json({
    statusCode: res.statusCode,
    message: "Cart is checkouted sucessfully",
  });
});
