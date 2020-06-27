
const jwt = require("../config/jwt");
const {User} = require("../models");
const {initPassport, authenticate} = require("../config/passport");

module.exports = app =>{
initPassport(app,User)
app.post("/auth/login", (req,res)=>{
    console.log(req.body)
});

app.post("/auth/signup", (req,res)=>{
    console.log(req.body)
});
}


