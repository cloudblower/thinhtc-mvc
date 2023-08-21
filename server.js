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
const CartItem = require("./models/CartItem");

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
const cartitems = require("./routes/cartitems");
const cart = require("./routes/cart");
// Mount routers
app.use("/api/v1", users);
app.use("/api/v1", orders);
app.use("/api/v1", cartitems);
app.use("/api/v1", cart);

// Error-handler middleware
app.use(errorHandler);

// Relations
Order.hasMany(OrderItem, { foreignKey: "OrderID" });
OrderItem.belongsTo(Order, { foreignKey: "OrderID" });

// Launch Express Server
const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`.yellow.bold)
);
