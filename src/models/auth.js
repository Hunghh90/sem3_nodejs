let mongoose = require("mongoose");

let useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:1,
        max:255
    },
    email: {
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
    password:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 255,
    }

});

module.exports = mongoose.model("User", useSchema);