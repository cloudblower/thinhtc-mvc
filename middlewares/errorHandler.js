const ErrorResponse = require("../utils/errorResponse");
module.exports.errorHandler = (err, req, res, next) => {
  console.log(err.message.red);
  console.log(err.stack.red);

  const statusCode = err.statusCode ? err.statusCode : 500;
  const message =
    err instanceof ErrorResponse ? err.message : "Internal Server Error";
  res.status(statusCode).json({ statusCode, message });
};
