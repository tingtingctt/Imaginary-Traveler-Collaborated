const passport = require("../config/passport")
const {User} = require("../models");

module.exports = app =>{
// initPassport(app,User)
app.post("/auth/login", passport.authenticate("local") , (req,res)=>{
res.json(req.user)
});

app.post("/auth/signup", (req,res)=>{
    User.create(req.body).then(data=>{
        console.log(data)
        res.redirect(307, "/auth/login")
    }).catch(err=> res.status(401).json(err))
});

app.get("/auth/user_data", (req,res)=>{
    console.log(req.user)
    req.user ? User.findById(req.user._id).populate("books").then(data=>res.json(data)) : res.json("Not Logged In!")
})

app.get("/auth/logout", (req,res)=>{
    req.logout();
    res.redirect("/")
})
}

// const router = require("express").Router();
// const booksController = require("../controllers/booksController");

// // Matches with "/api/books"
// router.route("/login")
//   .post(booksController.create);

// router.route("/signup")
//     .post(booksController.create);
    
// module.exports = router;
