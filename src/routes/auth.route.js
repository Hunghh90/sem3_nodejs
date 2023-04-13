const express = require("express");
let router = express.Router();
const authController = require("../controllers/auth.controller")
router.get("/register",authController.register)
router.post("/register",authController.create)
router.get("/login",authController.login)
router.post("/login",authController.check)


module.exports = router;