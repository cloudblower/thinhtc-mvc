const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/User");

module.exports.getAllUser = asyncHandler(async (req, res, next) => {
  const users = await User.findAll();
  if (!users) {
    return next(new ErrorResponse(`Users not found`, 404));
  }

  res.status(200).json({ users });
});
