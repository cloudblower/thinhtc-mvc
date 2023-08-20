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

module.exports.createNewOrder = asyncHandler(async (req, res, next) => {
  const { UserID, TotalAmount } = req.body;
  const order = await Order.create({
    UserID,
    TotalAmount,
  });
  if (!order) {
    return next(new ErrorResponse(`Error Syntax`, 403));
  }

  res
    .status(200)
    .json({ status: "success", msg: "Order was created successfully" });
});

module.exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const OrderID = req.query.OrderID;
  const order = await Order.destroy({
    where: {
      OrderID: OrderID,
    },
  });

  if (!order) {
    return next(new ErrorResponse(`Error Syntax`, 403));
  }

  res
    .status(200)
    .json({ status: "success", msg: "Order was deleted successfully" });
});

module.exports.paymentOrder = asyncHandler(async (req, res, next) => {
  const OrderID = req.query.OrderID;
  const currentDate = new Date();
  const formattedDate =
    currentDate.getUTCFullYear() +
    "-" +
    (currentDate.getUTCMonth() + 1) +
    "-" +
    currentDate.getUTCDate();
  const order = await Order.update(
    { OrderDate: formattedDate },
    {
      where: {
        OrderID: OrderID,
      },
    }
  );

  if (!order) {
    return next(new ErrorResponse(`Error Syntax`, 403));
  }

  res
    .status(200)
    .json({ status: "success", msg: "Order was paymented successfully" });
});
