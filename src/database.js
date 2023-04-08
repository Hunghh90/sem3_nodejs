//connect mongoDB
const server = "mongodb://127.0.0.1:27017";
const database = "sem3_nodejs";
let mongoose = require("mongoose");

class Database{
    constructor() {
        this.__connect();
    }
    __connect(){
        mongoose.connect(`${server}/${database}`)
            .then(()=>{
                console.log("connecting...");
            })
            .catch(()=>{
                console.log(err);
            })

    }
}
module.exports = new Database();