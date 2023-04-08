const express = require("express");
const database = require("./src/database");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Sever is running...");
})
app.set("view engine","ejs");



app.get("/", function(req,res){
    let student = {
        name: "Nguyen Van A",
        age:20,
    };
    res.render("home",{
        student: student,
    });
});

app.get("/create",(req,res)=>{
    res.render("createStudent")
});
app.get("/edit",(req,res)=>{
    res.render("editStudent")
});
