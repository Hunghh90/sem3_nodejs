const express = require("express");
let router = express.Router();
let studentController = require("../controllers/student.controller")
router.get("/studentlist", studentController.get);
router.get("/createStudent",studentController.createForm);
router.post("/createStudent",studentController.save);
router.get("/editStudent/:id",studentController.editForm);
router.post("/editStudent/:id",studentController.update);
router.post("/deleteStudent/:id",studentController.delete);

module.exports = router;