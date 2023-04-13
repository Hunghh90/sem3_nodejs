const Room = require("../models/room");

exports.get = (req,res)=>{
    Room.find({}).then(rs=>{
        res.render("class/list",{
            room:rs
        })
    }).catch(err=>{
        res.send(err)
    });
}
exports.createForm = (req,res)=>{
    res.render("class/createRoom")
}
exports.save = (req,res)=>{
    let s = req.body;

    let newRoom = new Room(s);
    newRoom.save().then(rs=>{
        res.redirect("/room/roomlist");
    }).catch(err=>{
        res.send(err);
    })
}
exports.editForm = (req,res)=>{

    let id = req.params.id;
    Room.findById(id).then(rs=>{
        res.render("class/editRoom",{
            data:rs
        });
    }).catch(err=>{
        res.send(err);
    })
}
exports.update = (req,res)=>{
    let id = req.params.id;
    let s = req.body;

    Room.findByIdAndUpdate(id,s)
        .then(rs=>res.redirect("/room/roomlist"))
        .catch(err=>res.send(err));
}
exports.delete = (req,res)=>{

    let id = req.params.id;
    Room.findByIdAndDelete(id)
        .then(rs=>res.redirect("/room/roomlist"))
        .catch(err=>res.send(err));
}