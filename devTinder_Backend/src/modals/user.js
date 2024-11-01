const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
});



// const User=mongoose.model("user",userSchema);
// module.exports=User;

// or

module.exports=mongoose.model("User",userSchema);