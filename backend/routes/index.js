const express =require('express');
const router = express.Router();

const userSignUpController=require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn');
const userDetailsController = require('../controller/userDetails');
const authToken=require('../middleware/authToken')
const userLogoutController=require('../controller/userLogout');
const AllUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/logout",userLogoutController)



//Admin panel 

router.get('/get-all-users',authToken,AllUsers);
router.post("/update-user",authToken,updateUser)

module.exports = router;