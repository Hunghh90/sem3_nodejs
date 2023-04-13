let mongoose = require("mongoose");

let room = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:1,
        max:255
    },
    room: {
        type: String,
        required: true,
        min:1,
        max:255
    }

});

module.exports = mongoose.model("Room", room);