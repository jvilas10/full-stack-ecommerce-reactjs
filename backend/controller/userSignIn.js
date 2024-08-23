async function userSignInController(req,res) {
    try{

    }catch(err){
        console.log(err);
        res.JSON({
            message:err,
            error:true,
            success:false
        })
    }
}