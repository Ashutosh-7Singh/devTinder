const mongoose=require("mongoose");;

const connectbDb=async()=>{
    // await mongoose.connect("mongodb://localhost:27017/devBaba")
    // console.log(process.env.DB_CONNECTION_SECRET);
    
    await mongoose.connect(process.env.DB_CONNECTION_SECRET)
}



module.exports=connectbDb;