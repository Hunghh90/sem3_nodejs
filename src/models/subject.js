let mongoose = require("mongoose");

let subject = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:1,
        maxLength:255,
        unique:true
    },
    totalHour:{
        type:Number,
        required: true,
        min:1,
        max:999
    },
    teacher:{
        name:{
            type:String,
            required:true,
            minLength: 1,
            maxLength: 255
        },
        email:{
            type: String,
            required: true,
            minLength:[6,"do dai toi thieu la 6"],
            maxLength:255,
            unique:true,
            validate: {
                validator: (v)=>{
                    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                    return v.match(emailFormat);
                }
            }
        },
        tel:{
            type:String,
            required:true,
            validate:{
                validator: (v)=>{
                    const regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
                    return v.match(regExp) && v.startsWith("0")
                },
                message: t => `${t.value} phai bat dau bang 0`
            }
        }
    }
})

module.exports = mongoose.model("Subject", subject);