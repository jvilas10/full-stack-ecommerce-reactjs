const mongoose=require("mongoose");
async function connectDB() {
     try{
        await mongoose.connect(process.env.MONGOOSS_URI);
        console.log('Connect to database')
     }catch(err){
       console.log(err)
     }
}

module.exports=connectDB