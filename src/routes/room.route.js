const express = require("express");
const roomController = require("../controllers/room.controller")
let router = express.Router();
router.get("/roomlist",roomController.get);
router.get("/createRoom",roomController.createForm);
router.post("/createRoom",roomController.save);
router.get("/editRoom/:id",roomController.editForm);
router.post("/editRoom/:id",roomController.update);
router.post("/deleteRoom/:id",roomController.delete);

module.exports = router;