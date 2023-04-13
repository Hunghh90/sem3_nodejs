const express = require("express");
let router = express.Router();
let subjectController = require("../controllers/subject.controller")
router.get("/subjectlist",subjectController.get);
router.get("/createSubject",subjectController.createForm);
router.post("/createSubject",subjectController.save);
router.get("/editSubject/:id",subjectController.editForm);
router.post("/editSubject/:id",subjectController.update);
router.post("/deleteSubject/:id",subjectController.delete);

module.exports = router;