const express = require('express')
const router = express.Router()

const userController = require("../controllers/admin");

router.get('/',(req,res,next)=>{
    res.send("From API Routes")
})

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);

module.exports = router