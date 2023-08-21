const express = require("express");
const router = express.Router();
const { getOrdersByUserID } = require("../controllers/orders");

router.get("/orders/:id", getOrdersByUserID);

module.exports = router;
