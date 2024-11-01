const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./modals/user.js");

app.use(express.json());
app.post("/signup", async (req, res) => {
  // console.log(req.body);

  // now we just have to add theis req.body in palce os user schema
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Succcessfully !!");
  } catch (err) {
    res.status(400).send("Error savng the user:" + err.send);
  }
});

// GET| User by email here we check by email
app.get("/user",async(req,res)=>{
  const userEmail=req.body.emailId;
  try{
    const users = await User.find({emailId:userEmail});
    if(users.length===0){
      res.status(404).send("User not found");
    }else{
      res.send(users);
    }
  }catch(err){
    res.status(400).send("Something went wrong");
  }
})

// Feed API =GET/FEED -get feed /data of all the users 
app.get("/feed",async(req,res)=>{
  const users= await User.find({});
  res.send(users)
})
connectDB()
  .then(() => {
    console.log("Database connection Eatablished");
    app.listen(7777, () => {
      console.log("Server is Successfully runnig on prot 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
