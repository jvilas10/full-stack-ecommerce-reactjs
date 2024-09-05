const userModel = require('../models/userModel')
async function updateUser(req , res){
    try{
   
        const {userId,email,name,role}=req.body

        const payload = {
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(role && {role:role})
        }
        const user = await userModel.findById(req.userId)

        const updateUser = await userModel.findByIdAndUpdate(userId,payload)
        if(updateUser){
            res.json({
                data:updateUser,
                message : "User Updated",
                error : false,
                success : true
            })
        }

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports=updateUser;
