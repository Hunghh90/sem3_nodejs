const User = require("../models/auth");
const bcrypt = require("bcryptjs");

exports.register = (req,res)=>{
    res.render("auth/register")
}
exports.create = async (req,res)=>{
    //kiem tra email da ton tai hay chua
    let existUser = await User.findOne({email:req.body.email});
    if(existUser) res.status(422).send("Email is exist");

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    //save to DB
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    user.save().then(rs=>res.send("done")).catch(err=>res.send(err));
}
exports.login = (req,res)=>{
    res.render("auth/login")
}
exports.check = async (req,res)=>{
    let checkUser = await User.findOne({email:req.body.email});
    if(!checkUser) res.status(401).send("Email or password is not correct");

    let checkPass = await bcrypt.compare(req.body.password,checkUser.password);
    if(!checkPass) res.status(401).send("Email or password is not correct");
    res.send(`User ${checkUser.name} has logged in`);
}