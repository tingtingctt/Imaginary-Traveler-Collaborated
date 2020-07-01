const jwt = require("../config/jwt");
const {User} = require("../models");
const {initPassport, authenticate} = require("../config/passport");

module.exports = app =>{
// initPassport(app,User)
app.post("/auth/login", (req,res)=>{
    console.log(req.body)
    res.json("hello");
});

app.post("/auth/signup", (req,res)=>{
    console.log(req.body)
    res.json("hello");
});
}

// const router = require("express").Router();
// const booksController = require("../controllers/booksController");

// // Matches with "/api/books"
// router.route("/login")
//   .post(booksController.create);

// router.route("/signup")
//     .post(booksController.create);
    
// module.exports = router;
