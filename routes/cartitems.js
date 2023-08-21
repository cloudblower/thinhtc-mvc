const express = require("express");
const router = express.Router();
const { addCartItem, removeCartItem } = require("../controllers/cartitems");

router.post("/cartitems", addCartItem);
router.delete("/cartitems/:id", removeCartItem);
module.exports = router;
