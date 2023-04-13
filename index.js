const express = require("express");
require("dotenv").config();
const database = require("./src/database");

const {Model} = require("mongoose");


const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Sever is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const studentRoute = require("./src/routes/student.route");
app.use("/students", studentRoute);

const roomRoute = require("./src/routes/room.route");
app.use("/room",roomRoute);

const subjectRoute = require("./src/routes/subject.route");
app.use("/subject",subjectRoute);

const authRouter = require("./src/routes/auth.route");
app.use("/auth",authRouter)
app.get("/",(req,res)=>{
    res.render("home")
})

