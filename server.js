const sequelize = require("./utils/database");
const { errorHandler } = require("./middlewares/errorHandler");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

// Import Models
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");
const Category = require("./models/Category");

// Import .env file
dotenv.config({ path: ".env" });

// Initialize Express
const app = express();

// Body parser
app.use(express.json());

// Log HTTP Requests in dev mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Route files
const users = require("./routes/users");
const orders = require("./routes/orders");

// Mount routers
app.use("/api/v1", users);
app.use("/api/v1", orders);

// Error-handler middleware
app.use(errorHandler);

// Relations
User.hasMany(Order, {
  foreignKey: "UserID",
  onDelete: "CASCADE",
});
Order.belongsTo(User, { as: "order", foreignKey: "UserID" });

Order.hasMany(OrderItem, {
  foreignKey: "OrderID",
  onDelete: "CASCADE",
});
OrderItem.belongsTo(User, { as: "orderitem", foreignKey: "OrderID" });

// Launch Express Server
const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`.yellow.bold)
);
