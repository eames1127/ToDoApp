const express = require('express');
router = express.Router();

index = require("../Controller/index");

router.get("/", index.index);

module.exports = router