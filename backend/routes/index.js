const express =require('express');
const router = express.Router();

const userSignInController=require('../controller/userSignUp')

router.post("/signup",userSignInController)

module.exports = router;