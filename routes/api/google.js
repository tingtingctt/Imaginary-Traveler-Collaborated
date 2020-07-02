const router = require("express").Router();
const googleController = require("../../controllers/googleController");
const axios = require("axios");
router.route("/")
.get(googleController.findAll);
router.get("/search", (req,res)=>{
    console.log(req.query);
    //google books api endpoint with axios, send results back to front end. save in db ?
})

module.exports = router;