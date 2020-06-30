const jwt = require("jsonwebtoken");
const exp = "1d";
require('dotenv').config()

module.exports = {
    secret: process.env.SECRET,
    sign: payload => jwt.sign(payload, process.env.SECRET, {expiresIn:exp})
}