const Subject = require("../models/subject");

exports.get = (req,res)=>{
    Subject.find({}).then(rs=>{
        res.render("subject/list",{
            subject:rs
        })
    }).catch(err=>res.send(err));
};
exports.createForm = (req,res)=>{
    res.render("subject/createSubject")
};
exports.save = (req,res)=>{
    let s = req.body;
    let newSubject = new Subject(s);
    newSubject.save()
        .then(rs=>res.redirect("/subject/subjectlist"))
        .catch(err=>res.send(err))
};
exports.editForm = (req,res)=>{
    let id = req.params.id;
    Subject.findById(id).then(rs=>{
        res.render("subject/editSubject",{
            data:rs
        });
    }).catch(err=>res.send(err))
};
exports.update = (req,res)=>{
    let id = req.params.id;
    let s = req.body;
    Subject.findByIdAndUpdate(id,s)
        .then(rs=>res.redirect("/subject/subjectlist"))
        .catch(err=>res.send(err));
};
exports.delete = (req,res)=>{
    let id = req.params.id;
    Subject.findByIdAndDelete(id)
        .then(rs=>res.redirect("/subject/subjectlist"))
        .catch(err=>res.send(err));
};
