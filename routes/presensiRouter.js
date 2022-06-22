const express = require("express")
const router = express.Router()
const presensiController = require("../controller/presensiController")


router.get("/absensi", presensiController.presensi)
module.exports = router