const express = require("express")
    const router = express.Router()
const {RegisterController,LoginController}= require("../controller/userController")


    // router.route("/register",).post(RegisterController)
    router.post("/register",RegisterController)
router.post("/login",LoginController)
    module.exports=router