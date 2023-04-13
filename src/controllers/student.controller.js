const Student = require("../models/student");

exports.get = async (req,res)=>{
    try {
        const l1 = await  Student.find({});
        const l2 = await  Student.find({name:"Hung"});
        res.render("student/list",{
            student1:l1,
            student2:l2
        });
    }catch (e) {
        res.send(e)
    }

};
exports.createForm = (req,res)=>{
    res.render("student/createStudent")
};
exports.save = (req,res)=>{
    let s = req.body;
    let newStudent = new Student(s);
    newStudent.save().then(rs=>{
        res.redirect("/students/studentlist");
    }).catch(err=>{
        res.send(err);
    })
};
exports.editForm = (req,res)=>{
    let id = req.params.id;
    Student.findById(id).then(rs=>{
        res.render("student/editStudent",{
            data:rs
        });
    }).catch(err=>{
        res.send(err);
    })
};
exports.update = (req,res)=>{
    let id = req.params.id;
    let s = req.body;
    Student.findByIdAndUpdate(id,s)
        .then(rs=>res.redirect("/students/studentlist"))
        .catch(err=>res.send(err));
};
exports.delete = (req,res)=>{
    let id = req.params.id;
    Student.findByIdAndDelete(id)
        .then(rs=>res.redirect("/students/studentlist"))
        .catch(err=>res.send(err));
};