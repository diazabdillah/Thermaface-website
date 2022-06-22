const express = require("express")
const router = express.Router()
const manageuserController = require("../controller/manageuserController")


router.get("/manage", manageuserController.manage)
module.exports = router
