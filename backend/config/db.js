const mongoose=require("mongoose");
async function connectDB() {
     try{
        mongoose.connect(process.env.MONGOOSE_URL)
     }catch(err){
       console.log(err)
     }
}

module.exports=connectDB