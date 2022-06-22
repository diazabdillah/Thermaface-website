const express = require("express")
const router = express.Router()
const homeController = require("../controller/homeController")


router.get("/", homeController.index)
router.get("/about", homeController.about)
router.get("/product", homeController.produk)
router.get("/testimoni", homeController.testimoni)
router.get("/faq", homeController.faq)
router.get("/contact", homeController.contact)
module.exports = router
