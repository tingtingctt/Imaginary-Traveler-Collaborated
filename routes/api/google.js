const router = require("express").Router();
const googleController = require("../../controllers/googleController");
const axios = require("axios");
router.route("/")
.get(googleController.findAll);

module.exports = router;