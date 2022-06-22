const express = require("express")
const router = express.Router()
const deviceController = require("../controller/deviceController")


router.get("/device", deviceController.device)
module.exports = router
