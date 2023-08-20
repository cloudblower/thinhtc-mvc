const express = require("express");
const router = express.Router();
const {
  getOrdersByUserID,
  createNewOrder,
  deleteOrder,
  paymentOrder,
} = require("../controllers/orders");

router.get("/orders/:id", getOrdersByUserID);
router.post("/orders", createNewOrder);
router.delete("/orders", deleteOrder);
router.patch("/orders", paymentOrder);
module.exports = router;
