const express = require("express");
const { getUnits } = require("../controllers/unitController");

const router = express.Router();

router.get("/units", getUnits);

module.exports = router;
