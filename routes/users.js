const express = require("express");
const router = express.Router();
const { getAllUser } = require("../controllers/users");

router.get("/users", getAllUser);

module.exports = router;
