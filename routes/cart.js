const express = require("express");
const router = express.Router();
const { checkoutCart } = require("../controllers/cart");

router.post("/cart/:userId/checkout", checkoutCart);
module.exports = router;
