const express = require("express")
const router = express.Router()
const visitorController = require("../controller/visitorController")


router.get("/visitor", visitorController.visitor)
module.exports = router
