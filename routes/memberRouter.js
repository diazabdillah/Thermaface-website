const express = require("express")
const router = express.Router()
const memberController = require("../controller/memberController")


router.get("/member", memberController.member)
module.exports = router
