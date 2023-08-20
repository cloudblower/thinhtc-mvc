const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

module.exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.findAll();
  if (!users) {
    return next(new ErrorResponse(`Users not found`, 404));
  }

  res.status(200).json({ users });
});
