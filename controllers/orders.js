const asyncHandler = require("../middlewares/asyncHandler");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const ErrorResponse = require("../utils/errorResponse");

module.exports.getOrdersByUserID = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const orders = await Order.findAll({
    where: { UserID: userId },
    include: [
      {
        model: OrderItem,
      },
    ],
  });
  if (!orders) {
    return next(new ErrorResponse(`Orders not found`, 404));
  }

  res.status(200).json({ orders });
});
